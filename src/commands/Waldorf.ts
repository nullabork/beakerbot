import {MemeInterface, TypeEnum, AlignEnum, TemplateEnum, FrameInterface, TextInterface} from '../Meme';
import {Command} from '../Command';

export class Waldorf extends Command implements MemeInterface {
    public template = TemplateEnum.DefaultHTML;

    public meme = {
      w: 900,
      h: 909,
      image: {
        url: "images/waldorf.jpg",
        align: "center center",
      },
    };

    public defaultFrameIndex = 0;

    public frames: FrameInterface[] = [
        {
          type: TypeEnum.ImageOrText,
          x: 124,
          y: 477,
          w: 637,
          h: 419,
          a: 0,
          text: {
            valign: AlignEnum.Center,
            halign: AlignEnum.FlexStart,
            value: "",
          },
        }
    ];
}
