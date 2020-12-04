import {MemeInterface, TypeEnum, AlignEnum, TemplateEnum, FrameInterface} from '../Meme';
import {Command} from '../Command';

export class Snoop extends Command implements MemeInterface {
    public template = TemplateEnum.DefaultHTML;

    public meme = {
      w: 1384,
      h: 821,
      image: {
        url: "images/snoop.jpg",
        align: "center center",
      },
    }

    public defaultFrameIndex = 0;

    public frames: FrameInterface[] = [
        {
          type: TypeEnum.ImageOrText,
          x: 29,
          y: 29,
          w: 821,
          h: 763,
          a: 0,
          
          text: {
            valign: AlignEnum.Center,
            halign: AlignEnum.Center,
            value: "",
            color: "black",
            shadow: "white",
            strokeSize: "0px",
            strokeColor: "rgba(255,255,255,0.01)",
          },
        }
    ];
}