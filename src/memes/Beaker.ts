import {MemeInterface, TypeEnum, AlignEnum, TemplateEnum} from '../Meme';

export class Beaker implements MemeInterface {

    public keyword = 'beaker';

    public template = TemplateEnum.DefaultHTML;

    public meme = {
        w: 1920,
        h: 1200,
        image: {
            url: "images/beaker.jpg",
            align: "right center",
        }
    }

    public defaultFrameIndex = 0;

    public frames = [
        {
          type: TypeEnum.ImageOrText,
          x: 100,
          y: 100,
          w: 1000,
          h: 800,
          a: 0,
  
          text: {
            valign: AlignEnum.Center,
            halign: AlignEnum.FlexStart,
            value: "",
          },
        }
    ];



}