"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cookie = void 0;
const Command_1 = require("../Command");
class Cookie extends Command_1.Command {
    constructor() {
        super(...arguments);
        this.template = "default.html" /* DefaultHTML */;
        this.meme = {
            w: 1016,
            h: 657,
            image: {
                url: "images/cookie.jpg",
                align: "center bottom",
            },
        };
        this.defaultFrameIndex = 0;
        this.frames = [
            {
                type: "IMAGE_OR_TEXT" /* ImageOrText */,
                x: 43,
                y: 80,
                w: 288,
                h: 403,
                a: 0,
                text: {
                    valign: "center" /* Center */,
                    halign: "center" /* Center */,
                    value: "",
                },
            }
        ];
    }
}
exports.Cookie = Cookie;
