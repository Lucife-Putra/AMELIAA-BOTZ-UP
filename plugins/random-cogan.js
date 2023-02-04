let handler = async (m, { conn }) => {
let url = 'https://gxsy.frteamapp.me/api/wallpaper/cogan?apikey=APIKEY'
let weem = 'Next ? Click Di Bawah !'
conn.sendButtonImg(m.chat, url, '```➩ Random : cogan ```', weem, '⇄ Next ⇄', '.cogan', m)
}
handler.help = ['cogan']
handler.tags = ['internet']
handler.command = /^(cogan)$/i

export default handler