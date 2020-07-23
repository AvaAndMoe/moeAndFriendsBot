const { unSubscribe, subscribe } = require("./subscribe");
const commands = require("./commands");
const eightBall = require("./eightBall");
const ban = require("./ban");

module.exports = { unSubscribe, subscribe, eightBall, listCommands: commands, ban };
