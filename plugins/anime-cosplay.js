import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://gxsy.frteamapp.me/api/random/cosplay?apikey=APIKEY'
	conn.sendButton(m.chat, 'Nih Cosplayer nya', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(cosplay)$/i
handler.tags = ['anime']
handler.help = ['cosplay']
handler.limit = true
handler.premium = false
export default handler