const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("../lib/color");
const extream = JSON.parse(fs.readFileSync('./database/extream.json'))
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

  
 
module.exports = async(client, m) => {
if(extream.includes(m.key.remoteJid)) return
if (m.key.remoteJid == 'status@broadcast') return 
if (!JSON.parse(fs.readFileSync('./database/antidelete.json')).includes(m.key.remoteJid)) return
if (!m.key.fromMe && m.key.fromMe) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
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
const type = Object.keys(m.message)[0] 
client.sendMessage(m.key.remoteJid, `A N T I  D E L E T E 

 Name : @${m.participant.split("@")[0]}
 Day :  ${week} ${calender}
 Time : ${jam}
 Type : ${type}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

client.copyNForward(m.key.remoteJid, m.message)
}
	
	
	