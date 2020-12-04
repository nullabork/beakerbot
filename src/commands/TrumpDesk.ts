import {MemeInterface, TypeEnum, AlignEnum, TemplateEnum, FrameInterface} from '../Meme';
import {Command} from '../Command';

export class TrumpDesk extends Command implements MemeInterface {
    public template = TemplateEnum.DefaultHTML;

    public meme = {
      w: 853,
      h: 844,
      image: {
        url: "images/trump_background.png",
        align: "center center",
      },
    }

    public defaultFrameIndex = 0;

    public frames: FrameInterface[] = [
        {
          type: TypeEnum.ImageOrText,
          x: 299,
          y: 95,
          w: 586,
          h: 515,
          a: 0,
  
          text: {
            valign: AlignEnum.FlexStart,
            halign: AlignEnum.Center,
            color: "black",
            shadow: "white",
            strokeSize: "0px",
            strokeColor: "rgba(255,255,255,0.01)",
            value: "",
          },
          image: {
            align: "center center",
          },
          css: `
            transform: matrix3d(-0.224997, 0.180977, 0, -0.000562, 
            -0.683572, 0.025673, 0, 0.000058, 
            0, 0, 1, 0, 
            437.746929, 237.838708, 0, 1);
            transform-origin: 3px 75px 0px;
          `,
        },
        {
          type: TypeEnum.Image,
          x: 0,
          y: 0,
          w: 853,
          h: 844,
          a: 0,
          image: {
            url: "images/trump_foreground.png",
            align: "center center",
          },
        }
    ];
}