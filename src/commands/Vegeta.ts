import {MemeInterface, TypeEnum, AlignEnum, TemplateEnum, FrameInterface, TextInterface} from '../Meme';
import {Command} from '../Command';

export class Vegeta extends Command implements MemeInterface {
    public template = TemplateEnum.DefaultHTML;

    public meme = {
      w: 1166,
      h: 1025,
      image: {
        url: "images/vege.png",
        align: "center center",
      },
    }

    public defaultFrameIndex = 0;

    public frames: FrameInterface[] = [
        {
          type: TypeEnum.ImageOrText,
          x: 471.727,
          y: 341.027,
          w: 371.814,
          h: 210.156,
          a: 0,
          text: {
            valign: AlignEnum.Center,
            halign: AlignEnum.Center,
            value: "",
            color: "black",
            shadow: "white",
          },
        }
    ];
}
