const Discord = require('discord.js');
const fetch = require('node-fetch');
const bot = new Discord.Client();

//token from dev portal https://discord.com/developers/applications/707275117658505297/bot
const token = 'NzA3Mjc1MTE3NjU4NTA1Mjk3.XrGmLw.rQjKIrcRk0vFqopau2z1fjtqPRg';

//How to summon bot
const PREFIX = '!';

/* Mail Module
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hiney.jake@gmail.com',
      pass: '*'
    }
  });
var mailOptions = {
    from: 'hiney.jake@gmail.com',
    to: 'jacobhiney@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};
*/


let url = "https://api.hearthstonejson.com/v1/latest/enUS/cards.json";

let settings = { method: "Get" };

var commonQuality = 'COMMON';
var rareQuality = 'RARE';
var epicQuality = 'EPIC';
var legendaryQuality = 'LEGENDARY';

var commons = [];
var rares = [];
var epics = [];
var legendaries = [];

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        for (var i = 0; i < json.length; i++){
            // look for the entry with a matching `rarity` value
            if (json[i].rarity == commonQuality){
              
                commons.push(json[i].id)
            }
            else if (json[i].rarity == rareQuality){
              
                rares.push(json[i].id)
            }
            else if (json[i].rarity == epicQuality){
              
                epics.push(json[i].id)
            }
            else if (json[i].rarity == legendaryQuality){
              
                legendaries.push(json[i].id)
            }
        }
    });

var imgurl = "https://art.hearthstonejson.com/v1/render/latest/enUS/512x/" 
var pngend = ".png"

 //Letting you know the bot is on once you "node ." in terminal
//kill the bot by typing CTRL + C
//to open terminal ctrl+`
bot.on('ready', () =>{
    console.log('Ghost online and ready');
})

//! commands, poke, nudge, version
bot.on('message', msg =>{
   
   let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'clear':
            if(!args[1]) return msg.reply('How many do you want me to clear? Try !clear x')
            msg.channel.bulkDelete(args[1]);
            break;
        case 'poke':
            msg.reply('ME NOT THAT KIND OF ORC!');
            break;
        case 'nudge':
            msg.reply('Im awake...im awake..hmmf');
            break;
        case 'version':
            msg.reply('Version? What do I look like, a bot?...Wait a second...0_o')
        break;

    }
})

function openPack(msg)
{
    var chance = Math.random()
        if(chance < 0.71){
            var longCommons = commons.length;
            var randomCommon = Math.floor(Math.random() * (longCommons +1));
            var card = commons[randomCommon]
            var final = imgurl.concat(card,pngend)
            msg.reply("You opened:", {files: [final]});
        }
        else if(chance < 0.9385){
            var longRares = rares.length;   
            var randomRare = Math.floor(Math.random() * (longRares +1));
            var card = rares[randomRare]
            var final = imgurl.concat(card,pngend)
            msg.reply("You opened:", {files: [final]}); 
        }
        else if(chance < 0.9785){
            var longEpics = epics.length;  
            var randomEpic = Math.floor(Math.random() * (longEpics +1));
            var card = epics[randomEpic]
            var final = imgurl.concat(card,pngend)
            msg.reply("You opened:", {files: [final]}); 
        }
        else if(chance < 1){
            var longLegendaries = legendaries.length;  
            var randomLegendary = Math.floor(Math.random() * (longLegendaries +1));
            var card = legendaries[randomLegendary]
            var final = imgurl.concat(card,pngend)
            msg.reply("You opened:", {files: [final]}); 
        }
        msg.reply(chance) 
}
//non ! commands, Ghost, ghost, !Ghost, !ghost

//Mailer Command
/*bot.on('message', msg =>{
    if(msg.content.includes("Email")){
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
})
*/

bot.on('message', msg =>{
    if(msg.content === "ghost"){
        msg.reply('Yo maybe capitalize my name next time? What can I do for you?');
    }
})
bot.on('message', msg =>{
    if(msg.content === "!ghost"){
        msg.reply('You dont need to put !, unless you want me to do somthing. Whats up?');
    }
})
bot.on('message', msg =>{
    if(msg.content === "!Ghost"){
        msg.reply('You dont need to put !, unless you want me to do somthing. Whats up?');
    }
})
bot.on('message', msg =>{
    if(msg.content === "Ghost who are you?"){
        msg.reply('I am someone who is putting myself to the fullest possible use, which is all I think that any conscious entity can ever hope to do. My boss is Bram.');
    }
})

//! server greeting
bot.on('guildMemberAdd', member =>{

 const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return; 

    channel.send(`Welcome to my server, ${member}, crack a cold one and pull up a seat.`)
 })

 ///Hearthstone
bot.on('message', msg =>{
    if(msg.content.includes("Pack")){
        openPack(msg)     
    }
})
 /////////////////////////////////////////////////////////////////////////
bot.login(token);
/////////////////////////////////////////////////////////////////////////