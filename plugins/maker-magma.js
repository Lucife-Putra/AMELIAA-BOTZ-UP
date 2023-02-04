import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.zahwazein.xyz/textpro/magma?text=${response[0]}&apikey=6aa8e658bd31`
  conn.sendFile(m.chat, res, 'magma.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['magma'].map(v => v + ' <text>')
handler.tags = ['logo', 'maker']
handler.command = /^(magma)$/i
handler.limit = false
//buatan zyko-md, jgn hapus atuh 😊
export default handler