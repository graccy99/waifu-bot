var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'waifu':
                var x = Math.floor((Math.random() * 10) + 1);
                if (x == 1) {
                    bot.sendMessage({
                        to: channelID,
                        message: 'https://pre00.deviantart.net/7f26/th/pre/f/2017/162/a/f/megumin__exploooosionnn_by_squchan-dbcbquw.png'
                    });
                } else if (x == 2) {
                    bot.sendMessage({
                        to: channelID,
                        message: 'http://goboiano.com/wp-content/uploads/2017/06/Re-Zero-10.png'
                    });
                } else if (x == 3) {
                    bot.sendMessage({
                        to: channelID,
                        message: 'https://cdn.suwalls.com/wallpapers/anime/taiga-aisaka-toradora-33412-400x250.jpg'
                    });
                } else if (x == 4) {
                    bot.sendMessage({
                        to: channelID,
                        message: 'http://pm1.narvii.com/6810/51f15caaa31e53acd91efa1f25a5aae1b8683ad2v2_00.jpg'
                    });
                } else if (x == 5) {
                    bot.sendMessage({
                        to: channelID,
                        message: 'https://static.zerochan.net/Matsumae.Ohana.full.449038.jpg'
                    });
                } else if (x == 6) {
                    bot.sendMessage({
                        to: channelID,
                        message: 'https://i.imgur.com/mQegmiL.jpg'
                    });
                } else if (x == 7) {
                    bot.sendMessage({
                        to: channelID,
                        message: 'https://vignette.wikia.nocookie.net/maid-dragon/images/5/57/Kanna_Anime.png/revision/latest?cb=20180225164809'
                    });
                } else if (x == 8) {
                    bot.sendMessage({
                        to: channelID,
                        message: 'https://pbs.twimg.com/media/DI9SAbaW4AAiKFC.jpg'
                    });
                } else if (x == 9) {
                    bot.sendMessage({
                        to: channelID,
                        message: 'https://78.media.tumblr.com/1022be09cfb5ebd7d10d817865fb5d8f/tumblr_oqvxcctpzb1vze779o2_400.png'
                    });
                } else if (x == 10) {
                    bot.sendMessage({
                        to: channelID,
                        message: 'https://i.imgur.com/3zvzQpZ.png'
                    });
                }
            break;
            // Just add any case commands if you want to..
         }
     }
});