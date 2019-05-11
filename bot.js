var Jimp = require('jimp'),
  Discord = require('discord.js'),
  auth = require("./auth.json");

var top = 100;
var left = 100;

var max_width = 1000;

// inset one image in another
async function inset(bgpath, insetpath, outpath) {

  var bg = await Jimp.read(bgpath);
  var inset = await Jimp.read(insetpath)
    .then(img => img.resize(max_width, Jimp.AUTO))
    .catch(err => console.error(err));
  
  bg.composite( inset, left, top );
  
  return bg.write(outpath);
}

var client = new Discord.Client();
client.login(auth.token);

// when messages come in
client.on('message', async message => {
  try {
    var path = 'beaker-update.jpg';
    
    // is it a beaker command
    if ( message.cleanContent == '!beaker') {
      
      // did they drop an attachment?
      if ( message.attachments.size > 0)
      {
        var p = await inset('beaker.jpg', message.attachments.first().url, path);
        message.reply("", {files: [path]});
      }
      
      // if they didnt, get the last 5 messages and see if there's any attachments we can inset in the beaker bg
      else {
        var done = false;
        message.channel.fetchMessages({limit: 5})
          .then(msgs => {
            msgs.forEach(async m => {
              if (done ) return;
              if (!done && m.attachments.size > 0)
              {
                done = true;
                var p = await inset('beaker.jpg', m.attachments.first().url, path);
                m.reply("", {files: [path]});
              }
            });
          });
      }
    }
  }
  catch(ex) { Common.error(ex); }
});
