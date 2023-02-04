import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/hekel?apikey=APIKEY'
	conn.sendButton(m.chat, `Nih ${command}`, botdate, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.help = ['hekel']
handler.tags = ['internet']
handler.command = /^(hekel)$/i
handler.premium = false
handler.limit = 2
export default handler