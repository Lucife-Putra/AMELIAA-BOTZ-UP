import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/kartun?apikey=APIKEY'
	conn.sendButton(m.chat, `Nih ${command}`, botdate, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(kartun)$/i
handler.tags = ['internet']
handler.help = ['kartun']
handler.premium = false
handler.limit = 2

export default handler