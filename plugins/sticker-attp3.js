import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let stiker = await sticker(null, global.API('https://oni-chan.my.id/api/canvas/', 'attp?text', { file: '', text: teks }), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.help = ['attp3 <teks>']
handler.tags = ['sticker']
handler.command = /^attp3$/i
handler.limit = true
export default handler