const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require("./config");
const commands = require("./commands.json");

function listCommands(msg) {
	let output = "Commands |  Description \n";
	commands.map(cmd => {
		output = `${output}${cmd.command}: ${cmd.description}\n`;
	});
	msg.channel.send(output);
}

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
	switch(msg.content) {
		case `${prefix}ping`:
			msg.reply(` you know who the best Nina is.`);
			break;
		case `${prefix}coinToss`:
			msg.channel.send(Math.random() * 1 ? "Heads" : "Tails");
			break;
		case `${prefix}commands`:
			listCommands(msg);
			break;
	}
});

client.login(token);