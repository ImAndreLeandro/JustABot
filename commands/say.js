exports.run = (client, message, args) => {
    if (message.author.id === "197340056053219329") {
      if (args.length === 0) {
        message.channel.send("**" + message.author.username + "**, use: `jb!say <message>`");
      } else {
        let say = args.join(' ');
        message.delete();
        message.channel.send(say);
      } 
    } else {
      message.channel.send("**" + message.author.username + "**, I'm sorry but you need to be the bot owner!");
    }
}
