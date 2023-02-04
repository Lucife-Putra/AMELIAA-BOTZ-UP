import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.sekha.me/api/wallpaper/china?apikey=apirey'
	conn.sendButton(m.chat, `Nih ${command}`, wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(cecanchina)$/i
handler.tags = ['internet']
handler.help = ['cecanchina']
handler.premium = false
handler.limit = 3 
export default handler