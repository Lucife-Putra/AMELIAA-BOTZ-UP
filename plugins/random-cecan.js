let handler = async (m, { conn }) => {
let url = 'https://gxsy.frteamapp.me/api/wallpaper/cecan?apikey=APIKEY'
let weem = 'Next ? Click Di Bawah !'
conn.sendButtonImg(m.chat, url, '```➩ Random : Cecan ```', weem, '⇄ Next ⇄', '.cecan', m)
}
handler.help = ['cecan']
handler.tags = ['internet']
handler.command = /^(cecan)$/i

export default handler