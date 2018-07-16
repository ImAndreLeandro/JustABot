const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor("Bot's invite link")
    .setColor([54, 57, 64])
    .setDescription("Click [here](https://discordapp.com/oauth2/authorize?client_id=464571851608162304&scope=bot&permissions=126016)")
    .setTimestamp();
  message.channel.send(embed);
}
