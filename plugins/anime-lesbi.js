import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://gxsy.frteamapp.me/api/nsfw/yuri?apikey=APIKEY'
	conn.sendButton(m.chat, 'Nih Lesbi Anime', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(animelesbi)$/i
handler.tags = ['anime', 'nsfw']
handler.help = ['anime lesbi']
handler.premium = true

export default handler