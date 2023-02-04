let handler = async (m) => {
m.reply(m.chat)
}
handler.tags = ['group']
handler.command = ['cekid']

export default handler