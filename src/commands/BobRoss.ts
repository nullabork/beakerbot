import {MemeInterface, TypeEnum, AlignEnum, TemplateEnum, FrameInterface} from '../Meme';
import {Command} from '../Command';

export class BobRoss extends Command implements MemeInterface {
    public template = TemplateEnum.DefaultHTML;

    public meme = {
      w: 1379,
      h: 900,
      image: {
        url: "images/bob_background.png",
        align: "center center",
      },
    }

    public defaultFrameIndex = 0;

    public frames: FrameInterface[] = [
        {
          type: TypeEnum.ImageOrText,
          x: 0,
          y: 0,
          w: 586,
          h: 647,
          a: 0,
          background: "white",
          text: {
            valign: AlignEnum.FlexStart,
            halign: AlignEnum.Center,
            color: "black",
            shadow: "black",
            strokeSize: "0px",
            strokeColor: "rgba(255,255,255,0)",
            value: "",
          },
          image: {
            align: "center center",
          },
          css: `
            transform: matrix3d(
              0.275028, -0.198761, 0, -0.000363, 
              0.028931, 0.849221, 0, 0.000028, 
              0, 0, 1, 0, 
              876, 159, 0, 1
            );
            transform-origin: 0px 0px 0px;
          `,
        },
        {
          type: TypeEnum.Image,
          x: 0,
          y: 0,
          w: 1379,
          h: 900,
          a: 0,
          image: {
            url: "images/bob_foreground.png",
            align: "center center",
          },
        }
    ];
}