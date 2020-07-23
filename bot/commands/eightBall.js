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

module.exports = eightBall;
