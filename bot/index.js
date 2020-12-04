/*jshint esversion: 9 */
const { Client, MessageAttachment } = require("discord.js");
const auth = require("./config/auth.json");
const { memes, type } = require("./memes.js");
const fs = require("fs");
const layoutBuffer = require("./layout");
const figlet = require("figlet");
const { LogError, LogWarning, LogSuccess } = require("ak19logger-npm");

const logError = new LogError(); // ERROR Logger Object
const logWarning = new LogWarning(); // WARNING Logger Object
const logSuccess = new LogSuccess();

let char = auth.char || "!";
const botConfig = {
  char,
};

let client = new Client();

const memeMap = {};

for (const MemeConfig of memes) {
  const mc = new MemeConfig();
  memeMap[mc.keyword] = MemeConfig;
}

// when messages come in
client.on("message", async (message) => {
  try {
    //figure out if it's a command we want :p command is always going to be the first word
    let isCommand = message.cleanContent.startsWith(char);
    //does it looks like a command we care about
    if (!isCommand) {
      return;
    }

    const keyword = message.cleanContent.replace(char, "").split(/\s+/)[0];
    const commandShouldBe = char + keyword;

    let MemeConfig = memeMap[keyword];

    //is it actually a config
    if (!MemeConfig) {
      return;
    }
    let config = new MemeConfig();

    if (config.execute) {
      const ret = config.execute({ message, commands: memes, botConfig });

      if (typeof ret !== true) {
        return;
      }
    }

    message.channel.startTyping(1);

    let paramRegex = /\b[a-z_]+=[^\n=]+(\n|$)/gi;

    let matches = message.cleanContent.match(paramRegex);
    //return KV array into as object
    config.params = (matches || []).reduce((a, b) => {
      let bits = b.trim().split("=");
      return { [bits[0]]: bits[1], ...a };
    }, {});

    //trim off params
    let text = message.cleanContent.trim().replace(paramRegex, "");

    //trim off command
    text = text.replace(commandShouldBe, "").trim();

    if (!config.frames) {
      config.frames = [];
    }

    //custom parser for the templates to use, can be defined in the config
    if (config.custom) {
      for (let [key, func] of Object.entries(config.custom)) {
        config.custom[key] = func(text, config);
      }
    }

    if (config.frames.length) {
      if (!config.frames[config.defaultFrameIndex].image) {
        config.frames[config.defaultFrameIndex].image = {};
      }
    }

    //if extra text is used in the command set that text so it can be rendered
    if (text) {
      let ticker = text.trim().match(/^\$[a-z0-9]+/i);
      if (ticker && ticker.length) {
        ticker = ticker[0].replace("$", "");
        const url = `https://charts2.finviz.com/chart.ashx?t=${ticker}&s=m`;
        config.frames[config.defaultFrameIndex].image.url = url;
      } else if (/(http)?s?:?(\/\/[^"']*\.)/i.test(text.trim())) {
        config.frames[config.defaultFrameIndex].image.url = text.trim();
      }

      //the config allows for multiple layers
      //config.defaultFrameIndex allows you to define which
      //layer is desired for discord to render text or images into
      else if (config.frames.length) {
        config.frames[config.defaultFrameIndex].text.value = text;
      }
    }

    //if no extra text find an image in the last 60 messages and attatch that instead
    if (!text) {
      let msgs = await message.channel.messages.fetch({ limit: 60 });
      let msg = msgs.find((m) => {
        return !m.author.bot && m.attachments.size;
      });

      if (config.frames.length && msg) {
        config.frames[
          config.defaultFrameIndex
        ].image.url = msg.attachments.first().url;
      }
    }

    if (!config.frames[config.defaultFrameIndex].image.url && !text) {
      let msgs = await message.channel.messages.fetch({ limit: 60 });
      let msg = msgs.find((m) => {
        const match = m.content.match(
          /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i
        );

        return match && match.length;
      });

      if (!msg) {
        message.channel.send(`Opps, try pasting an image into discord.`);
        return;
      }

      const match = msg.content.match(
        /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i
      );
      if (config.frames.length && match && match.length) {
        config.frames[config.defaultFrameIndex].image.url = match[0];
      }
    }

    //load puppeteer chrome headless, load and hydrate template and return as image buffer
    let buffer = await layoutBuffer(config, auth.output);

    //djs stuff
    const attachment = new MessageAttachment(buffer, "image.png");
    message.channel.send(``, attachment);
  } catch (ex) {
    console.log(ex);
  }

  message.channel.stopTyping(true);
});

client.on("ready", (async) => {
  if (console && console.log) {
    console.log(
      figlet.textSync("Beaker Bot", {
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      })
    );
    logSuccess.success("Beaker bot loaded");
    console.log("_____________________________________");
    logWarning.warning(
      "If you make changes to the typescript commands you will need to run `npm run build`"
    );
  }
});

// capture a whole pile of useful information
client.on("error", console.log);
client.on("guildUnavailable", (guild) =>
  console.log("guild unavailable:", guild.id)
);
client.on("rateLimit", (info) => console.log("rate limited", info));
client.on("reconnecting", () => console.log("reconnecting"));
client.on("resume", (replayed) => console.log("resume: ", replayed));
client.on("warn", (info) => console.log("warn:", info));

client.on("disconnect", (info) => console.log("disconnect:", info));

// something goes wrong we didnt think of or having got around to putting a band-aid fix on
process.on("uncaughtException", (err) =>
  console.log("uncaughtException: ", err)
);

client.login(auth.token);
