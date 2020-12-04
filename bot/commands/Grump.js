"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grump = void 0;
const Command_1 = require("../Command");
class Grump extends Command_1.Command {
    constructor() {
        super(...arguments);
        this.template = "default.html" /* DefaultHTML */;
        this.meme = {
            w: 498,
            h: 331,
            image: {
                url: "images/grump.jpg",
                align: "center center",
            },
        };
        this.defaultFrameIndex = 0;
        this.frames = [
            {
                type: "IMAGE_OR_TEXT" /* ImageOrText */,
                x: 242,
                y: 30,
                w: 218,
                h: 264,
                a: 0,
                text: {
                    valign: "center" /* Center */,
                    halign: "flex-start" /* FlexStart */,
                    color: "black",
                    value: "",
                },
            }
        ];
    }
}
exports.Grump = Grump;
