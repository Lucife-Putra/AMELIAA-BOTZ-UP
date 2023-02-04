import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://web-production-3ae2.up.railway.app/api/textpro/black-pink?text=${response[0]}&apikey=Revita`
  conn.sendFile(m.chat, res, 'Revita.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['black-pink'].map(v => v + ' <text>')
handler.tags = ['maker', 'premium','logo']
handler.command = /^(black-pink)$/i
handler.limit = 1
handler.premium = false

export default handler
