const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require("./config");

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
	if (msg.content === `${prefix}ping`) {
		msg.reply("Pong!");
	} else if (msg.content === `${prefix}bestNina`) {
		msg.reply(` you know who the best Nina is.`);
	} else if (msg.content === `${prefix}coinToss`) {
		msg.channel.send(Math.random() * 1 ? "Heads" : "Tails");
	}
});

client.login(token);
