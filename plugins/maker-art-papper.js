import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://web-production-3ae2.up.railway.app/api/textpro/art-papper?text=${response[0]}&apikey=APIKEY`
  conn.sendFile(m.chat, res, 'art-papper.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['art-papper'].map(v => v + ' <text>')
handler.tags = ['maker', 'logo']
handler.command = /^(art-papper)$/i
handler.limit = 1
handler.premium = false

export default handler
