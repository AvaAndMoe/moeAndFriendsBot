const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require("./config");

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
	switch(msg.content) {
		case `${prefix}ping`:
			msg.reply("Pong!");
		case `${prefix}bestNina`:
			msg.reply(` you know who the best Nina is.`);
		case `${prefix}coinToss`:
			msg.channel.send(Math.random() * 1 ? "Heads" : "Tails");
	}
});

client.login(token);
