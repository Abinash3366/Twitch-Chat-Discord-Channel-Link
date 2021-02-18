const tmi = require('tmi.js');
const Discord = require("discord.js");
const https = require('https');
const clients = new Discord.Client();
const config = require("./config.json");
// Twitch id 
const opts = {
  identity: {
    username: config.twitch_account_username,
    password: config.twitch_token,
  },
  channels: [
    config.channel1
  ]
};
const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect(); 
// Discord Channel watch and send to twich 
clients.on("message", async message => {
  if(message.author.bot) return;
  console.log(`${message.author.username}: ${message.content}`);
     if(message.channel.id === config.discord_channel_id){
       client.say(config.twitch_channel_target, `${message.author.username}: ${message.content}`);
  };
});
// Twitch Catch and send to discord 
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } 

  const commandName = msg.trim();
  if(target === config.twitch_channel_target){
  clients.channels.get(config.discord_channel_id).send(`${context.username}: ${msg}`);
  };
}

// Stuff so poeple know if they are connected 
function onConnectedHandler (addr, port) {
  console.log(`Twitch has Connected to ${addr}:${port}`);
}
clients.on("ready", () => {
  console.log(`Discord Bot has started, with ${clients.users.size} users, in ${clients.channels.size} channels of ${clients.guilds.size} guilds.`); 
});

clients.login(config.token);  