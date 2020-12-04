"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waldorf = void 0;
const Command_1 = require("../Command");
class Waldorf extends Command_1.Command {
    constructor() {
        super(...arguments);
        this.template = "default.html" /* DefaultHTML */;
        this.meme = {
            w: 900,
            h: 909,
            image: {
                url: "images/waldorf.jpg",
                align: "center center",
            },
        };
        this.defaultFrameIndex = 0;
        this.frames = [
            {
                type: "IMAGE_OR_TEXT" /* ImageOrText */,
                x: 124,
                y: 477,
                w: 637,
                h: 419,
                a: 0,
                text: {
                    valign: "center" /* Center */,
                    halign: "flex-start" /* FlexStart */,
                    value: "",
                },
            }
        ];
    }
}
exports.Waldorf = Waldorf;
