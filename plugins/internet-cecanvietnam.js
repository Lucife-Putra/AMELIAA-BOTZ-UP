import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.sekha.me/api/wallpaper/vietnam?apikey=apirey'
	conn.sendButton(m.chat, `Nih ${command}`, wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(cecanvietnam)$/i
handler.tags = ['internet']
handler.help = ['cecanvietnam']
handler.premium = false
handler.limit = 3 
export default handler