import { Message } from "discord.js";
import { Command } from "./Command";

export interface BotConfigInterface {
    char: string
}

export interface ExecuteProps {
    message: Message,
    commands?: any[],
    botConfig: BotConfigInterface
}

export interface CommandInterface {
    execute?(props:ExecuteProps): boolean
    keyword: string;
}
export interface MemeInterface extends CommandInterface {
    template:          TemplateEnum;
    meme:              BaseMemeInterface;
    defaultFrameIndex: number;
    frames:            FrameInterface[];
}

export interface FrameInterface {
    type:        TypeEnum;
    x:           number;
    y:           number;
    w:           number;
    h:           number;
    a:           number;
    text?:       TextInterface;
    background?: string;
    image?:      ImageInterface;
    css?:        string;
}

export interface ImageInterface {
    align: string;
    url?:  string;
}

export interface TextInterface {
    valign:       AlignEnum;
    halign:       AlignEnum;
    value:        string;
    color?:       string;
    shadow?:      string;
    strokeSize?:  string;
    strokeColor?: string;
    css?:         string;
}

export interface BaseMemeInterface {
    w:     number;
    h:     number;
    image: ImageInterface;
}

export const enum AlignEnum {
    Center = "center",
    CenterBottom = "center bottom",
    FlexEnd = "flex-end",
    FlexStart = "flex-start",
}

export const enum TypeEnum {
    Image = "IMAGE",
    ImageOrText = "IMAGE_OR_TEXT",
}

export const enum TemplateEnum {
    DefaultHTML = "default.html",
}