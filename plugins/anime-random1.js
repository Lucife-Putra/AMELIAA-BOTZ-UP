import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomanime/anime?apikey=6aa8e658bd31'
	conn.sendButton(m.chat, `Nih ${command}`, wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(randomanimeanime)$/i
handler.tags = ['anime']
handler.help = ['randomanimeanime']
handler.premium = false
handler.limit = 3 
export default handler