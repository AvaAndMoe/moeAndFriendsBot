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

const validRole = (clan, member) => {
	return member.roles.cache.some(role => role.name === clan);
};

const subscribe = (msg, subCommand) => {
	switch (subCommand.toLowerCase()) {
		case "valorant": {
			if (validRole("Valorant", msg.member)) {
				msg.channel.send(`${msg.author} is already subscribed to Valorant`);
			} else {
				const role = msg.guild.roles.cache.find(role => role.name === "Valorant");
				msg.member.roles.add(role);
				msg.channel.send(`${msg.author} is now subscribed to Valorant`);
			}
			break;
		}
		default: {
			msg.channel.send(`${msg.author} must select a valid role`);
			break;
		}
	}
};

const unSubscribe = (msg, subCommand) => {
	switch (subCommand.toLowerCase()) {
		case "valorant": {
			if (validRole("Valorant", msg.member)) {
				const member = msg.member;
				const role = msg.guild.roles.cache.find(role => role.name === "Valorant");
				msg.member.roles.remove(role);
				msg.channel.send(`${msg.author} is now unsubscribed to Valorant`);
			} else {
				msg.channel.send(`${msg.author} is not subscribed to Valorant`);
			}
			break;
		}
		default: {
			msg.channel.send(`${msg.author} must select a valid role`);
			break;
		}
	}
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
		case `${prefix}live`: {
			if (validRole("Homies", msg.member)) {
				msg.channel.send(twitchEmbed);
			}
		}
	}
});

client.login(token);
