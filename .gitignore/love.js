module.exports = class Love{
  
    
    static match(message){
      return message.content.startsWith("O'love")
    }
  
    static action (message){
      let args=message.content.split(' ')
      var args1=args.shift()
      var args2=args.shift()
      var args3=args.shift()
      message.reply('http://www.signification-prenom.com/compatibilite-des-prenoms-' +args2+"-et-"+args3+".html")
    }
  }