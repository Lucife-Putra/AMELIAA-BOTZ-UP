import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://gxsy.frteamapp.me/api/wallpaper/nsfwloli?apikey=APIKEY'
	conn.sendButton(m.chat, 'Pedo Pedo (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(loli2)$/i
handler.tags = ['anime', 'nsfw']
handler.help = ['loli2']
handler.premium = true

export default handler