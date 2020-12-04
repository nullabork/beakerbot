"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Musk = void 0;
const Command_1 = require("../Command");
class Musk extends Command_1.Command {
    constructor() {
        super(...arguments);
        this.template = "default.html" /* DefaultHTML */;
        this.meme = {
            w: 1578,
            h: 754,
            image: {
                url: "images/musk_background.png",
                align: "center center",
            },
        };
        this.defaultFrameIndex = 0;
        this.frames = [
            {
                type: "IMAGE_OR_TEXT" /* ImageOrText */,
                x: 20,
                y: 20,
                w: 1211,
                h: 714,
                a: 0,
                text: {
                    valign: "flex-start" /* FlexStart */,
                    halign: "flex-start" /* FlexStart */,
                    value: "",
                    color: "white",
                    shadow: "white",
                    css: `
              position: relative;
              width: 1011px;
            `,
                },
                image: {
                    align: "left center",
                },
            },
            {
                type: "IMAGE" /* Image */,
                x: 0,
                y: 0,
                w: 1578,
                h: 754,
                a: 0,
                image: {
                    url: "images/musk_foreground.png",
                    align: "center right",
                },
            }
        ];
    }
}
exports.Musk = Musk;
