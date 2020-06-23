const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require("./config");
const commands = require("./commands.json");

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
	} else if (msg.content === `${prefix}commands`) {
		let output = "Commands |  Description \n";
		commands.map(cmd => {
			output = `${output}${cmd.command}: ${cmd.description}\n`;
		});
		msg.channel.send(output);
	}
});

client.login(token);
