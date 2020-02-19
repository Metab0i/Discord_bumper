const Discord = require('discord.js');
let interval_ref;

module.exports ={
  track_bump: function(msg, prefix){  
    if(msg.author.bot == true) return true;

    if(msg.content.toLowerCase() == prefix + "start_bump" && msg.author.id == '360790875560869889'){
      console.log('Bump initiated')
      msg.delete(1000);

      const bump_message = setInterval(function(){
        msg.channel.send("!d bump");
      }, 7300000)

      interval_ref = bump_message;
    }
    else if(msg.content.toLowerCase() == prefix + "stop_bump" && msg.author.id == '360790875560869889'){
      console.log('Bump stopped')

      clearInterval(interval_ref);
    }
  },

  
}