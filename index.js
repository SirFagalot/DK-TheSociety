const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', function() {
    console.log('Booted up!');
});

client.on('message', (message) -> {
  if(message.content == 'ping'){
        message.reply('PONG!');
});

client.login(process.env.token);
