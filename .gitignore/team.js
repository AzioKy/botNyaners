module.exports = class Team{
  
    
    static match(message){
      return message.content.startsWith("O'team")
    }
  
    static action (message){
      var fs=require("fs");
      let args=message.content.split(' ')
      var args1 = args.shift();
      var pseudo =args.shift();
      var elo =args.shift();
      var contenu="\n"+pseudo+" "+elo
      
      fs.appendFile("monFichier", contenu, "UTF-8",function(err){
        if (err) throw err;
        console.log('Updated!');
      });
    }
  }