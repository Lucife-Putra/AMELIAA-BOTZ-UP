import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('Proses...')
  let res = `https://restapi.frteam.xyz/lolimaker?nama=${response[0]}&apikey=085759681568`
  conn.sendFile(m.chat, res, 'sadboy.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logololi'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logololi)$/i
handler.register = true

handler.limit = true

export default handler