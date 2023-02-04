import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime'
m.reply('ᴛᴜɴɢɢᴜ sᴇᴅᴀɴɢ ᴍᴇᴍᴜᴀᴛ ɢᴀᴍʙᴀʀ ᴡɪʙᴜ')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.zahwazein.xyz/photoeditor/jadianime?url=${url}&apikey=6aa8e658bd31`)).buffer()
await conn.sendButton(m.chat, `ANJAY ${name} WIBU`, 'ʟᴀʀɪ ᴀᴅᴀ ᴡɪʙᴜ', hasil, [['Donasi', '.donasi']], m)
}
handler.help = ['jadianime']
handler.tags = ['anime']
handler.command = /^(jadianime)$/i
handler.limit = 1

export default handler

