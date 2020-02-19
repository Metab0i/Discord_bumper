const Discord = require('discord.js');
var schedule = require('node-schedule');

module.exports ={
  track_bump: function(msg, prefix){  
    if(msg.author.bot == true) return true;

    if(msg.content.toLowerCase() == prefix + "start_bump" && msg.author.id == '360790875560869889'){
      console.log('Bump initiated')
      msg.delete(1000);

      let bump_2 = schedule.scheduleJob('0 0 */2 * * *', function(){
        msg.channel.send("!d bump");
      });
    }
    else if(msg.content.toLowerCase() == prefix + "stop_bump" && msg.author.id == '360790875560869889'){
      console.log('Bump stopped')

      console.log(schedule.scheduledJobs['<Anonymous Job 1>'].cancel());
    }
  }
}