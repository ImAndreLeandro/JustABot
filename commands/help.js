const Discord = require('discord.js');

exports.run = (client, message, args) => {
		if (args.length === 0) {
      const embed = new Discord.RichEmbed()
        .setAuthor("Help", client.user.displayAvatarURL)
        .setColor([54, 57, 64])
        .setDescription("Invite: [here](https://discordapp.com/oauth2/authorize?client_id=464571851608162304&scope=bot&permissions=126016)"
                       + "\t\t\t\tOfficial Server: [here](https://discord.gg/4ZAs9Sr)"
                       + "\n\nType `jb!help <topic>` for getting the list of commands!"
                       + "\n\n__**TOPICS:**__")
        .addField("General", "Commands that can be used for everyone!", false)
        .addField("Settings", "Know commands to configure bot on your discord server!", false)
        .addField("Random", "Commands being used for get a random image of something!", false)
        .addField("Music", "Commands comming soon.", false)
        .setTimestamp();
      message.channel.send(embed);
    }
    if (args.length === 1 && args[0].toLowerCase() == 'general') {
      const embed = new Discord.RichEmbed()
        .setAuthor("Help General", client.user.displayAvatarURL)
        .setColor([54, 57, 64])
        .setDescription("Invite: [here](https://discordapp.com/oauth2/authorize?client_id=464571851608162304&scope=bot&permissions=126016)"
                       + "\t\t\t\tOfficial Server: [here](https://discord.gg/4ZAs9Sr)"
                       + "\n\n**jb!rank** - Get your info and server ranking!"
                       + "\n**jb!profile** - Get your total profile and global ranking!"
                       + "\n**jb!money** - Your money! (aliases: `credits` `wallet` `balance`)"
                       + "\n**jb!daily** - Get your daily reward!"
                       + "\n**jb!rep** - Give a reputation to who you think deserves it!"
                       + "\n**jb!java jb!html jb!js** - Send code in proper language!"
                       + "\n**jb!support** - Get bot's server link! (aliases: `support`)"
                       + "\n**jb!ping** - Get bot's ping!")
        .setTimestamp();
      message.channel.send(embed);
    }
    if (args.length === 1 && args[0].toLowerCase() == 'settings') {
      const embed = new Discord.RichEmbed()
        .setAuthor("Help Settings", client.user.displayAvatarURL)
        .setColor([54, 57, 64])
        .setDescription("Invite: [here](https://discordapp.com/oauth2/authorize?client_id=464571851608162304&scope=bot&permissions=126016)"
                       + "\t\t\t\tOfficial Server: [here](https://discord.gg/4ZAs9Sr)"
                       + "\n\n**jb!levelup** - settings for level up messages (only server owner)!")
        .setTimestamp();
      message.channel.send(embed);
    }
    if (args.length === 1 && args[0].toLowerCase() == 'random') {
      const embed = new Discord.RichEmbed()
        .setAuthor("Help Random", client.user.displayAvatarURL)
        .setColor([54, 57, 64])
        .setDescription("Invite: [here](https://discordapp.com/oauth2/authorize?client_id=464571851608162304&scope=bot&permissions=126016)"
                       + "\t\t\t\tOfficial Server: [here](https://discord.gg/4ZAs9Sr)"
                       + "\n\nComing soon...")
        .setTimestamp();
      message.channel.send(embed);
    }
    if (args.length === 1 && args[0].toLowerCase() == 'music') {
      const embed = new Discord.RichEmbed()
        .setAuthor("Help Music", client.user.displayAvatarURL)
        .setColor([54, 57, 64])
        .setDescription("Invite: [here](https://discordapp.com/oauth2/authorize?client_id=464571851608162304&scope=bot&permissions=126016)"
                       + "\t\t\t\tOfficial Server: [here](https://discord.gg/4ZAs9Sr)"
                       + "\n\nComing soon...")
        .setTimestamp();
      message.channel.send(embed);
    }
}
