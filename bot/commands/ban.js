const ban = msg => {
	const messages = msg.content.split(" ");
	const user = msg.mentions.users.first();
	msg.guild.members.ban(user, { days: parseInt(messages[2]), reason: messages[3] });
};
module.exports = ban;
