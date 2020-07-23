const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix, roles } = require("./config");
const twitchEmbed = require("./twitchEmbed");
const { unSubscribe, subscribe, listCommands, eightBall } = require("./commands");

const validRole = (clan, member) => {
	return member.roles.cache.some(role => role.name === clan);
};

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
	const command = (msg.content.match(/^![\w\d]*\b/) || [])[0];
	const subCommand = (msg.content.split(/^![\w\d]*\b/) || [])[1];
	switch (command) {
		case `${prefix}bestNina`:
			msg.reply(` you know who the best Nina is.`);
			break;
		case `${prefix}coinToss`:
			msg.channel.send(Math.floor(Math.random() * 2) === 0 ? "Heads" : "Tails");
			break;
		case `${prefix}commands`:
			listCommands(msg);
			break;
		case `${prefix}8ball`:
			eightBall(msg);
			break;
		case `${prefix}subscribe`:
			subscribe(msg, subCommand.trim());
			break;
		case `${prefix}unsubscribe`:
			unSubscribe(msg, subCommand.trim());
			break;
		case `${prefix}clean`:
			let value = 10;
			if (parseInt(subCommand.trim()) > 0) {
				value = parseInt(subCommand.trim());
			}
			if (validRole("Homies", msg.member)) {
				msg.channel.bulkDelete(value);
			}
			break;
		case `${prefix}live`:
			if (validRole("Homies", msg.member)) {
				msg.channel.send(twitchEmbed);
			}
			break;
		case `${prefix}squad`:
			msg.channel.send(`<@&725150520670552095>`);
			msg.channel.send(
				new Discord.MessageEmbed()
					.setTitle("Let's get it!")
					.setImage("https://i.imgur.com/UCUjEWC.jpg"),
			);
			break;
	}
});

client.login(token);
