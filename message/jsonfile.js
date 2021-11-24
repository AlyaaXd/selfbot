const fs = require("fs")


//Storage
exports.setiker = JSON.parse(fs.readFileSync('./temp/stick.json'))
exports.audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
exports.musiknye = JSON.parse(fs.readFileSync('./temp/music.json'))
exports.imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
exports.videonye = JSON.parse(fs.readFileSync('./temp/video.json'))

//Grup
exports.antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
exports.antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
exports.antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"));
exports.antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
exports.kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
exports.welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
exports.antibug = JSON.parse(fs.readFileSync('./database/antibug.json'))
exports.antidel = JSON.parse(fs.readFileSync('./database/antidelete.json'))
exports.linkgcnya = JSON.parse(fs.readFileSync('./database/gcdetec.json'))
exports.siminya = JSON.parse(fs.readFileSync('./database/simi.json'))
exports.nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))


//Owner
exports.bancht = JSON.parse(fs.readFileSync('./database/banchat.json'))
exports.mute = JSON.parse(fs.readFileSync('./database/mute.json'))

//User
exports.spamkuyy = JSON.parse(fs.readFileSync('./database/spam.json'))
exports.grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
exports.senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
exports.ban = JSON.parse(fs.readFileSync('./database/banned.json'))
exports.badword = JSON.parse(fs.readFileSync('./database/badword.json'))
exports.balance = JSON.parse(fs.readFileSync('./database/balance.json'));
exports.limit = JSON.parse(fs.readFileSync('./database/limit.json'));
exports.glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
exports.premium = JSON.parse(fs.readFileSync('./database/premium.json'))
exports._claim = JSON.parse(fs.readFileSync('./database/claim.json'))
exports.sewa = JSON.parse(fs.readFileSync("./database/sewa.json"))
exports.user = JSON.parse(fs.readFileSync('./database/user.json'))
exports.hitnya = JSON.parse(fs.readFileSync('./database/hitToday.json'))
exports.spamBan = JSON.parse(fs.readFileSync('./database/spamban.json'))
exports.blocked = JSON.parse(fs.readFileSync('./database/userblocked.json'))

exports._reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));



//List
exports.listcmdblock = JSON.parse(fs.readFileSync('./database/blockcmd.json'))
exports.listerror = JSON.parse(fs.readFileSync('./database/listerror.json'))

exports.settings = JSON.parse(fs.readFileSync('./settings.json'))
exports.extream = JSON.parse(fs.readFileSync('./database/extream.json'))


exports._scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))

exports.commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))































