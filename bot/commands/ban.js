const ban = msg => {
	const messages = msg.content.split(" ");
	const user = msg.mentions.users.first();
	msg.guild.members.ban(user, { days: 1, reason: messages[2] });
};
module.exports = ban;
