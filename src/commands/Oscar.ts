import {MemeInterface, TypeEnum, AlignEnum, TemplateEnum, FrameInterface, TextInterface} from '../Meme';
import {Command} from '../Command';

export class Oscar extends Command implements MemeInterface {

    public template = TemplateEnum.DefaultHTML;

    public meme = {
      w: 1920,
      h: 1080,
      image: {
        url: "images/oscar.jpg",
        align: "center center",
      },
    }

    public defaultFrameIndex = 0;

    public frames: FrameInterface[] = [
        {
          type: TypeEnum.ImageOrText,
          x: 100,
          y: 100,
          w: 900,
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