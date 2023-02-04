async function handler(m) {
    if (!m.quoted) throw 'reply pesan!'
    let q = await m.getQuotedObj()
    if (!q.quoted) throw 'pesan yang anda reply tidak mengandung reply!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.help = ['q']
handler.tags = ['quotes']
handler.command = /^(cheat)$/i
handler.command = /^q$/i

export default handler