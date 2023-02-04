import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
  let cap = `
Silakan Aktifkan`
   if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButtonDoc(m.chat, '❗𝐍𝐒𝐅𝐖 𝐆𝐀 𝐀𝐊𝐓𝐈𝐅!!', cap, 'ᴇɴᴀʙʟᴇ', '.on nsfw', null, adReply)
    let anu = await fetch(`https://restapi.frteam.xyz/nhentai?id=250202&apikey=085759681568`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.sendButton(m.chat, 'Random Pict Hentai',botdate, fimgb, [['next', '.nhentai2']], m)
}
handler.help = ['hentai2']
handler.tags = ['nsfw']
handler.command = /^(nhentai2)$/i
handler.limit = true
handler.premium = true

export default handler