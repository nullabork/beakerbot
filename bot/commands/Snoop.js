"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snoop = void 0;
const Command_1 = require("../Command");
class Snoop extends Command_1.Command {
    constructor() {
        super(...arguments);
        this.template = "default.html" /* DefaultHTML */;
        this.meme = {
            w: 1384,
            h: 821,
            image: {
                url: "images/snoop.jpg",
                align: "center center",
            },
        };
        this.defaultFrameIndex = 0;
        this.frames = [
            {
                type: "IMAGE_OR_TEXT" /* ImageOrText */,
                x: 29,
                y: 29,
                w: 821,
                h: 763,
                a: 0,
                text: {
                    valign: "center" /* Center */,
                    halign: "center" /* Center */,
                    value: "",
                    color: "black",
                    shadow: "white",
                    strokeSize: "0px",
                    strokeColor: "rgba(255,255,255,0.01)",
                },
            }
        ];
    }
}
exports.Snoop = Snoop;
