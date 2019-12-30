const Discord = require('discord.js');
const client = new Discord.Client();

client.login("NjU1MjE1ODAxNzA3NjU5MzIx.XgmiLA.e9nSLmBvQiNHnx10_EOc6kHWyO4");

client.on('ready', () => {
    console.log('Booted up!');
});

client.on('message', message => {
  if(message.author.bot)
        return;
    
    if(message.content.toLowerCase() === 'hello')
        message.channel.send("Hey!");
});
