const mineflayer = require("mineflayer");
const { WebcastPushConnection } = require("tiktok-live-connector");
const keySender = require('node-key-sender');

const settings = {
  username: "bot",
  host: "localhost",
  port: 1111,
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let tiktokLiveConnection = new WebcastPushConnection("domofon.veschaet");
const bot = mineflayer.createBot(settings);
let likesGoal = 1000;

bot.on("messagestr", (message, messagePosition, jsonMsg, sender, verified) => {
  if (messagePosition == "system" && message.includes("by")) {
    bot.chat(
      `/title Domofon subtitle {"text":"by ${message
        .split("by ")
        .pop()}","color":"yellow"}`
    );
    bot.chat('/title Domofon title {"text":"Death","color":"red"}');
    sleep(2000);
    keySender.sendKey(['o']);
  }
  
});

/*
bot.on('chat', (username, message) => {
  if (message == "start") {
    let num = 2;
    bot.chat(`/title Domofon subtitle {"text": "отправил(а) x${num} wither_skeleton", "color":"red"}`);
    bot.chat(`/title Domofon title {"text":"${message}","green":"yellow"}`);
    for(let i = 0; i < 5; i++){
      bot.chat(`/execute at Domofon run summon wither_skeleton ~ ~ ~-5  {CustomName:'[{"text":"${message}", "color":"red", "bold":true}]',CustomNameVisible:1, Tags:[mobs], powered:1}`);
    }
      
  }
})
*/

tiktokLiveConnection
  .connect()
  .then((state) => {
    console.info(`Connected to roomId ${state.roomId}`);
  })
  .catch((err) => {
    console.error("Failed to connect", err);
  });

  
tiktokLiveConnection.on("gift", (data) => {
  if(data.giftName == "Rose"){
    let num = 2;
    bot.chat(`/title Domofon subtitle {"text": "отправил(а) x${num} Zombies", "color":"red"}`);
    bot.chat(`/title Domofon title {"text":"${data.uniqueId}","color":"green"}`);
    for(let i = 0; i < num; i++){
      bot.chat(`/execute at Domofon run summon zombie ~ ~ ~-5  {CustomName:'[{"text":"${data.uniqueId}", "color":"red", "bold":true}]', Tags:[mobs], CustomNameVisible:1}`);
    }
  }

  if(data.giftName == "Finger Heart"){
    let num = 2;
    bot.chat(`/title Domofon subtitle {"text": "отправил(а) x${num} Creepers", "color":"red"}`);
    bot.chat(`/title Domofon title {"text":"${data.uniqueId}","color":"green"}`);

    for(let i = 0; i < num; i++){
      bot.chat(`/execute at Domofon run summon creeper ~ ~ ~-5  {CustomName:'[{"text":"${data.uniqueId}", "color":"red", "bold":true}]', Tags:[mobs], CustomNameVisible:1, powered:1}`);
    }
  }
  
  if(data.giftName == "Rosa"){
    let num = 5;
    bot.chat(`/title Domofon subtitle {"text": "отправил(а) x${num} Wither Skeletons", "color":"red"}`);
    bot.chat(`/title Domofon title {"text":"${data.uniqueId}","color":"green"}`);

    for(let i = 0; i < num; i++){
      bot.chat(`/execute at Domofon run summon wither_skeleton ~ ~ ~-5  {CustomName:'[{"text":"${data.uniqueId}", "color":"red", "bold":true}]', Tags:[mobs], CustomNameVisible:1}`);
    }
  }
  
  if(data.giftName == "Perfume"){
    let num = 10;
    bot.chat(`/title Domofon subtitle {"text": "отправил(а) x${num} Blazes", "color":"red"}`);
    bot.chat(`/title Domofon title {"text":"${data.uniqueId}","color":"green"}`);

    for(let i = 0; i < num; i++){
      bot.chat(`/execute at Domofon run summon blaze ~ ~ ~-5  {CustomName:'[{"text":"${data.uniqueId}", "color":"red", "bold":true}]', Tags:[mobs], CustomNameVisible:1}`);
    }
  }

  if(data.giftName == "Doughnut"){
    let num = 1;
    bot.chat(`/title Domofon subtitle {"text": "отправил(а) x${num} Ravagers", "color":"red"}`);
    bot.chat(`/title Domofon title {"text":"${data.uniqueId}","color":"green"}`);

    bot.chat(`/execute at Domofon run summon ravager ~ ~ ~-5  {CustomName:'[{"text":"${data.uniqueId}", "color":"red", "bold":true}]', Tags:[mobs], CustomNameVisible:1}`);
  }

  if(data.giftName == "Mishka Bear"){
    let num = 10;
    bot.chat(`/title Domofon subtitle {"text": "отправил(а) x${num} Vindicators", "color":"red"}`);
    bot.chat(`/title Domofon title {"text":"${data.uniqueId}","color":"green"}`);

    for(let i = 0; i < num; i++){
      bot.chat(`/execute at Domofon run summon vindicator ~ ~ ~-5  {CustomName:'[{"text":"${data.uniqueId}", "color":"red", "bold":true}]', Tags:[mobs], CustomNameVisible:1}`);
    }
  }
  
  if(data.giftName == "Corgi"){
    let num = 600;
    bot.chat(`/title Domofon subtitle {"text": "отправил(а) x${num} Zombies", "color":"red"}`);
    bot.chat(`/title Domofon title {"text":"${data.uniqueId}","color":"green"}`);

    for(let i = 0; i < num; i++){
      bot.chat(`/execute at Domofon run summon zombie ~ ~ ~-5  {CustomName:'[{"text":"${data.uniqueId}", "color":"red", "bold":true}]', Tags:[mobs], CustomNameVisible:1}`);
    }
  }

  if(data.giftName == "Money Gun"){
    let num = 1;
    bot.chat(`/title Domofon subtitle {"text": "отправил(а) x${num} Wither", "color":"red"}`);
    bot.chat(`/title Domofon title {"text":"${data.uniqueId}","color":"green"}`);

    bot.chat(`/execute at Domofon run summon wither ~ ~ ~-5  {CustomName:'[{"text":"${data.uniqueId}", "color":"red", "bold":true}]', Tags:[mobs], CustomNameVisible:1}`);
  }

  if(data.giftName == "Swan"){
    let num = 1;
    bot.chat(`/title Domofon subtitle {"text": "отправил(а) x${num} Warden", "color":"red"}`);
    bot.chat(`/title Domofon title {"text":"${data.uniqueId}","color":"green"}`);

    bot.chat(`/execute at Domofon run summon warden ~ ~ ~-5 {CustomName:'[{"text":"${data.uniqueId}","color":"red","bold":true}]',Tags:[mobs],CustomNameVisible:1,Brain:{memories: {"dig_cooldown":{value:{},ttl:1200L},"is_emerging":{value:{},ttl: 85L}}}}`);
  }

  if(data.giftName == "Travel with You"){
    let num = 3;
    bot.chat(`/title Domofon subtitle {"text": "отправил(а) x${num} Wardens", "color":"red"}`);
    bot.chat(`/title Domofon title {"text":"${data.uniqueId}","color":"green"}`);

    for(let i = 0; i < num; i++){
      bot.chat(`/execute at Domofon run summon warden ~ ~ ~-5 {CustomName:'[{"text":"${data.uniqueId}","color":"red","bold":true}]',Tags:[mobs],CustomNameVisible:1,Brain:{memories: {"dig_cooldown":{value:{},ttl:1200L},"is_emerging":{value:{},ttl: 85L}}}}`);
    }
  }

  if(data.giftName == "Whale diving"){
    let num = 10;
    bot.chat(`/title Domofon subtitle {"text": "отправил(а) x${num} Wardens", "color":"red"}`);
    bot.chat(`/title Domofon title {"text":"${data.uniqueId}","color":"green"}`);

    for(let i = 0; i < num; i++){
      bot.chat(`/execute at Domofon run summon warden ~ ~ ~-5 {CustomName:'[{"text":"${data.uniqueId}","color":"red","bold":true}]',Tags:[mobs],CustomNameVisible:1,Brain:{memories: {"dig_cooldown":{value:{},ttl:1200L},"is_emerging":{value:{},ttl: 85L}}}}`);
    }
  }
});


tiktokLiveConnection.on("chat", (data) => {
  bot.chat(`/execute at Domofon run summon creeper ~ ~ ~-8  {CustomName:'[{"text":"${data.comment}", "color":"green", "bold":true}]', Tags:[mobs], CustomNameVisible:1}`);
});

tiktokLiveConnection.on('like', data => {
  if(data.totalLikeCount >= likesGoal){
    likesGoal *= 2;
    bot.chat(`/execute at Domofon run summon warden ~ ~ ~-5 {CustomName:'[{"text":"${data.totalLikeCount}","color":"red","bold":true}]',Tags:[mobs],CustomNameVisible:1,Brain:{memories: {"dig_cooldown":{value:{},ttl:1200L},"is_emerging":{value:{},ttl: 85L}}}}`);
  }
})

/*
tiktokLiveConnection.on('follow', (data) => {
    bot.chat(`/title Domofon subtitle {"text": "${data.uniqueId} подписался!", "color":"pink"}`);
    bot.chat(`/title Domofon title {"text":"","color":"green"}`);
    bot.chat(`/execute at Domofon run summon zombie ~ ~ ~-5  {CustomName:'[{"text":"${data.uniqueId}", "color":"yellow", "bold":true}]',CustomNameVisible:1}`);
})
*/
