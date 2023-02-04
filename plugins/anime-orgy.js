import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://restapi.frteam.xyz/nsfworgy?&apikey=085759681568'
	conn.sendButton(m.chat, 'Nih Orgy nya', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(orgy)$/i
handler.tags = ['anime']
handler.help = ['orgy', 'nsfw']
handler.limit = true
handler.premium = true
export default handler