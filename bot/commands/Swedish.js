"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swedish = void 0;
const Command_1 = require("../Command");
class Swedish extends Command_1.Command {
    constructor() {
        super(...arguments);
        this.template = "default.html" /* DefaultHTML */;
        this.meme = {
            w: 1000,
            h: 525,
            image: {
                url: "images/swedish.jpg",
                align: "center center",
            },
        };
        this.defaultFrameIndex = 0;
        this.frames = [
            {
                type: "IMAGE_OR_TEXT" /* ImageOrText */,
                x: 15,
                y: 135,
                w: 293,
                h: 306,
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
exports.Swedish = Swedish;
