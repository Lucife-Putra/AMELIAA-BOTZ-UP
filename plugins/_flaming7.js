import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text'
  m.reply('_Proses..._')
  let res = `https://api.tiodevhost.my.id/api/photooxy/carved-wood?text=${response[0]}`
  conn.sendFile(m.chat, res, 'carved.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['carved'].map(v => v + ' <text>')
handler.tags = ['maker','logo']
handler.command = /^(carved)$/i

export default handler
