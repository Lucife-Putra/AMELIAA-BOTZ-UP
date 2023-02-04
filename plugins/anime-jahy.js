import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://restapi.frteam.xyz/nsfwjahy?&apikey=085759681568'
	conn.sendButton(m.chat, 'Wangy wangy (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(jahy)$/i
handler.tags = ['anime', 'nsfw']
handler.help = ['jahy']
handler.premium = true

export default handler