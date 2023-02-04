import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.sekha.me/api/textpro/gameover?text=${response[0]}&text2=${response[1]}&apikey=apirey`
  conn.sendFile(m.chat, res, 'gameover.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['gameover'].map(v => v + ' <text>')
handler.tags = ['logo', 'maker']
handler.command = /^(gameover)$/i
handler.limit = false
//buatan zyko-md, jgn hapus atuh 😊
export default handler

