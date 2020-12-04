"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beaker = void 0;
const Command_1 = require("../Command");
class Beaker extends Command_1.Command {
    constructor() {
        super(...arguments);
        this.template = "default.html" /* DefaultHTML */;
        this.meme = {
            w: 1920,
            h: 1200,
            image: {
                url: "images/beaker.jpg",
                align: "right center",
            }
        };
        this.defaultFrameIndex = 0;
        this.frames = [
            {
                type: "IMAGE_OR_TEXT" /* ImageOrText */,
                x: 100,
                y: 100,
                w: 1000,
                h: 800,
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
exports.Beaker = Beaker;
