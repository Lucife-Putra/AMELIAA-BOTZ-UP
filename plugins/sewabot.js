import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, command, args, text}) => {
if (command == 'sewa') {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let caption = `👋 Hai *${name}*,

*• SEWA BOT & UP TO PREMIUM •*
        
1. ${htki} Sewa ${htka}
Rp. 5000/Minggu 
Rp. 15.000/Bulan
Rp. 30.000/Permanen

2. ${htki} Premium ${htka}
Rp. 10.000/bulan
Rp. 20.000/permanen 

3. ${htki} Premium + Grup ${htka}
Rp. 20.000/Bulan
Rp. 35.000/Permanen

wa.me/${nomorown}
*Bukan Bot!!!*
Tapi
*Owner nya ${conn.user.name}*
`
  await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: fsizedoc,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: caption,
      mentions: conn.parseMention(caption),
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}

if (command == 'mengproduk') {
if (!text) throw `Teksnya?`
  await conn.relayMessage(m.chat, 
{"productMessage": {
"product": {
		"productImage": {
		 "url": "https://chat.whatsapp.com/FR1KfE3OTcQCayiabos8Ff",
"mimetype": "image/jpeg",
"fileSha256": "nDM/acIuR4SDh/ZKrS8ysfYlM2Z/RgAuikg9Bj1jK+s=",
"fileLength": "12295",
"height": 371,
"width": 558,
"mediaKey": "p95ebDGt25rIs76r5ymJxeuvKnhUEKQnTilft7z/JEo=",
"fileEncSha256": "NnBWPq0KgBt2VCN4zD4xg2N/gr/VgZdy8dNnEWqacRc=",
"jpegThumbnail": fs.readFileSync("./thumbnail.jpg")
},
"productId": "9999999",
	"title": wm, 
	"description": text,
	"productImageCount": 1
},
"businessOwnerJid": "0@s.whatsapp.net",
"contextInfo": {
	"forwardingScore": 9999,
	"isForwarded": false
}
}},{quoted: ftroli})
  
}

if (command == 'mengorder') {
if (!text) throw `Teksnya?`
await conn.relayMessage(m.chat, 
{"orderMessage": { "itemCount": 2021,
"message": text,
"footerText": wm, 
"thumbnail": Buffer.alloc(0),
"surface": 'CATALOG' }},{quoted: ftroli})
}

if (command == 'mengpay') {
if (!text) throw `Teksnya?`
await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: fsizedoc,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: text,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}

if (command == 'menggrup') {
if (!text) throw `Teksnya?`
await conn.relayMessage(m.chat, 
{"groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us',
"inviteCode": text,
"groupName": author,
"footerText": wm,
"jpegThumbnail": Buffer.alloc(0),
"caption": 'Group: ' + text
}},{quoted: ftroli})
  
}

if (command == 'mengfake') {
let tema = args[0]
let filesize = args[1]
if (tema == 'aud') {
  await conn.relayMessage(m.chat, 
{"audioMessage": {
						"url": m.quoted.url,
						"mimetype": m.quoted.mimetype,
						"fileSha256": m.quoted.fileSha256.toString('base64'),
						"fileLength": filesize,
						"seconds": filesize,
						"ptt": true,
						"mediaKey": m.quoted.mediaKey.toString('base64'),
						"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"directPath": m.quoted.directPath,
						"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"jpegThumbnail": m.quoted.jpegThumbnail
}},{quoted: ftroli})
  
  }
  if (tema == 'vid') {
 await conn.relayMessage(m.chat, 
{"videoMessage": {
						"url": m.quoted.url,
						"mimetype": m.quoted.mimetype,
						"fileSha256": m.quoted.fileSha256,
						"fileLength": filesize,
						"seconds": filesize,
						"mediaKey": m.quoted.mediaKey,
						"caption": m.quoted.caption,
						"height": m.quoted.height,
						"width": m.quoted.width,
						"fileEncSha256": m.quoted.fileEncSha256,
						"directPath": m.quoted.directPath,
						"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp,
						"jpegThumbnail": m.quoted.jpegThumbnail,
						"streamingSidecar": m.quoted.streamingSidecar
}},{quoted: ftroli})
    }
  if (tema == 'stick') {
 await conn.relayMessage(m.chat, 
{"stickerMessage": {
						"url": m.quoted.url,
						"fileSha256": m.quoted.fileSha256,
						"fileEncSha256": m.quoted.fileEncSha256,
						"mediaKey": m.quoted.mediaKey,
						"mimetype": m.quoted.mimetype,
						"height": m.quoted.height,
						"width": m.quoted.width,
						"directPath": m.quoted.directPath,
						"fileLength": filesize,
						"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp,
						"isAnimated": m.quoted.isAnimated
}},{quoted: ftroli})
  
  }
  if (tema == 'img') {
  await conn.relayMessage(m.chat, 
{"imageMessage": {
						"url": m.quoted.url,
						"mimetype": m.quoted.mimetype,
						"caption": m.quoted.caption,
						"fileSha256": m.quoted.fileSha256,
						"fileLength": filesize,
						"height": m.quoted.height,
						"width": m.quoted.width,
						"mediaKey": m.quoted.mediaKey,
						"fileEncSha256": m.quoted.fileEncSha256,
						"directPath": m.quoted.directPath,
						"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp,
						"jpegThumbnail": m.quoted.jpegThumbnail
}},{quoted: ftroli})
  
  }
  }
  }
handler.command = ['sewa', 'mengproduk', 'mengorder', 'mengfake', 'menggrup', 'mengpay', 'sewabot']

export default handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }