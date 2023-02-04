import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('proses..')
  let res = `https://restapi.frteam.xyz/sadboy?nama=${response[0]}&nama2=${response[1]}&apikey=085759681568`
  conn.sendFile(m.chat, res, 'gfx3.jpg', `Nih kak`, m, false)
}
handler.help = ['sadboylogo'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logosadboy)$/i
handler.limit = true

export default handler