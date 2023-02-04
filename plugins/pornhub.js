import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Teks Nya Banh?\nContoh :\!pornhub tes|tes'
  m.reply('Proses...')
  let res = `https://restapi.frteam.xyz/textpro/pornhub?text=${response[0]}&text2=${response[1]}&apikey=085759681568`
  conn.sendFile(m.chat, res, 'pornhub.jpg', `*Done Banh*\nwm`, m, false)
}
handler.help = ['pornhub'].map(v => v + ' <text1>|<teks2>')
handler.tags = ['maker']
handler.command = /^(pornhub)$/i
handler.register = true

handler.limit = true
handler.premium = true

export default handler