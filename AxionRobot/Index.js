process.env.NTBA_FIX_319 = 1
const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const TOKEN = '1690134518:AAFeFAnIq-lTJZtBC0d7OxzicfWbge3e5'

console.log("Bot has been started")

const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})

bot.on('message', (msg) => {
    // console.log(msg)
    const { id } = msg.chat

    bot.sendMessage(id, debug(msg))
        .then(() => {
            console.log('Message has been sent')
        })
        .catch((error) => {
            console.error (error)
        })
})

