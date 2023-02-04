import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.erdwpe.com/api/textpro/glitchtiktok?text=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'glitchtiktok.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['glitch-tiktok'].map(v => v + ' <text>')
handler.tags = ['logo', 'maker']
handler.command = /^(glitch-tiktok)$/i
handler.limit = 1
//buatan zyko-md, jgn hapus atuh 😊
export default handler
