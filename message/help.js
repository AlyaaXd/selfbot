
exports.menu = (listcmdblock, kyun, process, timeWit, timeWita, timeWib, multi, fs, isPremium, getLimit, limit, limitCount, balance, getBalance, sender, blocked, ban, listerror, user, autosticker, forwarding, fake,autoread, autovn, typing, Antibuggc,antibugtroli,Toxic, isAntihidetag, isKickarea, isAntiLink, AntiVirtex, isAntiviewonce, hitnya, pushname, ucapanWaktu, prefix, publik, week, weton, calender) => {
return`
${week}, ${calender} 

 *╭▸* Nama : ${pushname}
 *│*⦁ Status : ${isPremium ? 'Premium':'Free'}
 *│*⦁ Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
 *│*⦁ Balance : $${getBalance(sender, balance)}
 *│*⦁ Prefix :「  ${multi ? 'Multi Prefix' : `${prefix}`}  」
 *│*⦁ Mode : ${publik ? "Public" : "Self"}
 *│*⦁ Active : ${kyun(process.uptime())}
 *│*⦁ Time : ${timeWib} Wib
 *│*⦁ Time : ${timeWit} Wit
 *│*⦁ Time : ${timeWita} Wita
 *│*⦁ Hit Today : ${JSON.parse(fs.readFileSync('./database/hitToday.json')).length}
 *│*⦁ Total User : ${JSON.parse(fs.readFileSync('./database/user.json')).length}
 *│*⦁ Total Error : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}
 *│*⦁ User Banned : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}
 *│*⦁ User Blocked : ${JSON.parse(fs.readFileSync('./database/userblocked.json')).length} 
 *╰▸* Cmd Blocked : ${JSON.parse(fs.readFileSync('./database/blockcmd.json')).length} 

 *]───── COMMAND ─────[*
					          ▾
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*╭─❲ GROUP ❳*
*│*
*│▸* ${prefix}antilink
*│▸* ${prefix}antilinkgc
*│▸* ${prefix}antivirtex  
*│▸* ${prefix}antibuggc 
*│▸* ${prefix}antitroli 
*│▸* ${prefix}antihidetag 
*│▸* ${prefix}antibadword 
*│▸* ${prefix}antivo
*│▸* ${prefix}antidelete
*│▸* ${prefix}addbadword    
*│▸* ${prefix}delbadword     
*│▸* ${prefix}add 
*│▸* ${prefix}kick
*│▸* ${prefix}kicktime
*│▸* ${prefix}kickme
*│▸* ${prefix}opentime   
*│▸* ${prefix}closetime    
*│▸* ${prefix}welcome    Fix
*│▸* ${prefix}linkgc
*│▸* ${prefix}infogc
*│▸* ${prefix}gc
*│▸* ${prefix}setdesc 
*│▸* ${prefix}setname 
*│▸* ${prefix}infoall 
*│▸* ${prefix}sider 
*│▸* ${prefix}unbanchat
*│▸* ${prefix}promote 
*│▸* ${prefix}demote 
*│▸* ${prefix}revoke
*│▸* ${prefix}getppgc
*│▸* ${prefix}getbio 
*│▸* ${prefix}getpp 
*│▸* ${prefix}ban 
*│▸* ${prefix}unban 
*│▸* ${prefix}listban
*│▸* ${prefix}reminder 
*│▸* ${prefix}ceksewa 
*│▸* ${prefix}voting 
*│▸* ${prefix}delvote
*│▸* vote
*│▸* devote
*│*
*╰────────────⦁*

*╭─❲ INFO ❳*          
*│*
*│* ▸ Antibuggc : ${Antibuggc ? 'ON' : 'OFF'}
*│* ▸ Antibadword : ${Toxic ? 'ON' : 'OFF'}
*│* ▸ Antihidetag : ${isAntihidetag ? 'Aktif' : 'OFF'}
*│* ▸ Antiasing : ${isKickarea ? 'ON' : 'OFF'}
*│* ▸ Antilink : ${isAntiLink ? 'ON' : 'OFF'}
*│* ▸ Antivirtex : ${AntiVirtex ? 'ON' : 'OFF'}
*│* ▸ Antivo : ${isAntiviewonce ? 'ON' : 'OFF'}
*│* ▸ Autotyping : ${typing ? 'ON' : 'OFF'}
*│* ▸ Autovn : ${autovn ? 'ON' : 'OFF'}
*│* ▸ Autosticker : ${autosticker ? 'ON' : 'OFF'}
*│* ▸ Autoread : ${autoread ? 'ON' : 'OFF'}
*│* ▸ Forward : ${forwarding ? 'ON' : 'OFF'}
*│*
*╰────────────⦁*

*╭─❲ RANDOM ❳*
*│* 
*│▸* ${prefix}loli   
*│▸* ${prefix}cosplay 
*│▸* ${prefix}wallml     
*│▸* ${prefix}katailham
*│▸* ${prefix}anna 
*│▸* ${prefix}asunayuki  
*│▸* ${prefix}ayuzawa 
*│▸* ${prefix}chitoge 
*│▸* ${prefix}emilia    
*│▸* ${prefix}erza 
*│▸* ${prefix}hinata
*│▸* ${prefix}naruto 
*│▸* ${prefix}sasuke  
*│▸* ${prefix}anime
*│▸* ${prefix}memeindo
*│*
*╰────────────⦁*

*╭─❲ NSFW ❳*    New™
*│*
*│▸* ${prefix}nsfwmenu 
*│*
*╰────────────⦁*

*╭─❲ GAME ❳*
*│*
*│▸* ${prefix}tebakbendera    
*│▸* ${prefix}tebakgambar     
*│▸* ${prefix}tebakanime    Eror
*│▸* ${prefix}caklontong     
*│▸* ${prefix}family100     
*│▸* ${prefix}tebakkata     
*│▸* ${prefix}tebaklirik     
*│▸* ${prefix}siapaaku     
*│▸* ${prefix}math
*│*
*╰────────────⦁*

*╭─❲ USER LIMIT ❳*
*│*
*│▸* ${prefix}limit 
*│▸* ${prefix}claim
*│▸* ${prefix}cekprem 
*│▸* ${prefix}listprem
*│▸* ${prefix}topbalance 
*│▸* ${prefix}buylimit
*│▸* ${prefix}buygamelimit
*│▸* ${prefix}myprofil
*│*
*╰────────────⦁*

*╭─❲ MAKER ❳*
*│*
*│▸* ${prefix}sticker 
*│▸* ${prefix}swm 
*│▸* ${prefix}take 
*│▸* ${prefix}fdeface 
*│▸* ${prefix}trigger 
*│▸* ${prefix}attp 
*│▸* ${prefix}ttp2
*│▸* ${prefix}ttp3
*│▸* ${prefix}wasted
*│▸* ${prefix}ttp    
*│▸* ${prefix}emoji 
*│▸* ${prefix}semoji  
*│▸* ${prefix}nuliskiri 
*│▸* ${prefix}nuliskanan 
*│▸* ${prefix}foliokiri     
*│▸* ${prefix}foliokanan  
*│▸* ${prefix}tts 
*│▸* ${prefix}narutoteks    
*│▸* ${prefix}shadow 
*│▸* ${prefix}romantic 
*│▸* ${prefix}smoke 
*│▸* ${prefix}burnpaper 
*│▸* ${prefix}lovemsg 
*│▸* ${prefix}grass 
*│▸* ${prefix}doubleheart 
*│▸* ${prefix}coffecup 
*│▸* ${prefix}lovetext 
*│▸* ${prefix}butterfly 
*│▸* ${prefix}wanted
*│▸* ${prefix}sniper
*│▸* ${prefix}rip
*│▸* ${prefix}instagram
*│▸* ${prefix}beautiful
*│▸* ${prefix}scary
*│▸* ${prefix}utatoo
*│▸* ${prefix}missionpassed
*│▸* ${prefix}glitch
*│▸* ${prefix}fire
*│▸* ${prefix}dictator
*│▸* ${prefix}ddungeon
*│*
*╰────────────⦁*

*╭─❲ CONVERTER ❳*
*│*
*│▸* ${prefix}toimg 
*│▸* ${prefix}tomp3 
*│▸* ${prefix}toptt 
*│▸* ${prefix}slow 
*│▸* ${prefix}togif 
*│▸* ${prefix}tovideo 
*│▸* ${prefix}fast 
*│▸* ${prefix}reverse 
*│▸* ${prefix}pastebin 
*│▸* ${prefix}hode 
*│▸* ${prefix}imut 
*│▸* ${prefix}nightcore 
*│▸* ${prefix}ghost 
*│▸* ${prefix}volume     
*│*
*╰────────────⦁*

*╭─❲ STORAGE ❳*
*│*
*│▸* ${prefix}addmusik
*│▸* ${prefix}adderror
*│▸* ${prefix}addstik
*│▸* ${prefix}addimg
*│▸* ${prefix}addvid
*│▸* ${prefix}addvn
*│▸* ${prefix}liststik
*│▸* ${prefix}listimg
*│▸* ${prefix}listvid
*│▸* ${prefix}listerror
*│▸* ${prefix}delimg
*│▸* ${prefix}delvn
*│▸* ${prefix}delstik
*│▸* ${prefix}delerror
*│*
*╰────────────⦁*

*╭─❲ FUN ❳*
*│*
*│▸* ${prefix}fitnah 
*│▸* ${prefix}hobby
*│▸* ${prefix}watak
*│▸* ${prefix}bisakah 
*│▸* ${prefix}apakah 
*│▸* ${prefix}kapankah 
*│▸* ${prefix}bagaimanakah 
*│▸* ${prefix}rate
*│▸* ${prefix}sangecek
*│▸* ${prefix}gaycek
*│▸* ${prefix}lesbicek
*│▸* ${prefix}gantengcek
*│▸* ${prefix}cantikcek
*│▸* ${prefix}jadian 
*│▸* ${prefix}ngewe
*│▸* ${prefix}wangy 
*│▸* ${prefix}truth
*│▸* ${prefix}dare
*│▸* ${prefix}cekbapak
*│*
*╰────────────⦁*

*╭─❲ PREMIUM ❳*
*│* 
*│▸* ${prefix}pinterest
*│▸* ${prefix}asupan 
*│▸* ${prefix}aspan 
*│▸* ${prefix}totag 
*│▸* ${prefix}chat  
*│▸* ${prefix}simi    
*│▸* ${prefix}caridoi   
*│▸* ${prefix}hidetag
*│▸* ${prefix}mediafire     
*│▸* ${prefix}ytdl
*│▸* ${prefix}fbhd
*│▸* ${prefix}twitterhd
*│▸* ${prefix}playaudio   >No limit size
*│▸* ${prefix}playvideo    >No limit size
*│*
*╰────────────⦁*

*╭─❲ PRIMBON ❳* New™
*│* 
*│▸* ${prefix}artinama     
*│▸* ${prefix}artimimpi     
*│▸* ${prefix}namapasangan     
*│▸* ${prefix}tanggaljadian    
*│▸* ${prefix}tipewatak      
*│▸* ${prefix}ramalanjodoh    
*│▸* ${prefix}ramalanrejeki   
*│▸* ${prefix}kecocokannama
*│▸* ${prefix}haribaik     
*│▸* ${prefix}harilarangan    
*│*
*╰────────────⦁*

*╭─❲ DOWNLOAD ❳*
*│*
*│▸* ${prefix}ytmp4 
*│▸* ${prefix}ytmp3 
*│▸* ${prefix}play     
*│▸* ${prefix}tiktok     
*│▸* ${prefix}tiktoknowm     
*│▸* ${prefix}ig     
*│▸* ${prefix}igstory     
*│▸* ${prefix}twitter          
*│▸* ${prefix}fb          
*│*
*╰────────────⦁* 

*╭─❲ SEARCH ❳*
*│*
*│▸* ${prefix}ytsearch 
*│▸* ${prefix}google 
*│▸* ${prefix}igstalk 
*│▸* ${prefix}gimage 
*│▸* ${prefix}wiki 
*│▸* ${prefix}kbbi 
*│▸* ${prefix}brainly
*│▸* ${prefix}wait     
*│▸* ${prefix}chara    
*│▸* ${prefix}lirik     New™
*│▸* ${prefix}wallpaper     New™
*│*
*╰────────────⦁*

*╭─❲ OTHER ❳*
*│*
*│▸* ${prefix}ping
*│▸* ${prefix}inspect 
*│▸* ${prefix}caripesan 
*│▸* ${prefix}kontak
*│▸* ${prefix}style 
*│▸* ${prefix}shorturl
*│▸* ${prefix}tourl
*│▸* ${prefix}zalgo     
*│▸* ${prefix}linkwa 
*│▸* ${prefix}listsewa 
*│▸* ${prefix}tospam
*│▸* ${prefix}spam
*│▸* ${prefix}kodebahasa 
*│▸* ${prefix}listvn
*│▸* ${prefix}cerpen     New™
*│▸* ${prefix}musik
*│▸* ${prefix}reportbug
*│▸* ${prefix}translate
*│▸* ${prefix}otakuongoing New™
*│*
*╰────────────⦁*

*╭─❲ OWNER ❳*
*│*
*│▸* ${prefix}off 
*│▸* ${prefix}on
*│▸* ${prefix}bc
*│▸* ${prefix}bcgc    
*│▸* ${prefix}pcallmem    
*│▸* ${prefix}addstory     
*│▸* ${prefix}status
*│▸* ${prefix}self
*│▸* ${prefix}public
*│▸* ${prefix}setthumb
*│▸* ${prefix}setppbot     
*│▸* ${prefix}setfakeimg
*│▸* ${prefix}setreply    
*│▸* ${prefix}setovo     
*│▸* ${prefix}setgopay     
*│▸* ${prefix}setdana     
*│▸* ${prefix}setimageinfo
*│▸* ${prefix}setmenu      New™
*│▸* ${prefix}sendhidetag     
*│▸* ${prefix}adderror     
*│▸* ${prefix}addorder      
*│▸* ${prefix}addprem     
*│▸* ${prefix}addrespon
*│▸* ${prefix}delrespon 
*│▸* ${prefix}listrespon
*│▸* ${prefix}listuser
*│▸* ${prefix}delprem     
*│▸* ${prefix}giftlimit
*│▸* ${prefix}resetlimit
*│▸* ${prefix}setcmd 
*│▸* ${prefix}delcmd 
*│▸* ${prefix}blockcmd 
*│▸* ${prefix}delblockcmd 
*│▸* ${prefix}delchat 
*│▸* ${prefix}clearall 
*│▸* ${prefix}clearallerror     
*│▸* ${prefix}clearalluser
*│▸* ${prefix}clearallblock
*│▸* ${prefix}clearallban
*│▸* ${prefix}listblockcmd  
*│▸* ${prefix}listcmd
*│▸* ${prefix}listorder
*│▸* ${prefix}out
*│▸* ${prefix}autotyping 
*│▸* ${prefix}autoread
*│▸* ${prefix}autovn
*│▸* ${prefix}autoblockcmd     
*│▸* ${prefix}antichatbot
*│▸* ${prefix}anticall     
*│▸* ${prefix}stopjadibot 
*│▸* ${prefix}listbot
*│▸* ${prefix}forward
*│▸* ${prefix}forwardtotal 
*│▸* ${prefix}join    
*│*
*╰────────────⦁*

*╭─❲ MODE WAR ❳*
*│*
*│▸* ${prefix}bugv1 
*│▸* ${prefix}bugv2 
*│▸* ${prefix}bugv3 
*│▸* ${prefix}bugv4 
*│▸* ${prefix}bugv5     
*│▸* ${prefix}bugvn    
*│▸* ${prefix}amaterasu 
*│*
*╰────────────⦁*

*╭─❲ THANKS TO ❳*
*│*
*│* • Dittaz
*│* • Nina Kawai
*│* • Resta Gamteng :v
*│* • Zeeone Ofc
*│* • Yudha Perdana
*│* • Yogi PW
*│* • Decode Denpa
*│* • Fernazer
*│* • X - Dev Team
*│* • XChillDs & Yuzu
*│*
*╰────────────⦁*`
}