const Discord = require('discord.js')
const bot = new Discord.Client()
const Opgg = require("./opgg")
const UltimateBravery = require("./ultimateBravery")
const Love = require("./love")

var joueurs=[];
var joueurtxt=[];

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.on('guildMemberAdd', function (member){
  member.createDM().then(function(channel){
    channel.send(
    'Bienvenue dans la communauté 𝑳𝒆𝒔 𝑵𝒚𝒂𝒏𝒏𝒆𝒓𝒔 ฅ(＾・ω・＾ฅ) !\nJe suis O\'Shishin et je suis là pour t\'aider à bien t\'intégrer au sein de notre serveur.\nPour commencer, je t\'invite à lire notre règlement dans le channel éponyme , il te permettra de comprendre ce que nous attendons de toi.\n\n\nPRESENTATION\n\nTu n\'as actuellement pas accès à tout les channels de notre serveur. C\'est pour cela que nous t\'invitons chaudement à te présenter dans le channel #présente-toi.\nPour nous aider à te donner les rôles qui t\'ouvrirons pleinement les portes du serveur, tu dois indiquer les jeux auquels tu joues. \n\nNous avons actuellement les rôles : \nSoul Worker \/ World of Warcraft \/ League of Legends \/ HearthStone \/ Overwatch \/ Dofus \/ Osu \/ Fortnite , \nmais tu peux indiquer d\'autres jeux.\n\nSi tu joues à league of legends, nous te demandons aussi d\'indiquer ton élo.\nPour conclure la présentation, tu peux parler un peu de toi. C\'est toujours plus sympa de savoir à qui on a affaire ! :smile:\n\n\nLES TEAMS \n\nNous avons mis en place un système de team sur le serveur, alors si tu es sympa et vraiment motivé n\'hésite pas à créer ta team pour venir défier les autres équipes du serveur ! Pour cela , il te suffira de poster un message dans les channels prévu à cet effet ou simplement lier des liens avec d\'autres personnes de la communauté . Après tout on est là pour ça ! \n\n\nLE LOL TAG \n\nNous avons un tag qui permet de mentionner les gens pour faire une partie. C\'est le LolTag. Alors si tu veux être informer quand quelqu\'un cherche un joueur pour jouer demande nous ce tag . :smile: \n\nPour finir, si tu as des questions n\'hésite pas à aller parler à la Fondatrice , les Fondateurs , les modérateurs ou simplement aux autres membre du serveur.\n\nEn espérant te voir très vite avec nous en vocal :wink:'
    )
  }).catch(console.error)
  var add_embed=new Discord.RichEmbed()
  .setColor("#40A497")
  .setTitle("Un nouveau est arrivé !")
  .addField(`${member.user.username} Bienvenue à toi ${member.user.tag} `,"---------------------------")
  .addField("On te souhaite de bien t'amuser parmis nous :D","--------------------------")
  .setThumbnail(member.user.displayAvatarURL)
  
  member.guild.channels.find("name","general").send(add_embed)
})


bot.on('guildMemberRemove', function(member){
  member.guild.channels.find("name","sortie").send(member.user.username+` Babaille à toi ${member}`)
})

bot.on('message', function (message){
  if (Opgg.match(message)){
    return Opgg.action(message)
  }
  if (UltimateBravery.match(message)){
    return UltimateBravery.action(message)
  }
  if (message.content === "O'help"){
    var help_embed=new Discord.RichEmbed()
    .setColor("#40A497")
    .setTitle("Voici les commandes de O'Shishin !")
    .addField("O'opgg [pseudo]","Cette commande te permettra de voir une page op.gg.")
    .addField("O'ultimateBravery","Cette commande te permettra d'avoir un stuff pour l'ultimate bravery.")
    .addField("O'love [prenom en maj] [prenom en maj]","Test ta compatibilité avec les autres :D")
    .addField(`O'searchTeam [pseudoLOL] [pseudo discord] [elo en minuscule] [poste en minuscule]`,"C'est une commande pour être dans la liste des joueurs en attente d'une team. IL NE FAUT PAS METTRE D'ESPACES DANS LES PSEUDOS. Les postes sont : top,jungle,mid,adc,supp")
    .addField(`O'findTeam [elo en minuscule] [poste en minuscule]`,"Commande pour trouver des joueurs en fonctions de leur elo.")
    .addField(`O'delete [pseudoLOL]`,"Si tu as fais une erreur, trouvé une team ou simplement plus envie de participer utilise cette commande :D")
    message.channel.sendMessage(help_embed)
  }
  if (Love.match(message)){
    return Love.action(message)
  }
  if (message.content.startsWith("O'findTeam")){
    let args=message.content.split(' ')
    var list=[]
    var cpt=0
    var args1 = args.shift();
    var elo =args.shift();
    var poste=args.shift();
    for (var i=0; i < joueurs.length; i++) {
      if(elo===joueurs[i][2] && poste===joueurs[i][3]){
        list.push(" "+joueurs[i][0]+"/"+joueurs[i][1])
        cpt=cpt+1
      }
  }
  if (cpt>0){
  message.member.createDM().then(function(channel){
    channel.send("voici les joueurs qui sont succeptible de t'interresser : "+list)
  })
}
  else{
    message.member.createDM().then(function(channel){
      channel.send("Il n'y a personne succeptible de vous interresser :(\n Avez vous bien mis un elo/poste valide et en minuscule? ")
    })
  }
}
  if (message.content.startsWith("O'delete")){
    let args=message.content.split(' ')
    var list=[]
    var args1 = args.shift();
    var pseudoLOL =args.shift();
    for (var i=0; i < joueurs.length; i++) {
      if(pseudoLOL===joueurs[i][0]){
        joueurs.splice(i,1)
        message.member.guild.channels.find("name","team").send("la liste de joueur "+joueurs)
        console.log(joueurs)
      }
  }
    message.member.createDM().then(function(channel){
    channel.send("Tu as bien été supprimé de la base de donnée :D")
  })
  }
  if (message.content.startsWith("O'searchTeam")){
    let args=message.content.split(' ')
    var args1 = args.shift();
    var pseudoLOL =args.shift();
    var discord=args.shift();
    var elo = args.shift();
    var poste = args.shift();
    var contenu=[pseudoLOL,discord,elo,poste]
    joueurs.push(contenu)
    message.member.guild.channels.find("name","team").send("la liste de joueur "+joueurs)
    message.member.createDM().then(function(channel){
      channel.send("Tu as bien été ajouté à la base de donnée avec les valeurs : "+contenu)
    })
    console.log(joueurs)
  }
})

bot.login(process.env.TOKEN)
