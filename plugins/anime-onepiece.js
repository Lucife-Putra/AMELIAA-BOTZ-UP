import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.sekha.me/api/wallpaper/onepiece?apikey=apirey'
	conn.sendButton(m.chat, 'Nih', botdate, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(onepiece)$/i
handler.tags = ['internet','anime']
handler.help = ['onepiece']
handler.premium = false
handler.limit = true

export default handler