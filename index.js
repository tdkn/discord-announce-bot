const Eris = require("eris");
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;
const MESSAGE = "帰ろ?";

exports.handler = (event, context, callback) => {
    let bot = new Eris(DISCORD_TOKEN);

    bot.on("ready", () => {
        bot.createMessage(CHANNEL_ID, MESSAGE).then(() => {
            bot.disconnect()
            context.succeed("Success");
        }).catch(error => context.fail(error));
    });

    bot.connect();
};

