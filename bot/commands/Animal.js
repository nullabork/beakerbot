"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
const Command_1 = require("../Command");
class Animal extends Command_1.Command {
    constructor() {
        super(...arguments);
        this.template = "default.html" /* DefaultHTML */;
        this.meme = {
            w: 1446,
            h: 1500,
            image: {
                url: "images/animal.jpg",
                align: "center right",
            },
        };
        this.defaultFrameIndex = 0;
        this.frames = [
            {
                type: "IMAGE_OR_TEXT" /* ImageOrText */,
                x: 30.2,
                y: 482.9,
                w: 697.1,
                h: 514.3,
                a: 0,
                text: {
                    valign: "center" /* Center */,
                    halign: "flex-end" /* FlexEnd */,
                    color: "black",
                    shadow: "white",
                    strokeSize: "2px",
                    strokeColor: "rgba(255,255,255,0.3)",
                    value: "",
                },
            }
        ];
    }
}
exports.Animal = Animal;
