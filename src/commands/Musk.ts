import {MemeInterface, TypeEnum, AlignEnum, TemplateEnum, FrameInterface} from '../Meme';
import {Command} from '../Command';

export class Musk extends Command implements MemeInterface {
    public template = TemplateEnum.DefaultHTML;

    public meme = {
      w: 1578,
      h: 754,
      image: {
        url: "images/musk_background.png",
        align: "center center",
      },
    }

    public defaultFrameIndex = 0;

    public frames: FrameInterface[] = [
        {
          type: TypeEnum.ImageOrText,
          x: 20,
          y: 20,
          w: 1211,
          h: 714,
          a: 0,
  
          text: {
            valign: AlignEnum.FlexStart,
            halign: AlignEnum.FlexStart,
            value: "",
            color: "white",
            shadow: "white",
            css: `
              position: relative;
              width: 1011px;
            `,
          },
          image: {
            align: "left center",
          },
        },
        {
          type: TypeEnum.Image,
          x: 0,
          y: 0,
          w: 1578,
          h: 754,
          a: 0,
          image: {
            url: "images/musk_foreground.png",
            align: "center right",
          },
        }
    ];
}