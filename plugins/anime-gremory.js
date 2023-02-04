import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.sekha.me/api/wallpaper/gremory?apikey=apirey'
	conn.sendButton(m.chat, 'Waifu nya om', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(gremory)$/i
handler.tags = ['anime']
handler.help = ['gremory']
handler.premium = false
handler.limit = true

export default handler