import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.erdwpe.com/api/textpro/green-horror?text=${response[0]}`
  conn.sendFile(m.chat, res, 'green-horror.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['green-horror'].map(v => v + ' <text>')
handler.tags = ['logo', 'maker']
handler.command = /^(green-horror)$/i
handler.limit = 1
//buatan zyko-md, jgn hapus atuh 😊
export default handler
