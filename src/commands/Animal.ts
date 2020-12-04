import {Command} from '../Command';
import {MemeInterface, TypeEnum, AlignEnum, TemplateEnum, FrameInterface, TextInterface} from '../Meme';

export class Animal extends Command implements MemeInterface {

    public template = TemplateEnum.DefaultHTML;

    public meme = {
      w: 1446,
      h: 1500,
      image: {
        url: "images/animal.jpg",
        align: "center right",
      },
    };

    public defaultFrameIndex = 0;

    public frames: FrameInterface[] = [
        {
          type: TypeEnum.ImageOrText,
          x: 30.2,
          y: 482.9,
          w: 697.1,
          h: 514.3,
          a: 0,
          text: {
            valign: AlignEnum.Center,
            halign: AlignEnum.FlexEnd,
            color: "black",
            shadow: "white",
            strokeSize: "2px",
            strokeColor: "rgba(255,255,255,0.3)",
            value: "",
          },
        }
    ];
}
