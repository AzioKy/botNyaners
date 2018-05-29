module.exports = class Help{ 
  
  static match(message){
    return message.content.startsWith("O'help")
  }

  static action (message){
    member.createDM().then(function(channel){
      channel.send(
        'Voici les commandes du serveur : \n- O\'opgg [pseudo]      cette commande te permettra de voir une page opgg.\n\n-O\'ultimateBravery     cette commande te permet d\'avoir un stuff pour l\'utimate bravery.\n\n-O\'love [Prenom en maj] [Prenom en maj]    calcul de la compatibilité'
      )
    }).catch(console.error)
  }
}
