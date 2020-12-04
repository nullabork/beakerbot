"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vegeta = void 0;
const Command_1 = require("../Command");
class Vegeta extends Command_1.Command {
    constructor() {
        super(...arguments);
        this.template = "default.html" /* DefaultHTML */;
        this.meme = {
            w: 1166,
            h: 1025,
            image: {
                url: "images/vege.png",
                align: "center center",
            },
        };
        this.defaultFrameIndex = 0;
        this.frames = [
            {
                type: "IMAGE_OR_TEXT" /* ImageOrText */,
                x: 471.727,
                y: 341.027,
                w: 371.814,
                h: 210.156,
                a: 0,
                text: {
                    valign: "center" /* Center */,
                    halign: "center" /* Center */,
                    value: "",
                    color: "black",
                    shadow: "white",
                },
            }
        ];
    }
}
exports.Vegeta = Vegeta;
