const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings/tokens.json');

//file imports:
const diboard_bump = require('./src/diboard_bump');

//prefix
const prefix = "+";

/**
 * Event: On activation
 * Functionality: runs essentials on activation (such as validating data against database to make sure everything is up to date)
 */
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("online");
});

client.on('message', msg => {
  diboard_bump.track_bump(msg, prefix);
});

client.login(settings.MeataBoiToken);