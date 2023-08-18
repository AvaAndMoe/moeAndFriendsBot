require("dotenv").config();

const config = {
  prefix: "!",
  token: process.env.CLIENT_TOKEN,
};

module.exports = config;
