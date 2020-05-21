const { createCanvas, loadImage } = require('canvas'),
  fs = require('fs'),
  webshot = require('webshot-node'),
  nunjucks = require('nunjucks'),
  imageToBase64 = require('image-to-base64'),
  path = require('path'),
  puppeteer = require('puppeteer');

nunjucks.configure('bot/templates');

async function main (config, output) {

  //convert image into base64 if it can be
  let memeImagePath = path.resolve(__dirname, config.meme.image.url);

  if(fs.existsSync(memeImagePath)) {
     //convert image into base64 if it can be
    config.meme.image.url = 'data:image/png;base64,' + await imageToBase64(memeImagePath );
  }

  //convert all frame images into base64 if they can be
  for (let frame of config.frames) {
    if(!frame.image || !frame.image.url) continue;

    let frameImagePath = path.resolve(__dirname, frame.image.url);
    if(fs.existsSync(frameImagePath)) {
      frame.image.url = 'data:image/png;base64,' + await imageToBase64( frameImagePath );
    }    
  }

  //render template
  let template = nunjucks.render(config.template, config);
  //test by writing html out

  if(output) {
    fs.writeFileSync('index.html', template);
  }

  let options = {
    siteType: 'html',
    screenSize: {
      width: config.meme.w , height: config.meme.h
    }, 
    shotSize: {
      width: config.meme.w , height: config.meme.h
    }
  };


  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: config.meme.w,
    height: config.meme.h
  });
  await page.setContent(template);
  const watchDog = page.waitForFunction('window.textSize == true');
  await watchDog;
  let buffer = await page.screenshot();
  await browser.close();  

  return buffer;
} 
 
// main({ });

module.exports = main;