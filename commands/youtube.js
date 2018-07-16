exports.run = (client, message, args) => {
  const embed = {
    description: "Youtube link: [Here](https://www.youtube.com/channel/UCCphaV7cumvMV_VB7aD7v1A?view_as=subscriber)"
  };
  message.channel.send({embed});
}
