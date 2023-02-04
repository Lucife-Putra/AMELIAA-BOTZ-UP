import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-7c28.up.railway.app/api/wallpaper/waifu?apikey=APIKEY'
	conn.sendButton(m.chat, 'Kanna-Chan ', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(kanna)$/i
handler.tags = ['anime']
handler.help = ['kanna']
handler.limit = true
export default handler