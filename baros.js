const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame('cu mata');
});

client.on('message', (message) => {
    
    if(message.content == 'pepsi') {
        message.reply('matai sexi :sunglasses::sunglasses::sunglasses:');
    }
    if(message.content.startsWith('privat')){
        message.author.sendMessage('am fututo pe mata')
    }
    if(message.content.startsWith('ajutor')){
        message.channel.sendMessage('```COMENZI : pepsi , privat , cine o suge```')
    }
    if(message.content === 'cine o suge') {
        var result = Math.floor((Math.random() * 11) +1);
        if (result == 1) {
            message.reply('Stefan');
        } else if (result == 2) {
            message.reply('Matei');
        } else if (result == 3) {
            message.reply('Alin');
        } else if (result == 4) {
            message.reply('Vali');
        } else if (result == 5) {
            message.reply('Eu');
        } else if (result == 6) {
            message.reply('Jder');
        } else if (result == 7) {
            message.reply('Ciorica');
        } else if (result == 8) {
            message.reply('Marius');
        } else if (result == 9) {
            message.reply('Fabi');
        } else if (result == 10) {
            message.reply('Mesi');
        } else if (result == 11) {
            message.reply('Futanke');
        }
    }
});

client.login(process.env.token);
