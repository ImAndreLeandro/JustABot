exports.run = async (client, message, args) => {

    var discord = require('discord.js');
    
    let cooldown = 8.64e+7; // Cooldown Daily
    let amount = 100; // Daily Payout
    var day = new Date(Date.now()).getDay();
    var month = new Date(Date.now()).getMonth();

    var lastDaily = // Get last daily day used
    var lastDailyM = // Get last daily month used
    try {
        if (lastDaily === day && lastDailyM === month) {
          message.channel.send("**" + message.author.username + "**, you have already received your daily reward!");
        } else {
          // Set this day as the last day used
          // Set this month as the last month used
          // Add the daily reward
          // (i => {
            message.channel.send("**" + message.author.username + "**, you received your daily reward! **+100** :dollar:");
          }).catch(error => {
            console.log(error);
          });
        }
      })
    } catch(err) {console.log(err)}
 }
