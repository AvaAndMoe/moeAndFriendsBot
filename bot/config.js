require("dotenv").config();

const config = {
	prefix: "!",
	token: process.env.CLIENT_TOKEN,
	roles: {
		"valorant": 725150520670552095,
		"homies": 725073064471035976
	}
};

module.exports = config;
