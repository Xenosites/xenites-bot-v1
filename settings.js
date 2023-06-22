const fs = require('fs')
const chalk = require('chalk')
/*============== SOCIAL ==============*/

// if you don't have it, type "-" or leave it alone so there are credits :v

global.sig = 'https://instagram.com/zykomd'
global.sgc = 'https://chat.whatsapp.com/GFvWy8hTOFM7a1gKOjJKLA'

/*============== PAYMENT ==============*/
global.pdana = '6281255104397'
global.povo = '6281255104397'
global.pgopay = '6281255104397'
global.plinkaja = '6281255104397'
global.ppulsa = '6281255104397' 
global.ppulsa2 = '6281255104397'
global.psaweria = 'https://saweria.co/Zykomd'

/*============== CREATE PANEL ==============*/
global.domain = '' // ISI LINK DOMAIN
global.apikey = '' // ISI APIKEY PTLA
global.c_apikey = '' // ISI APIKEY PTLC
/*============== NOMOR ==============*/
global.owner = ['6281255104397']
global.premium = ['6281255104397']
global.namabot = ['Xenite MD']
global.namaowner = ['Xenite MD']

/*============== WATERMARK ==============*/
global.wm = '© Xenite MD'
global.v = `© Xenite MD`
global.footer = 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ xenite ᴍᴅ ッ'
/*============== STICKER WM ==============*/
global.stickpack = 'Xenite MD'
global.stickauth = `By ©Xenite MD`
global.packname = '© Powered By'
global.author = 'Xenite MD'
/*============== PREFA ==============*/
global.prefa = ['','!','.','🐦','🐤','🗿']
global.prefix = ['']

global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Bot',
    wait: 'Waittt...',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "100",
        premium: "unlimited"
}
global.thumb = fs.readFileSync('./media/img/1.jpg')
global.qris = fs.readFileSync('./media/img/qr.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
