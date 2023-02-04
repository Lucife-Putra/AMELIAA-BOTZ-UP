import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('proses..')
  let res = `https://restapi.frteam.xyz/rem?nama=${response[0]}&apikey=085759681568`
  conn.sendFile(m.chat, res, 'rem.jpg', `Nih kak`, m, false)
}
handler.help = ['logorem'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logorem)$/i
handler.register = true

handler.limit = true

export default handler