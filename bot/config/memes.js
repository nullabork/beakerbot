let types = {
  IMAGE: 'IMAGE',
  TEXT: 'TEXT',
  IMAGE_OR_TEXT: 'IMAGE_OR_TEXT',
  PLOT: 'PLOT',
  PARAM_TEXT: 'PARAM_TEXT',

}

const memes = [
  {
    keyword: 'beaker',
    template: 'default.html',
    
    meme: {
      w: 1920,
      h: 1200,
      image: {
        url: 'images/beaker.jpg',
        align: 'right center'
      }
    },
    defaultFrameIndex: 0,
    
    frames: [{
      type: types.IMAGE_OR_TEXT,
      x: 100, y: 100, w: 1000, h: 800, a: 0,

      text: {
        valign: 'center',
        halign: 'flex-start',
        value: ''
      }
    }]
  },
  {
    keyword: 'oscar',
    template: 'default.html',
    
    meme: {
      w: 1920,
      h: 1080,
      image: {
        url: 'images/oscar.jpg',
        align: 'center center'
      }
    },
    defaultFrameIndex: 0,
    frames: [{
      type: types.IMAGE_OR_TEXT,
      x: 100, y: 100, w: 900, h: 800, a: 0,

      text: {
        valign: 'center',
        halign: 'flex-start',
        value: ''
      }
    }]
  },
  {
    keyword: 'waldorf',
    template: 'default.html',
    
    meme: {
      w: 900,
      h: 909,
      image: {
        url: 'images/waldorf.jpg',
        align: 'center center'
      }
    },
    defaultFrameIndex: 0,
    frames: [{
      type: types.IMAGE_OR_TEXT,
      x: 124, y: 477, w: 637, h: 419, a: 0,

      text: {
        valign: 'center',
        halign: 'flex-start',
        value: ''
      }
    }]
  },
  {
    keyword: 'grump',
    template: 'default.html',
    
    meme: {
      w: 498,
      h: 331,
      image: {
        url: 'images/grump.jpg',
        align: 'center center'
      }
    },
    defaultFrameIndex: 0,
    frames: [{
      type: types.IMAGE_OR_TEXT,
      x: 242, y: 30, w: 218, h: 264, a: 0,

      text: {
        valign: 'center',
        halign: 'flex-end',
        color: 'black',
        value: ''
      }
    }]
  },
  {
    keyword: 'cookie',
    template: 'default.html',
    
    meme: {
      w: 1016,
      h: 657,
      image: {
        url: 'images/cookie.jpg',
        align: 'center bottom'
      }
    },
    defaultFrameIndex: 0,
    frames: [{
      type: types.IMAGE_OR_TEXT,
      x: 43,  y: 80, w: 288, h: 403, a: 0,

      text: {
        valign: 'center',
        halign: 'center',
        value: ''
      }
    }]
  },
  {
    keyword: 'vegeta',
    template: 'default.html',
    
    meme: {
      w: 1166,
      h: 1025,
      image: {
        url: 'images/vege.png',
        align: 'center center'
      }
    },
    defaultFrameIndex: 0,
    frames: [{
      type: types.IMAGE_OR_TEXT,
      x: 471.727,  y: 341.027, w: 371.814, h: 210.156, a: 0,

      text: {
        valign: 'center',
        halign: 'center',
        color: 'black',
        shadow: 'white',
        value: ''
      }
    }]
  },
  {
    keyword: 'animal',
    template: 'default.html',
    
    meme: {
      w: 1446,
      h: 1500,
      image: {
        url: 'images/animal.jpg',
        align: 'center right'
      }
    },
    defaultFrameIndex: 0,
    frames: [{
      type: types.IMAGE_OR_TEXT,
      x: 30.2, y: 482.9, w: 697.1, h: 514.3, a: 0,

      text: {
        valign: 'center',
        halign: 'flex-end',
        color: 'black',
        shadow: 'white',
        strokeSize: '2px',
        strokeColor: 'rgba(255,255,255,0.3)',
        value: ''
      }
    }]
  }, {
    keyword: 'swedish',
    template: 'default.html',
    
    meme: {
      w: 1000,
      h: 525,
      image: {
        url: 'images/swedish.jpg',
        align: 'center center'
      }
    },
    defaultFrameIndex: 0,
    frames: [{
      type: types.IMAGE_OR_TEXT,
      x: 15, y: 135, w: 293,  h: 306,  a: 0,

      text: {
        valign: 'center',
        halign: 'flex-start',
        value: ''
      }
    }]
  },
  {
    keyword: 'snoop',
    template: 'default.html',
    
    meme: {
      w: 1384 ,
      h: 821 ,
      image: {
        url: 'images/snoop.jpg',
        align: 'center center'
      }
    },
    defaultFrameIndex: 0,
    frames: [{
      type: types.IMAGE_OR_TEXT,
      x: 29, y: 29, w: 821, h: 763, a: 0,
      text: {
        valign: 'center',
        halign: 'center',
        color: 'black',
        shadow: 'white',
        strokeSize: '0px',
        strokeColor: 'rgba(255,255,255,0.01)',
        value: ''
      }
    }]
  },
  {
    keyword: 'trumpdesk',
    template: 'default.html',
    
    meme: {
      w: 853 ,
      h: 844 ,
      image: {
        url: 'images/trump_background.png',
        align: 'center center'
      }
    },
    defaultFrameIndex: 0,
    frames: [{
      type: types.IMAGE_OR_TEXT,
      x: 299, y: 95, w: 586, h: 515, a: 0,
      background: "white",
      text: {
        valign: 'flex-start',
        halign: 'center',
        color: 'black',
        shadow: 'white',
        strokeSize: '0px',
        strokeColor: 'rgba(255,255,255,0.01)',
        value: ''
      },
      image : {
        align: 'center center'
      },
      css : `
transform: matrix3d(-0.224997, 0.180977, 0, -0.000562, 
-0.683572, 0.025673, 0, 0.000058, 
0, 0, 1, 0, 
437.746929, 237.838708, 0, 1);
transform-origin: 3px 75px 0px;
`
    },
    {
      type: types.IMAGE,
      x: 0, y: 0, w: 853, h: 844, a: 0,
      image: {
        url: 'images/trump_foreground.png',
        align: 'center center'
      }
    }]
  },
  {
    keyword: 'musk',
    template: 'default.html',
    
    meme: {
      w: 1578 ,
      h: 754 ,
      image: {
        url: 'images/musk_background.png',
        align: 'center center'
      }
    },
    defaultFrameIndex: 0,
    frames: [{
      type: types.IMAGE_OR_TEXT,
      x: 20, y: 20, w: 1211, h: 714, a: 0,
      text: {
        valign: 'flex-start',
        halign: 'flex-start',
        color: 'white',
        shadow: 'white',
        css: `
          position: relative;
          width: 1011px;
        `,
        value: ''
      },
      image : {
        align: 'left center'
      },
    },
    {
      type: types.IMAGE,
      x: 0, y: 0, w: 1578, h: 754, a: 0,
      image: {
        url: 'images/musk_foreground.png',
        align: 'center right'
      }
    }]
  }
];

module.exports = {
  memeConfig: () => memes,
  types
}