import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/d8d369c7c524422a6f2ba.jpg'
	conn.sendButton(m.chat, '*❲ UP PREMIUM ❳*\n\n⎇ 10 Hari 7ᴋ\n⎇ 20 Hari 14ᴋ\n⎇ 30 Hari 20ᴋ\n⎇ 40 Hari 27ᴋ\n⎇ 50 Hari 35ᴋ\n⎇ 60 Hari 48ᴋ\n\n*ᴍɪɴᴀᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ*', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(uppremium|upprem)$/i
handler.tags = ['info']
handler.help = ['upprem']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!


