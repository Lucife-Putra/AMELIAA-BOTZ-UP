import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://violetics.pw/api/textpro/azzenka-league-of-kings?apikey=0a5f-75fe-5ea4&text=${response[0]}`
  conn.sendFile(m.chat, res, 'azzenka-league-of-kings.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['azzenka-league-of-kings'].map(v => v + ' <text>')
handler.tags = ['logo', 'maker']
handler.command = /^(azzenka-league-of-kings)$/i
handler.limit = false
//buatan zyko-md, jgn hapus atuh 😊
export default handler
