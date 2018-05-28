module.exports = class UltimateBravery{ 
    
    static match(message){
      return message.content.startsWith("O'ultimateBravery")
    }
  
    static action (message){
      var nb=Math.round(Math.random() * (7100000 - 6800000) + 6800000);
      message.reply('https://ultimate-bravery.net/Dataset?id='+nb)
    }
  }
 