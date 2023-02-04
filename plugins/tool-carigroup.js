let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} mabar free fire`
    let res = await carigroup(text, 'name')
    if (!res.length) throw 'Group tidak ditemukan ¯\\_(ツ)_/¯'
    let teks = res.map(res => res.subject + '\n' + res.link).join('\n\n')
    m.reply(teks)
}
handler.help = ['carigrup <pencarian>']
handler.tags = ['tools']

handler.command = /^carig(ro?up|c)/i

module.exports = handler

const axios = require('axios')
const cheerio = require('cheerio')
async function carigroup(search, searchby = 'name') {
    let { data } = await axios.get(global.API('https://restapi.frteam.xyz/carigrup?q=anime&apikey=085759681568', {
        search: encodeURIComponent(search),
        searchby,
    }))
    let $ = cheerio.load(data)
    let results = []
    $('#content > div.entry.clearfix > div.wa-chat').each(function (index, element) {
        let subject = $(this).find('div > div.wa-chat-title-container > a > div > div').text().trim()
        let link = $(this).find('div > div.wa-chat-message > a').attr('href').trim()
        results.push({
            subject,
            link
        })
    })
    return results
}