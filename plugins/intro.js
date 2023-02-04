
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `☰⃟⟣⟔ Yᴏᴜʀ Cᴀʀᴅ Iɴᴛʀᴏ ⟓⟢⃟
Nama lengkap:
Nama panggilan:
Hobi:
Umur:
Gender:
Kelas:
Tinggi badan:
Berat badan :
Agama:
Golongan darah:
Status:
Nama pacar:
Jumlah mantan:
Nama mantan:
Nama bapak : 
Nama ibu :
Nama kakak:
Kakak online:
Kakak kandung/tiri:
Jumlah kakak:
Nama adek:
Adek online:
Adek kandung/tiri: 
Jumlah adek:
Nama kakek:
Kakek dari ayah :
Kakek dari ibu  :
Nama nenek:
Nenek dari ayah :
Nenek dari ibu :
Nama bibi:
Bibi dari ayah :
Bibi dari ibu :
Nama paman
Bibi dari ayah :
Bibi dari ibu :
KTP:
SIM: 
STNK:
BPKB:
KK: 
Alamat rumah:
RT: 
RW:
KELURAHAN:
KECAMATAN: 
KABUPATEN: 
KOTA: 
PROVINSI:
PLANET:
GALAXY:
UNIVERSE:
LANGIT:
DARATAN: 
LAUTAN: 
KEPULAUAN:
SAMUDRA:
UKURAN SEPATU:
UKURAN BAJU: 
UKURAN CELANA:
LEBAR PINGGANG:
PANJANG TANGAN:
PANJANG KAKI:
MAKANAN FAVORIT:
MINUMAN FAVORIT:
FILM FAVORIT: 
SINETRON FAVORIT:
GAME FAVORIT:
ANIME FAVORIT:
MANGA FAVORIT:
MANHUA FAVORIT:
MANHWA FAVORIT:
CHANNEL YOUTUBE:
INSTAGRAM:
TWITTER: 
FACEBOOK:
MUSIC FAVORIT:
SIFAT:
SIKAP:
ZODIAK:
TANGGAL LAHIR: 
MERK HP:
MERK MOTOR:
MERK MOBIL:
TINGKAT RUMAH:
ALAMAT SEKOLAH:
Ukuran daleman:
Ukuran atasan :
Diameter kepala :
Statistik tubuh 
Diameter perut :
Diameter lengan :
Diameter paha :
Diameter lutut :
Diameter betis:
Panjang tangan :
Panjang kaki :
Panjang kepala :
Lebar hidung :
Cita cita :
Hobi :
Jenis hewan peliharaan :
Nama hewan:
Diameter rumah:
Waifu:
Husbu:
Loli kesukaan :
Shota kesukaan :
Punya brp teman :
Teman online :
Teman offline :
Teman main game:
Teman sekolah:
Nemu link grup ini dari mana :
Kenal sama siapa aj d grup ini :
Org paling cantik yg lu kenal :
Org paling ganteng yg lu kenal :
Nama wali kelas:
Nama kepala sekolah :
Nma ketua kelas:
Wakil ketua kls:
Sekertaris :
Sekertaris 2:
Bendahara:
Bendahara 2:
Nama presiden:
Nama wakil:
Nma org yg lu kejar:
Planet yg lu ingin:
┈┈┈╼╸╸╸╴╴╴ ╳
`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'MENU','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://facebook.com/l4c1f2r",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'Iɴᴛʀᴏᴄᴀᴅᴜᴛɪᴏɴ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler

