"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Help = void 0;
const Command_1 = require("../Command");
const discord_js_1 = require("discord.js");
class Help extends Command_1.Command {
    execute({ message, commands, botConfig }) {
        const embed = new discord_js_1.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Beaker bot usage')
            .setDescription(`?${botConfig.char}<command> <optional_text_or_image_url>`)
            .setThumbnail('https://media.giphy.com/media/gJWNDpwdkMTew/giphy.gif');
        if (!commands) {
            return true;
        }
        let command_str = '';
        for (const CMD of commands) {
            const command = new CMD();
            command_str += "**" + command.keyword + "**\u2001";
        }
        embed.addField('**Commands**', command_str, true);
        embed.setFooter('Beaker bot', 'https://media.giphy.com/media/gJWNDpwdkMTew/giphy.gif');
        message.channel.send(embed);
        return true;
    }
}
exports.Help = Help;
