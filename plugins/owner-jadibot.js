import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/f906fc225978ccaa06483.jpg'
	conn.sendButton(m.chat, ' *❲ JADI BOT ❳*\n\n⎇ 14 Hari 13ᴋ\n⎇ 30 Hari 20ᴋ\n⎇ 40 Hari 27ᴋ\n⎇ 60 Hari 40ᴋ\n\n*ᴍɪɴᴀᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ*', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(jadibot2)$/i
handler.tags = ['info']
handler.help = ['jadibot2']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!