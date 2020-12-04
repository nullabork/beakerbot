"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BobRoss = void 0;
const Command_1 = require("../Command");
class BobRoss extends Command_1.Command {
    constructor() {
        super(...arguments);
        this.template = "default.html" /* DefaultHTML */;
        this.meme = {
            w: 1379,
            h: 900,
            image: {
                url: "images/bob_background.png",
                align: "center center",
            },
        };
        this.defaultFrameIndex = 0;
        this.frames = [
            {
                type: "IMAGE_OR_TEXT" /* ImageOrText */,
                x: 0,
                y: 0,
                w: 586,
                h: 647,
                a: 0,
                background: "white",
                text: {
                    valign: "flex-start" /* FlexStart */,
                    halign: "center" /* Center */,
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
                type: "IMAGE" /* Image */,
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
}
exports.BobRoss = BobRoss;
