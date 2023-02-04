import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let url = `https://restapi.frteam.xyz/darkjokes?&apikey=085759681568`
let weem = 'Next ? Click Di Bawah !'
m.reply(wait)
await conn.sendButton(m.chat, '*➩ Random Darkmeme17*', weem, url.hasil, [['⇄ Next ⇄', `${usedPrefix + command}`]], m)
}
handler.help = ['darkmeme']
handler.tags = ['internet']
handler.command = /^(darkmeme)$/i

export default handler