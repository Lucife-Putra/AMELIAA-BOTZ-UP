import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.sekha.me/api/wallpaper/thailand?apikey=apirey'
	conn.sendButton(m.chat, `Nih ${command}`, wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(cecanthailand)$/i
handler.tags = ['internet']
handler.help = ['cecanthailand']
handler.premium = false
handler.limit = 3 
export default handler