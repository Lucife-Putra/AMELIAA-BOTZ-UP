let handler = async(m, { conn, text }) => {
let tetete = `https://web-production-3ae2.up.railway.app/api/wallpaper/satanic?apikey=APIKEY`
conn.sendButtonImg(m.chat, tetete, `Nih`, botdate, 'Next', '/wallpapersatanic', m) 
}
handler.help = ['wallpaperjeni']
handler.tags = ['logo','maker']
handler.command = /^(wallpapersatanic)$/i

export default handler 