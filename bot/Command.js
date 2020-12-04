"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
class Command {
    constructor() {
        this._hidden = true;
        return this;
    }
    static get command() {
        return new this();
    }
    get hidden() {
        return this._hidden;
    }
    get keyword() {
        return this.constructor.name.toLowerCase();
    }
}
exports.Command = Command;
