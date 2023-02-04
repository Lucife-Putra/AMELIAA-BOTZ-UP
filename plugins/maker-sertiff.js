import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://oni-chan.my.id/api/Fmake/sertiff?text=${response[0]}&text2=${response[1]}&apikey=`
  conn.sendFile(m.chat, res, 'sertiff.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['sertiff'].map(v => v + ' <text>')
handler.tags = ['logo', 'maker']
handler.command = /^(sertiff)$/i
handler.limit = false
//buatan zyko-md, jgn hapus atuh 😊
export default handler
