const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
const util = require('util')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("../lib/color");
const { banner, start, success, getGroupAdmins,close} = require("../lib/functions");
const fetch = require("node-fetch");
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const{ extream, ngebucin }= require("./messages.js");
welcomeType1 = JSON.parse(fs.readFileSync('./settings.json')).welcomeType1
welcomeType2 = JSON.parse(fs.readFileSync('./settings.json')).welcomeType2
welcomeType3 = JSON.parse(fs.readFileSync('./settings.json')).welcomeType3

module.exports = async(client, anu) => {
  	try{
            const fake1 = settings.copyright
            const prefix = settings.prefix
            const copyright = `© ${fake1}`  
            const groupMet = await client.groupMetadata(anu.jid)
            const groupName = groupMet.subject
            const allmem = groupMet.participants.length
            const mem = anu.participants[0];
            const memNumber = mem.split("@")[0];
            const timeWib = moment.tz("Asia/Jakarta").format("HH:mm");
            const from = anu.jid
            const cintakupadamu = ngebucin[Math.floor(Math.random() * ngebucin.length)]
            const groupMembers = groupMet.participants;
            const groupAdmins = getGroupAdmins(groupMembers);                        
            const conts = client.contacts[mem] || { notify: anu.jid.replace(/@.+/, '') }
	        const pushname = conts.notify || conts.vname || conts.name || PhoneNumber('+' + mem.replace('@s.whatsapp.net', '')).getNumber('international').replace(new RegExp("[()+-/ +/]", "gi"), "")
            const intro = `Halo ${pushname} \n\nNama : \nUmur :\nGender : \nAsal :\n\nSemoga Betah dan jangan lupa di isi\nAnd Following Rules Group`;
            
            
            
          const sendButImage2 = async(id, text1, desc1, gam1, but = []) => {
          imageMsg = ( await client.prepareMessageMedia(gam1, "imageMessage", {thumbnail: gam1})).imageMessage;
          buttonsMessage = {
          contentText: text1,
          footerText: desc1,
          imageMessage: imageMsg,
          buttons: but,
          headerType: 4,
          };
           prep = await client.prepareMessageFromContent(id, { buttonsMessage },{});
           client.relayWAMessage(prep);
          }

        

			
			//Button image
			const sendButImage = async(id, text1, desc1, gam1, but = []) => {
             kma = gam1
             mhan = await client.prepareMessage(from, kma, image)
             const buttonMessages = {
             imageMessage: mhan.message.imageMessage,
             contentText: text1,
             footerText: desc1,
             buttons: but,
             headerType: 4
             }
             client.sendMessage(id, buttonMessages, MessageType.buttonsMessage)
             }
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
             var pp_user = await client.getProfilePicture(mem)
             } catch (e) {
             var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
             };
            const  ppUser = await getBuffer(pp_user)                          
             try {
             pp_grup = await client.getProfilePicture(from);
             } catch (e) {
             pp_grup = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
             }
             const ppGrup = await getBuffer(pp_grup)
             if (anu.action == "add" && mem.includes(client.user.jid) && extream.includes(anu.jid)) {
             client.sendMessage(anu.jid, `${cintakupadamu}\n\n salken yak gaes`, text);
             }
             if (anu.action == "remove" && anu.participants.length === 1){
         	console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah keluar dari gc`,`green`), color(`${groupName}`,`magenta`))
             } else  if (anu.action == "add" && anu.participants.length === 1){ 
         	console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah bergabung di gc`,`green`), color(`${groupName}`,`magenta`))
             }
                    
             let but = [{
						 "buttonId": `y`,
						 "buttonText": {
						 "displayText": `Oke siap`},
						 "type": "RESPONSE"},{
						 "buttonId": `${prefix}bully`,
						 "buttonText": {
						 "displayText": `Bully yuk`},
						 "type": "RESPONSE"
						 }]
            
    


   
