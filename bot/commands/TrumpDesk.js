"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrumpDesk = void 0;
const Command_1 = require("../Command");
class TrumpDesk extends Command_1.Command {
    constructor() {
        super(...arguments);
        this.template = "default.html" /* DefaultHTML */;
        this.meme = {
            w: 853,
            h: 844,
            image: {
                url: "images/trump_background.png",
                align: "center center",
            },
        };
        this.defaultFrameIndex = 0;
        this.frames = [
            {
                type: "IMAGE_OR_TEXT" /* ImageOrText */,
                x: 299,
                y: 95,
                w: 586,
                h: 515,
                a: 0,
                text: {
                    valign: "flex-start" /* FlexStart */,
                    halign: "center" /* Center */,
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
                type: "IMAGE" /* Image */,
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
}
exports.TrumpDesk = TrumpDesk;
