const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require("./config");
const twitchEmbed = require("./twitchEmbed");
const commands = require("./commands.json");

function listCommands(msg) {
	let output = "Commands |  Description \n";
	commands.map(cmd => {
		output = `${output}${cmd.command}: ${cmd.description}\n`;
	});
	msg.channel.send(output);
}

const validRole = (guild, roles) => {
	if (guild === "homies") {
		if (roles.includes("725073064471035976") || roles.includes("104756584533479424")) {
			return true;
		}
	}
	return false;
};

function eightBall(msg) {
	let responses = [
		"It is certain.",
		"It is decidedly so.",
		"Without a doubt.",
		"Yes - definitely.",
		"You may rely on it.",
		"As I see it, yes.",
		"Most likely.",
		"Outlook good.",
		"Yes.",
		"Signs point to yes.",
		"Reply hazy, try again.",
		"Ask again later.",
		"Better not tell you now.",
		"Cannot predict now.",
		"Concentrate and ask again.",
		"Don't count on it.",
		"My reply is no.",
		"My sources say no.",
		"Outlook not so good.",
		"Very doubtful.",
	];

	let answer = Math.floor(Math.random() * responses.length);
	msg.channel.send(`Question: ${msg.content.slice(7)}\n8 ball says: ${responses[answer]}`);
}

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
		case `${prefix}clean`:
			let value = 10;
			if (parseInt(subCommand.trim()) > 0) {
				value = parseInt(subCommand.trim());
			}
			if (validRole("homies", msg.member._roles)) {
				msg.channel.bulkDelete(value);
			}
			break;
		case `${prefix}live`: 
			if (validRole("homies", msg.member._roles)) {
				msg.channel.send(twitchEmbed);
			}
			break;
		case `${prefix}squad`:
			msg.channel.send(`<@&725150520670552095> test`);
			// msg.channel.send(new Discord.MessageEmbed()
			// 	.set("Let's get it!")
			// 	.setImage("https://i.imgur.com/UCUjEWC.jpg"));
			break;
	}
});

client.login(token);
