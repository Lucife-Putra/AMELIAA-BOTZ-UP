import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text'
  m.reply('_Proses..._')
  let res = `https://api.tiodevhost.my.id/api/photooxy/coffee-cup?text=${response[0]}`
  conn.sendFile(m.chat, res, 'coffee-cu.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['logo-coffee'].map(v => v + ' <text>')
handler.tags = ['maker','logo']
handler.command = /^(logo-coffee)$/i

export default handler
