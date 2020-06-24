const Discord = require("discord.js");

const twitchEmbed = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("Going Live on Twitch")
	.setURL("https://twitch.tv/moebizz")
	.setDescription("Moe is Live come hang out :D")
	.setThumbnail("https://i.imgur.com/q51MISE.gifv")
	.addFields({ name: "You know how it is", value: "Streaming whatever" })
	.setTimestamp();

module.exports = twitchEmbed;
