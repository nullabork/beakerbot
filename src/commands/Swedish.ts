import {MemeInterface, TypeEnum, AlignEnum, TemplateEnum, FrameInterface} from '../Meme';
import {Command} from '../Command';

export class Swedish extends Command implements MemeInterface {
    public template = TemplateEnum.DefaultHTML;

    public meme = {
      w: 1000,
      h: 525,
      image: {
        url: "images/swedish.jpg",
        align: "center center",
      },
    }

    public defaultFrameIndex = 0;

    public frames: FrameInterface[] = [
        {
          type: TypeEnum.ImageOrText,
          x: 15,
          y: 135,
          w: 293,
          h: 306,
          a: 0,
  
          text: {
            valign: AlignEnum.Center,
            halign: AlignEnum.FlexStart,
            value: "",
          },
        }
    ];
}