//Welcome Type1
             
             if (anu.action == "add" && JSON.parse(fs.readFileSync('./database/welkom.json')).includes(anu.jid) && welcomeType1) {
             buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${allmem}&gcname=${encodeURI(groupName)}&pp=${pp_user}&bg=https://i.postimg.cc/tCTkRNpf/anime-anime-girls-digital-art-artwork-neko-ears-hd-wallpaper-preview.jpg`)
             teks =  `Selamat datang di grup\nMoga betah ya kak `        
             buttons = [
             { buttonId: `y`, buttonText: { displayText: "Oke siap" }, type: 1 },
             { buttonId: `${prefix}bullyuk ${memNumber}`, buttonText: { displayText: "Bully yuk" }, type: 1 } 
             ];         
             sendButImage2(from, teks, copyright, buff, buttons)
             }
                              
              if (anu.action == "remove" && JSON.parse(fs.readFileSync('./database/welkom.json')).includes(anu.jid) && welcomeType1 ) {
              buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${allmem}&gcname=${encodeURI(groupName)}&pp=${pp_user}&bg=https://i.postimg.cc/tCTkRNpf/anime-anime-girls-digital-art-artwork-neko-ears-hd-wallpaper-preview.jpg`)
              teks = `Asik beban grup keluar \nKena mental dia :v`
              buttons = [{ buttonId: `y`, buttonText: { displayText: "Nitip gorengan" }, type: 1 }
              ];        
              sendButImage2(from, teks, copyright, buff, buttons)
              }
              
              
              
              
              
              
            
             
              
//welcome Type2          


             if (anu.action == "add" && JSON.parse(fs.readFileSync('./database/welkom.json')).includes(anu.jid) && welcomeType2) {        
             buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${allmem}&gcname=${encodeURI(groupName)}&gcicon=${pp_grup}&pp=${pp_user}&bg=https://i.postimg.cc/tCTkRNpf/anime-anime-girls-digital-art-artwork-neko-ears-hd-wallpaper-preview.jpg`)
             teks =  `Selamat datang di grup\nMoga betah ya kak `        
             buttons = [
             { buttonId: `y`, buttonText: { displayText: "Oke siap" }, type: 1 },
             { buttonId: `${prefix}bullyuk ${memNumber}`, buttonText: { displayText: "Bully yuk" }, type: 1 } 
             ];         
             sendButImage2(from, teks, copyright, buff, buttons)
             }

              if (anu.action == "remove" && JSON.parse(fs.readFileSync('./database/welkom.json')).includes(anu.jid) && welcomeType2) {                   
              buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${allmem}&gcname=${encodeURI(groupName)}&gcicon=${pp_grup}&pp=${pp_user}&bg=https://i.postimg.cc/tCTkRNpf/anime-anime-girls-digital-art-artwork-neko-ears-hd-wallpaper-preview.jpg`)
              teks = `Asik beban grup keluar \nKena mental dia :v`
              buttons = [{ buttonId: `y`, buttonText: { displayText: "Nitip gorengan" }, type: 1 }
              ];        
              sendButImage2(from, teks, copyright, buff, buttons)
              }
        
        
        
     
//Welcome Type3   
     

             if (anu.action == "add" && JSON.parse(fs.readFileSync('./database/welkom.json')).includes(anu.jid) && welcomeType3) {                     
             teks =  `Selamat datang di grup\nMoga betah ya kak `        
             buttons = [
             { buttonId: `y`, buttonText: { displayText: "Oke siap" }, type: 1 },
             { buttonId: `${prefix}bullyuk ${memNumber}`, buttonText: { displayText: "Bully yuk" }, type: 1 } 
             ];         
             sendButLocation(from, teks, copyright, pp_user, but)
             }

              if (anu.action == "remove" && JSON.parse(fs.readFileSync('./database/welkom.json')).includes(anu.jid) && welcomeType3){                                 
              teks = `Asik beban grup keluar \nKena mental dia :v`
              buttons = [{ buttonId: `y`, buttonText: { displayText: "Nitip gorengan" }, type: 1 }
              ];        
              sendButLocation(from, teks, copyright, ppUser, but)
              }
       
  
     } catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
    if (!e.includes("jid is not defined")) {
    console.log(color('GROUP : %s', 'white'), color(e, 'green'))
        }
	}
}
           
}




















