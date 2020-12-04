"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oscar = void 0;
const Command_1 = require("../Command");
class Oscar extends Command_1.Command {
    constructor() {
        super(...arguments);
        this.template = "default.html" /* DefaultHTML */;
        this.meme = {
            w: 1920,
            h: 1080,
            image: {
                url: "images/oscar.jpg",
                align: "center center",
            },
        };
        this.defaultFrameIndex = 0;
        this.frames = [
            {
                type: "IMAGE_OR_TEXT" /* ImageOrText */,
                x: 100,
                y: 100,
                w: 900,
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
exports.Oscar = Oscar;
