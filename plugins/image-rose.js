import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/rose?apikey=APIKEY'
	conn.sendButton(m.chat, `Nih ${command}`, botdate, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.help = ['rose']
handler.tags = ['internet']
handler.command = /^(rose)$/i
handler.premium = false
handler.limit = 1
export default handler