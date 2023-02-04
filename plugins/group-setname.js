let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (!text) throw "Mau di nama in apa grub nya"
  await conn.groupUpdateSubject(m.chat, text)
 m.reply(`${text ? `${text}` : 'None'} adalah nama baru group`)
}
handler.help = ['setname <teks>']
handler.tags = ['group']
handler.command = /^setname$/i
handler.botAdmin = true
handler.group = true
handler.admin = true
export default handler