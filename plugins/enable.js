let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	const sections = [
   {
	title: `${dmenub} List Options`,
	rows: [
	    {title: "✨ | Welcome", rowId: `${usedPrefix + command} welcome`},
	    {title: "🚫 | Delete", rowId: `${usedPrefix + command} delete`},
        {title: "🔉 | autodelvn", rowId: `${usedPrefix + command} autodelvn`},
	    {title: "🌎 | Public", rowId: `${usedPrefix + command} public`},
	{title: "🗣️ | Simi", rowId: `${usedPrefix + command} simi`},
	{title: "🎮 | Game", rowld: `${usedPrefix + command} game` },
	{title: "🔞 | Nsfw", rowId: `${usedPrefix + command} nsfw`},
	{title: "💦 | PremNsfwChat", rowId: `${usedPrefix + command} premnsfwchat`},
	{title: "🔗 | Antilink", rowId: `${usedPrefix + command} antilink`},
    {title: "🌟 | Antispam", rowId: `${usedPrefix + command} antispam`},
    {title: "🤚 | Antisticker", rowId: `${usedPrefix + command} antisticker`},
    {title: "👍 | Autosticker", rowId: `${usedPrefix + command} autosticker`},
	{title: "🚫 | Antidelete", rowId: `${usedPrefix + command} antidelete`},
	{title: "📛 | Antitoxic", rowId: `${usedPrefix + command} antitoxic`},
	{title: "📞 | Anticall", rowId: `${usedPrefix + command} anticall`},
	{title: "🦠 | Antivirtex", rowId: `${usedPrefix + command} antivirtex`},
	{title: "⏏️ | Autolevelup", rowId: `${usedPrefix + command} autolevelup`},
	{title: "🔎 | Detect", rowId: `${usedPrefix + command} detect`},
	{title: "📑 | Document", rowId: `${usedPrefix + command} document`},
	{title: "👤 | WhiteListMyContact", rowId: `${usedPrefix + command} whitelistmycontact`},
	{title: "❗ | Restrict", rowId: `${usedPrefix + command} restrict`},
	{title: "😐 | Nyimak", rowId: `${usedPrefix + command} nyimak`},
	{title: "🌟 | AntiSatir", rowId: `${usedPrefix + command} antisatir`},
	{title: "☑️ | Autoread", rowId: `${usedPrefix + command} autoread`},
	{title: "💬 | PcOnly", rowId: `${usedPrefix + command} pconly`},
	{title: "🏢 | GcOnly", rowId: `${usedPrefix + command} gconly`},
	{title: "📷 | SwOnly", rowId: `${usedPrefix + command} swonly`},
	]
    },
]

const listMessage = {
  text: ' ',
  footer: botdate,
  title: `*${htki} OPTIONS ${htka}*`,
  buttonText: "Click Here!",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
     case 'autodelvn':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.autodelvn = isEnable
       break
     case 'document':
       chat.useDocument = isEnable
       break
    case 'self':
      isAll = true 
      if (!isROwner) {
         global.dfail('rowner', m, conn)
         throw false 
      }
      global.opts['self'] = !isEnable
       break 
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
    case 'antispam':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('rowner', m, conn)
           throw false
         }
       }
       chat.antiSpam = isEnable
       break 
    case 'anticall':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('rowner', m, conn)
           throw false
         }
       }
       chat.antiCall = isEnable
       break 
     case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
      break
      case 'autosticker':
        if (!isROwner) {
          global.dfail('admin', m, conn)
          throw false
        }
      chat.autoSticker = isEnable
      break
      case 'simi':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
      case 'game':
        if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }}
      chat.game = isEnable
      break
      case 'nsfw':
        if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }}
      chat.nsfw = isEnable
      break
      case 'premnsfwchat':
        if (m.isGroup) {
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }}
      chat.premnsfw = isEnable
      break
 /*    case 'toxic':
       if (m.isGroup) {
       if (!(isAdmin || isOwner)) {
       global.dfail('admin', m, conn)
           throw false
         }
     }
      chat.antiToxic = !isEnable
      break*/
     case 'antitoxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiBadword = isEnable
       break
     case 'autolevelup':
       isUser = true
       user.autolevelup = isEnable
       break
     case 'mycontact':
     case 'mycontacts':
     case 'whitelistcontact':
     case 'whitelistcontacts':
     case 'whitelistmycontact':
     case 'whitelistmycontacts':
       if (!isOwner) {
         global.dfail('owner', m, conn)
         throw false
       }
       conn.callWhitelistMode = isEnable
       break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
     break
      case 'antivirtex':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiVirtex = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
  case 'autobio':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('rowner', m, conn)
           throw false
         }
       }
       chat.autoBio = isEnable
       break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
      throw false
  }
  conn.sendButton(m.chat, `
╭───═[ STATUS ]═─── 
│⩽⩾ Type: *${type}*
│⩽⩾ Status: Succes!
│⩽⩾ Options: *${isEnable ? '√ Enable' : 'X Disable'}*
│⩽⩾ For: *${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}*
┗─────────────···
`,wm, null, [[`${isEnable ? ' X Disable' : '️ √ Enable'}`, `${isEnable ? `.disable ${type}` : `.enable ${type}`}`], ['Owner', '.owner']],m)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler