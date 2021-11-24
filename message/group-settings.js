const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const util = require('util')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("../lib/color");
const fetch = require("node-fetch");
const extream = JSON.parse(fs.readFileSync('./database/extream.json'))
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const fake1 = settings.copyright
const prefix = settings.prefix
const copyright = `© ${fake1}`  
 
  
module.exports = async(client, anu) => {
  	try{
                        if(extream.includes(anu.jid)) return
                        if(!JSON.parse(fs.readFileSync('./database/welkom.json')).includes(anu.jid)) return
                        metdata = await client.groupMetadata(anu.jid);     
                        //Button Location
                        const sendButLocation = async (id, text1, desc1, gam1, but = []) => {
					    kma = gam1
					    mhan = await client.prepareMessage(id, kma, MessageType.location, {thumbnail:kma})
					    buttonMessages = {
						locationMessage: mhan.message.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						 }
						 client.sendMessage(id, buttonMessages, MessageType.buttonsMessage)
						 }
                         try {
			             ppimg = await client.getProfilePicture(metdata.id)
				         } catch {
				         ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				         }
				         buffer = await getBuffer(ppimg)
                         let but = [{
						 "buttonId": `INFO BOTZ`,
						 "buttonText": {
						 "displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},
						 "type": "RESPONSE"},{
						 "buttonId": `${prefix}menu`,
						 "buttonText": {
						 "displayText": `ᴍᴇɴᴜ`},
						 "type": "RESPONSE"
						 }]
    
    
    
    
    if (anu.announce == "false") {
      teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`;
      console.log(`- [ Group Opened ] - In ${metdata.subject}`);            
      sendButLocation(metdata.id, teks,copyright, buffer, but)
      
    } else if (anu.announce == "true") {
      teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`;      
      console.log(`- [ Group Closed ] - In ${metdata.subject}`);        
      sendButLocation (metdata.id, teks,copyright, buffer, but)
      
    } else if (!anu.desc == "") {
      tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
      teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${
        anu.descOwner.split("@")[0]
      }\nDeskripsi Baru : ${anu.desc}`;      
      console.log(`- [ Group Description Change ] - In ${metdata.subject}`);               
      sendButLocation (metdata.id, teks,copyright, buffer, but)
      
    } else if (anu.restrict == "false") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;
      sendButLocation (metdata.id, teks,copyright, buffer, but)
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
      
    } else if (anu.restrict == "true") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;
      client.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    }
    
     } catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
    if (!e.includes("jid is not defined")) {
    console.log(color('GROUP : %s', 'white'), color(e, 'green'))
    client.sendMessage(from, e, text)
        }
	}
}
}
  