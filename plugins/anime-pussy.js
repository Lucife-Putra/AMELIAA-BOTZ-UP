import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://restapi.frteam.xyz/nsfwneko?&apikey=085759681568'
	conn.sendButton(m.chat, 'Nih pussy nya', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(pussy)$/i
handler.tags = ['anime', 'nsfw']
handler.help = ['pussy']
handler.limit = true
handler.premium = true
export default handler