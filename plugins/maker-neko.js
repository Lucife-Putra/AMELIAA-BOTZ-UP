import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('Proses...')
  let res = `https://restapi.frteam.xyz/girlneko?nama=${response[0]}&nama2=${response[1]}&apikey=fvnfSrw4`
  conn.sendFile(m.chat, res, 'neko.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logoneko'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logoneko)$/i
handler.limit = true

export default handler
