function kick(msg) {
  let user = msg.mentions.members.first();
  let reason = msg.content.split(' ')[2];
  console.log(reason);
  console.log(user);
  user.kick(reason);
}

module.exports = kick;