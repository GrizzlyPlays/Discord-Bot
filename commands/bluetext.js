const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  let msg = args.slice(0).join(" ");

  if(!msg) {
    return message.channel.send('You didn\'t specify anything to say!')
  }

  message.channel.send(`\`\`\`yaml\n${msg}\`\`\``)
}

module.exports.config = {
    name: "bluetext",
    description: "Converts whatever you say to blue text.",
    usage: "v!bluetext <message>",
    accessableby: "All Members",
    category: "fun",
    cooldown: 2,
    aliases: ['']
}
