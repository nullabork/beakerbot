/*jshint esversion: 9 */
var Jimp = require('jimp'),
  Discord = require('discord.js'),
  auth = require("./auth.json");

var source_images = [{
  filename: 'beaker.jpg',
  top: 100,
  left: 100,
  max_width: 1000,
  max_height: 800,
  valign: 'middle',
  halign: 'middle',
  outpath: 'image.jpg'
},
{
  filename: 'oscar.jpg',
  top: 100,
  left: 100,
  max_width: 900,
  max_height: 800,
  valign: 'middle',
  halign: 'middle',
  outpath: 'image.jpg'
},
{
  filename: 'cookie.jpg',
  top: 80,
  left: 43,
  max_width: 288,
  max_height: 403,
  valign: 'bottom',
  halign: 'middle',
  outpath: 'image.jpg'
},
{
  filename: 'cookie.png',
  top: 0,
  left: 0,
  max_width: 925.714,
  max_height: 1114.286,
  valign: 'bottom',
  halign: 'middle',
  outpath: 'image.png'
},
{
  filename: 'vege.png',
  top: 341.027,
  left: 471.727,
  max_width: 371.814,
  max_height: 210.156,
  valign: 'middle',
  halign: 'middle',
  outpath: 'image.png'
},
{
  filename: 'animal.jpg',
  top: 482.9,
  left: 30.2,
  max_width: 697.1,
  max_height: 514.3,
  valign: 'middle',
  halign: 'right',
  outpath: 'image.png'
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

async function doFunny(spec, message) {

  message.channel.startTyping(1);
      
  // did they drop an attachment?
  if ( message.attachments.size > 0)
  {
    var p = await inset(spec, message.attachments.first().url, spec.outpath);
    message.channel.send("", {files: [spec.outpath]});
  }
  
  // if they didnt, get the last 5 messages and see if there's any attachments we can inset in the beaker bg
  else {
    var done = false;
    message.channel.fetchMessages({limit: 10})
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
      message.channel.fetchMessages({limit: 10})
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

// when messages come in
client.on('message', async message => {
  try {
    // is it a beaker command
    if ( message.cleanContent == '!beaker') {
      doFunny(source_images[0], message);
    }
    else if ( message.cleanContent == '!oscar') {
      doFunny(source_images[1], message);
    }
    else if ( message.cleanContent == '!cookie') {
      doFunny(source_images[2], message);
    }
    else if ( message.cleanContent == '!cookie2') {
      doFunny(source_images[3], message);
    }
    else if ( message.cleanContent == '!vege9000') {
      doFunny(source_images[4], message);
    }
    else if ( message.cleanContent == '!animal') {
      doFunny(source_images[5], message);
    }
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

