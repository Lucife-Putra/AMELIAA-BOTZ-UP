import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (!mime) throw 'Reply Gambar nya'
m.reply('Tunggu sedang diproses..')
let media = await q.download()
let url = await uploadImage(media)
await conn.sendFile(m.chat, await (await fetch(`https://restapi.frteam.xyz/toanime?img=${url}&apikey=Fikrii`)).buffer()
await conn.sendButton(m.chat, `ANJAY ${name} ANIME`, 'ʟᴀʀɪ ᴀᴅᴀ ᴡɪʙᴜ', hasil, [['Donasi', '.donasi']], m)
}
handler.help = ['jadianime2']
handler.tags = ['maker', 'premium']
handler.command = /^(toanime2|jadianime2)$/i
handler.premium = true
handler.register = true

export default handler