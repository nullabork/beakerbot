import {MemeInterface, TypeEnum, AlignEnum, TemplateEnum, FrameInterface, TextInterface} from '../Meme';
import {Command} from '../Command';

export class Grump extends Command implements MemeInterface {

    public template = TemplateEnum.DefaultHTML;

    public meme = {
      w: 498,
      h: 331,
      image: {
        url: "images/grump.jpg",
        align: "center center",
      },
    };

    public defaultFrameIndex = 0;

    public frames: FrameInterface[] = [
        {
          type: TypeEnum.ImageOrText,
          x: 242,
          y: 30,
          w: 218,
          h: 264,
          a: 0,
          text: {
            valign: AlignEnum.Center,
            halign: AlignEnum.FlexStart,
            color: "black",
            value: "",
          },
        }
    ];
}
