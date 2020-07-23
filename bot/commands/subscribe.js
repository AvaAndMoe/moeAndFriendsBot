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

module.exports = { unSubscribe, subscribe };
