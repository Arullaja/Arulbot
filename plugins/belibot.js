let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Minggu* :      *Rp 5.000*
╠➥ *1 Bulan* :      *Rp 10.000*
╠➥ *Permanen* : *Rp 25.000*
╠➥ *Trial* :   *Rp 0*
║
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ Dana 
╠➥ Ovo
╠➥ Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Klik Button Di Bawah
║
╠═〘 Arul 〙 ═`.trim(), '❖ Rull-Bot', 'Dana', '#viadigi', 'Ovo', '#viaumobile', 'Owner', '#owner', m)
}

handler.command = /^(sewabot|sewa)$/i

module.exports = handler
