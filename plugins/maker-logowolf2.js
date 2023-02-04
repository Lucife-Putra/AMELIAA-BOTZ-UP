import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.zahwazein.xyz/textpro/logowolf2?text=zenz&text2=${response[0]}&apikey=6aa8e658bd31`
  conn.sendFile(m.chat, res, 'xynz.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['logowolf2'].map(v => v + ' <text>')
handler.tags = ['logo']
handler.command = /^(logowolf2)$/i
handler.limit = false

export default handler
