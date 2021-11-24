const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const client = new WAConnection()
const qrcode = require("qrcode-terminal")
const fs = require("fs");
const fetch = require("node-fetch");
//const { keepalive } = require("./keepalive");
const { banner, start, success, getGroupAdmins,close} = require("./lib/functions");
const { color } = require("./lib/color");
const blocked = JSON.parse(fs.readFileSync('./database/userblocked.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const { addBlock, unBlock, cekBlock } = require("./lib/blockuser");
const { addBanned, unBanned, cekBannedUser } = require("./lib/banned");
Anticall = settings.Anticall
const baterai = {
battery: "" || "Tidak Terdeteksi",
isCharge: "" || false
}




async function starts() {
	    client.autoReconnect = ReconnectMode.onConnectionLost
	    client.version = [2, 2143, 3]
	    client.browserDescription = ["EXTREAM","Ubuntu","18.04"]
	    client.logger.level = 'warn'
	    console.log(color(`]─`,`magenta`),`「`,  color(`EXTREAM`,`red`), `」`,  color(`─[`,`magenta`))
	    client.on('qr', () => {
	    console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan Bwang'))
	    })
	    fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
	    client.on('connecting', () => {
	    start(`1`,`Connecting...`)
	    })
	    client.on('open', () => {
	    success(`1`,`[■■■■■■■■■■■■■■■] Connected`)
	    }) 
	    client.on('ws-close', () => {
        console.log(color("[SYSTEM]", "white"), color('Connection lost, trying to reconnect', 'deeppink'))
        })    
	    await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
  
        teks = `https://chat.whatsapp.com/EovTV7blporBvWncIOXDBA`
        client.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})

        client.on("group-update", async (anu) => {
        require('./message/group-settings.js')(client, anu)
        });
        client.on('group-participants-update', async (anu) => {
        require('./message/group.js')(client, anu)
        });
        client.on('CB:Blocklist', json => {
	    if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	    })
	    client.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
        client.on('CB:action,,call',  json => {
	    if(!Anticall) return
        const callerId = json[2][0][1].from;
        let id = json[2][0][2][0][1]["call-id"]
        if(cekBannedUser(callerId, ban)) return
        console.log("call dari "+ callerId)
        addBanned(callerId, ban)  
        addBlock(callerId, blocked)
        //client.rejectIncomingCall(callerId, id)
        client.sendMessage(callerId, "Kamu telah di block + banned karena telpon botz", MessageType.text)
        client.blockUser(callerId, "add") // Block user
        })     
        client.on('message-delete', async (m) => {
        require('./message/antidelete.js')(client, m)
        })
        client.on('chat-update', async (message) => {
        require('./index.js')(client, message, baterai )
        })
};

starts()













