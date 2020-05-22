/*jshint esversion: 9 */
let { Client, MessageAttachment } = require('discord.js');
  auth = require('./config/auth.json'),
  { memeConfig, type } = require('./config/memes.js'),
  
  textToImage = require('text-to-image'),
  fs = require('fs'),
  layoutBuffer = require('./layout'),
  {  parse, isGraph, extract } = require('./makeNumbers');

var char = auth.char || '!';


var client = new Client();

// when messages come in
client.on('message', async message => {
  try {
    
    let memes = memeConfig();
    memes.forEach(async function(config){
      
      config = JSON.parse(JSON.stringify(config));
      
      //figure out if it's a command we want :p
      let isCommand = message.cleanContent.startsWith(char + config.keyword);

      if (!isCommand) {
        return;
      }

      message.channel.startTyping(1);

      //param parsing regex
      let paramRegex = /\b[a-z_]+=[^\n=]+(\n|$)/ig;

      let matches = message.cleanContent.match(paramRegex);
      //return KV array into as object 
      config.params = ( matches || [] ).reduce((a,b) => {
          let bits = b.trim().split('=');
          return { [bits[0]]:bits[1],  ...a };
      }, {});
      
      //trim off params
      let text = message.cleanContent.trim().replace(paramRegex,'');
      
      //trim off command
      text = text.replace(char + config.keyword, '').trim();

      if(!config.frames) {
        config.frames = [];
      }

      //custom parser for the templates to use, can be defined in the config 
      if(config.custom) {
        for (let [key, func] of Object.entries(config.custom)) {
          config.custom[key] = func(text, config);
        }
      }

      if(isGraph(text)) {
        let extracted = extract(text);

        let frame = config.frames[config.defaultFrameIndex];
        
        frame.plot = {
          extracted,
          data: parse(extracted.chars, frame.w, frame.h)
        };
      } else

      //if extra text is used in the command set that text so it can be rendered
      if(text) {
        //the config allows for multiple layers 
        //config.defaultFrameIndex allows you to define which 
        //layer is desired for discord to render text or images into
        if(config.frames.length) {
          config.frames[config.defaultFrameIndex].text.value = text;
        }
      }
      
      //if no extra text find an image in the last 60 messages and attatch that instead
      else if(!text) {
        let msgs = await message.channel.messages.fetch({ limit: 60 });
        let msg = msgs.find(m => { 
          return !m.author.bot && m.attachments.size
        });
        
        //no attachments found in the last 60
        if(!msg) {
          message.channel.send(`Opps, try pasting an image into discord.`);
          return;
        }
        
        if(config.frames.length) {
          if(!config.frames[config.defaultFrameIndex].image) {
            config.frames[config.defaultFrameIndex].image = {};
          }

          config.frames[config.defaultFrameIndex].image.url = msg.attachments.first().url
        }
      }

      //load puppeteer chrome headless, load and hydrate template and return as image buffer
      let buffer = await layoutBuffer(config, auth.output);
      
      //djs stuff
      const attachment = new MessageAttachment(buffer, 'image.png');
      message.channel.send(``, attachment);

    }); 

  } catch(ex) { console.log(ex) }

  message.channel.stopTyping(true);

});




// client.on('ready', async => {
//   client.guilds.forEach(server => { console.log(server.name); });
// });

// capture a whole pile of useful information
client.on('error',            console.log);
client.on('guildUnavailable', guild    => console.log('guild unavailable:', guild.id));
client.on('rateLimit',        info     => console.log('rate limited', info));
client.on('reconnecting',     ()       => console.log('reconnecting'));
client.on('resume',           replayed => console.log('resume: ', replayed));
client.on('warn',             info     => console.log('warn:', info));

client.on('disconnect',       info     => console.log('disconnect:', info));

// something goes wrong we didnt think of or having got around to putting a band-aid fix on
process.on('uncaughtException', err => console.log('uncaughtException: ', err));

client.login(auth.token);



