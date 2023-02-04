import fetch from 'node-fetch'
import bo from 'dhn-api'
let handler = async (m, { conn }) => {
const res = await bo.Darkjokes()
await conn.sendButton(m.chat,`Dark ga si adick adick`, wm, res, [['Darkjoke','.darkjokes']] ,m)
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^(darkjokes)$/i
handler.limit = true

export default handler