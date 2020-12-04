
export class Command {
    private _hidden: boolean = true;

    constructor() {
        return this;
    }

    static get command(): Command {
        return new this();
    }

    get hidden(): boolean {
        return this._hidden;
    }

    get keyword(): string {
        return this.constructor.name.toLowerCase();
    }
}