import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://gxsy.frteamapp.me/api/nsfw/masturbation?apikey=APIKEY'
	conn.sendButton(m.chat, 'Wangy wangy (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(msb)$/i
handler.tags = ['anime', 'nsfw']
handler.help = ['menstrubasi']
handler.premium = true

export default handler