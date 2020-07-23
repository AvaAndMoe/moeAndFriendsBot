const commands = require("./commands.json");
function listCommands(msg) {
	let output = "Commands |  Description \n";
	commands.map(cmd => {
		output = `${output}${cmd.command}: ${cmd.description}\n`;
	});
	msg.channel.send(output);
}
module.exports = listCommands;
