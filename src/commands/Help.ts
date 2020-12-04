import {CommandInterface, ExecuteProps} from '../Meme';
import {Command} from '../Command';
import { Message, MessageEmbed } from "discord.js";



export class Help extends Command implements CommandInterface {
  execute({message, commands, botConfig}: ExecuteProps) {
    const embed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Beaker bot usage')
      .setDescription(`?${botConfig.char}<command> <optional_text_or_image_url>`)
      .setThumbnail('https://media.giphy.com/media/gJWNDpwdkMTew/giphy.gif')

    if(!commands) {
      return true;
    }

    let command_str = '';
    for (const CMD of commands) {
      const command: Command = new CMD();
      command_str += "**" + command.keyword + "**\u2001"
    }

    embed.addField('**Commands**', command_str,  true);
    embed.setFooter('Beaker bot', 'https://media.giphy.com/media/gJWNDpwdkMTew/giphy.gif');


    message.channel.send(embed);
    return true;
  }
}
