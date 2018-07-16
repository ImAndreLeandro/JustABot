const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor("Bot Information", client.user.avatarURL)
    .setDescription("Invite [here](https://discordapp.com/oauth2/authorize?client_id=464571851608162304&scope=bot&permissions=126016) or join official/support server [here](https://discord.gg/4ZAs9Sr)!")
    .addField("Guilds", ":desktop: " + client.guilds.size, true)
    .addField("Users", ":joystick: " + client.users.size, true)
    .addField("Channels", ":page_facing_up: " + client.channels.size, true)
    .addField("Bot Version", "v1.0.0", true)
    .addField("Operative System", "<:linux:467768924432498698> Linux", true)
    .addField("Uptime", ":stopwatch: 0s", true)
    .addField("Country", ":flag_pt: Portugal", true)
    .addField("Programming Language", "<:javascript:463837463287431169> JavaScript", true)
    .addField("Library", ":books: discord.js", true)
    .addField("Commands", ":bookmark_tabs: 57", true)
    .addField("Total XP", ":large_blue_diamond: " + "Calculating...", true)
    .addField("Total Coins", ":moneybag: " + "Calculating...", true)
    .setColor([54, 57, 64])
    .setTimestamp();
  message.channel.send(embed);
}
