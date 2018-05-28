module.exports = class Opgg{

  
  static match(message){
    return message.content.startsWith("O'opgg")
  }

  static action (message){
    let args=message.content.split(' ')
    args.shift()
    message.reply('http://euw.op.gg/summoner/userName=' + args.join('%20'))
  }
}