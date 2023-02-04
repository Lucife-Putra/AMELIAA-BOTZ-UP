import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.zahwazein.xyz/textpro/metallic?text=${response[0]}&apikey=6aa8e658bd31`
  conn.sendFile(m.chat, res, 'metallic.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['metal-lic'].map(v => v + ' <text>')
handler.tags = ['logo', 'maker']
handler.command = /^(metal-lic)$/i
handler.limit = 2
//buatan zyko-md, jgn hapus atuh 😊
export default handler