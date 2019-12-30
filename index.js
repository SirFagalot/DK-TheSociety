const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.token);

client.on('ready', () => {
    console.log("Booted up!");
});

client.on('message', message => {
  if(message.author.bot)
        return;

    if(message.content.toLowerCase() === 'hello')
        message.channel.send("Hey!");
});
