exports.run = async(client, message, args) => {
  
  var user = message.mentions.users.first() || message.author;
  var balance = // Get users balance
  
  if (balance === null) balance = 0;
  
  message.channel.send(`:credit_card: **${message.author.username}**, your balance is **${balance}**!`);
}
