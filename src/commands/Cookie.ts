import {MemeInterface, TypeEnum, AlignEnum, TemplateEnum, FrameInterface, TextInterface} from '../Meme';
import {Command} from '../Command';

export class Cookie extends Command implements MemeInterface {
    public template = TemplateEnum.DefaultHTML;

    public meme = {
      w: 1016,
      h: 657,
      image: {
        url: "images/cookie.jpg",
        align: "center bottom",
      },
    };

    public defaultFrameIndex = 0;

    public frames: FrameInterface[] = [
        {
          type: TypeEnum.ImageOrText,
          x: 43,
          y: 80,
          w: 288,
          h: 403,
          a: 0,
          text: {
            valign: AlignEnum.Center,
            halign: AlignEnum.Center,
            value: "",
          },
        }
    ];
}
