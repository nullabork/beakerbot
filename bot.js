/*jshint esversion: 9 */
var Jimp = require('jimp'),
  Discord = require('discord.js'),
  auth = require("./auth.json"),
  textToImage = require('text-to-image'),
  fs = require('fs');

var char = auth.char || "!";

var source_images = [{
  filename: 'beaker.jpg',
  top: 100,
  left: 100,
  max_width: 1000,
  max_height: 800,
  valign: 'middle',
  halign: 'middle',
  outpath: 'image.jpg',
  keyword: 'beaker',
},
{
  filename: 'oscar.jpg',
  top: 100,
  left: 100,
  max_width: 900,
  max_height: 800,
  valign: 'middle',
  halign: 'middle',
  outpath: 'image.jpg',
  keyword: 'oscar',
},
{
  filename: 'cookie.jpg',
  top: 80,
  left: 43,
  max_width: 288,
  max_height: 403,
  valign: 'bottom',
  halign: 'middle',
  outpath: 'image.jpg',
  keyword: 'cookie',
},
{
  filename: 'cookie.png',
  top: 0,
  left: 0,
  max_width: 925.714,
  max_height: 1114.286,
  valign: 'bottom',
  halign: 'middle',
  outpath: 'image.png',
  keyword: 'cookie2',
},
{
  filename: 'vege.png',
  top: 341.027,
  left: 471.727,
  max_width: 371.814,
  max_height: 210.156,
  valign: 'middle',
  halign: 'middle',
  outpath: 'image.png',
  keyword: 'vege9000',
},
{
  filename: 'animal.jpg',
  top: 482.9,
  left: 30.2,
  max_width: 697.1,
  max_height: 514.3,
  valign: 'middle',
  halign: 'right',
  outpath: 'image.png',
  keyword: 'animal',
},
{
  filename: 'swedish.jpg',
  top: 135,
  left: 15,
  max_width: 293,
  max_height: 306,
  valign: 'middle',
  halign: 'middle',
  outpath: 'image.jpg',
  keyword: 'swedish',
}];

// inset one image in another
async function inset(image_spec, insetpath, outpath) {

  var bg = await Jimp.read(image_spec.filename);

  var x = image_spec.left;
  var y = image_spec.top;

  var inset = await Jimp.read(insetpath)
    .then(img => {
      var w = img.bitmap.width > img.bitmap.height ? image_spec.max_width : Jimp.AUTO;
      var h = img.bitmap.width <= img.bitmap.height ? image_spec.max_height : Jimp.AUTO;
      return img.resize(w, h); 
    })
    .then(img => {
      y = getTop(img, image_spec);
      x = getLeft(img, image_spec);
      return img;
    })
    .catch(err => console.error(err));
  
  bg.composite( inset, x, y );
  
  return bg.write(outpath);
}

function getTop(img, image_spec) {
  if ( image_spec.valign == 'middle')
    return img.bitmap.width > img.bitmap.height ? image_spec.top + (image_spec.max_height - img.bitmap.height) / 2 : image_spec.top;
  else if ( image_spec.valign == 'bottom') 
    return img.bitmap.width > img.bitmap.height ? image_spec.top + (image_spec.max_height - img.bitmap.height) : image_spec.top;
  else
    return image_spec.top;
}

function getLeft(img, image_spec) {
  if ( image_spec.halign == 'middle')
    return img.bitmap.width <= img.bitmap.height ? image_spec.left + (image_spec.max_width - img.bitmap.width) / 2 : image_spec.left;
  else if ( image_spec.halign == 'right')
    return img.bitmap.width <= img.bitmap.height ? image_spec.left + (image_spec.max_width - img.bitmap.width) : image_spec.left;
  else 
    return image_spec.left;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
  if(number > Math.max(in_max, in_min)) number = in_max;
  if(number < Math.min(in_max, in_min)) number = in_min;
  let n = (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  return n
}

async function doFunny(spec, message, text) {

  message.channel.startTyping(1);

  if(text) {
    var fontSize = mapNumber(text.length, 1, 15, 150, 40);
    var lineHeight = mapNumber(text.length, 1, 15, 200, 55);

    fs.unlinkSync("caption-" + spec.outpath);
    var uri = await textToImage.generate(text, {
      debug: true,
      maxWidth: 400,
      fontSize: 900,
      fontFamily: 'Arial',
      lineHeight: lineHeight,
      fontSize: fontSize,
      textAlign: "right",
      margin: 15,
      bgColor: "black",
      textColor: "white",
      debugFilename: "caption-" + spec.outpath
    });

    var p = await inset(spec, "caption-" + spec.outpath, spec.outpath);
    message.channel.send("", {files: [spec.outpath]});
    done = true;
  }
  
  // did they drop an attachment?
  else if ( message.attachments.size > 0)
  {
    var p = await inset(spec, message.attachments.first().url, spec.outpath);
    message.channel.send("", {files: [spec.outpath]});
  }
  
  // if they didnt, get the last 5 messages and see if there's any attachments we can inset in the beaker bg
  else {
    var done = false;
    message.channel.fetchMessages({limit: 30})
      .then(msgs => {
        msgs.forEach(async m => {
          if (m.author.bot) return;
          if (done ) return;
          if (!done && m.attachments.size > 0)
          {
            done = true;
            var p = await inset(spec, m.attachments.first().url, spec.outpath);
            message.channel.send("", {files: [spec.outpath]});
          }
        });
      });

    if (!done) {
      message.channel.fetchMessages({limit: 30})
      .then(msgs => {
        msgs.forEach(async m => {
          if (m.author.bot) return;
          if (done ) return;
          if (!done && (m.cleanContent.startsWith('https://') || m.cleanContent.startsWith('http://')))
          {
            done = true;
            var p = await inset(spec, m.cleanContent, spec.outpath);
            message.channel.send("", {files: [spec.outpath]});

          }
        });
      });
    }

   // if (!done) {
   //   message.reply('No image!');
   // }
  }

  message.channel.stopTyping(true);

}

var client = new Discord.Client();
client.login(auth.token);

var images = [

];

// when messages come in
client.on('message', async message => {
  try {
    source_images.forEach(function(source){
      var isCommand = message.cleanContent.indexOf(char + source.keyword) == 0,
        text = message.cleanContent.replace(char + source.keyword, '').trim();

      if(isCommand) {
        doFunny(source, message, text);
      }
    })
  }
  catch(ex) { Common.error(ex); }
});

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

