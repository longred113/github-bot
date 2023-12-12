require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("Bot is ready");
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("/feedback")) {
    const feedbackMessage = message.content.slice("/feedback".length).trim();
    if (feedbackMessage !== "") {
      message.reply({
        content:
          "Thanks for reaching out! We’ll be passing this along to the team directly! Good luck playing the game!",
      });
    }
  }
});
client.login(process.env.DISCORD_BOT_ID);
