const Discord = require('discord.js')
const bot = new Discord.Client()
const Opgg = require("./opgg")
const UltimateBravery = require("./ultimateBravery")


bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.on('guildMemberAdd', function (member){
  member.createDM().then(function(channel){
    channel.send(
    'Bienvenue dans la communauté 𝑳𝒆𝒔 𝑵𝒚𝒂𝒏𝒏𝒆𝒓𝒔 ฅ(＾・ω・＾ฅ) !\nJe suis O\'Shishin et je suis là pour t\'aider à bien t\'intégrer au sein de notre serveur.\nPour commencer, je t\'invite à lire notre règlement dans le channel éponyme , il te permettra de comprendre ce que nous attendons de toi.\n\n\nPRESENTATION\n\nTu n\'as actuellement pas accès à tout les channels de notre serveur. C\'est pour cela que nous t\'invitons chaudement à te présenter dans le channel #présente-toi.\nPour nous aider à te donner les rôles qui t\'ouvrirons pleinement les portes du serveur, tu dois indiquer les jeux auquels tu joues. \n\nNous avons actuellement les rôles : \nSoul Worker \/ World of Warcraft \/ League of Legends \/ HearthStone \/ Overwatch \/ Dofus \/ Osu \/ Fortnite , \nmais tu peux indiquer d\'autres jeux.\n\nSi tu joues à league of legends, nous te demandons aussi d\'indiquer ton élo.\nPour conclure la présentation, tu peux parler un peu de toi. C\'est toujours plus sympa de savoir à qui on a affaire ! :smile:\n\n\nLES TEAMS \n\nNous avons mis en place un système de team sur le serveur, alors si tu es sympa et vraiment motivé n\'hésite pas à créer ta team pour venir défier les autres équipes du serveur ! Pour cela , il te suffira de poster un message dans les channels prévu à cet effet ou simplement lier des liens avec d\'autres personnes de la communauté . Après tout on est là pour ça ! \n\n\nLE LOL TAG \n\nNous avons un tag qui permet de mentionner les gens pour faire une partie. C\'est le LolTag. Alors si tu veux être informer quand quelqu\'un cherche un joueur pour jouer demande nous ce tag . :smile: \n\nPour finir, si tu as des questions n\'hésite pas à aller parler à la Fondatrice , les Fondateurs , les modérateurs ou simplement aux autres membre du serveur.\n\nEn espérant te voir très vite avec nous en vocal :wink:'
    )
  }).catch(console.error)
})

bot.on('message', function (message){
  if (Opgg.match(message)){
    return Opgg.action(message)
  }
  if (UltimateBravery.match(message)){
    return UltimateBravery.action(message)
  }
  if (message.content === "O'help"){
    message.reply('Voici les commandes du serveur : \n- O\'opgg [pseudo]      cette commande te permettra de voir une page opgg.\n\n-O\'ultimateBravery     cette commande te permet d\'avoir un stuff pour l\'utimate bravery.')
  }
})

bot.login('NDUwNjc4MDMwMTkzNTI0NzY2.De2zKQ.yLwI96J62euYtC4nqWfNkoCqQ7c')
