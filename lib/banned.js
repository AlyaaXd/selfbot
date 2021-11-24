const fs = require('fs')



/**
 * Add user to bannedList database
 * @param {String} userId
 * @param {String} expired
 * @param {Object} _data
 */
 const addBanned = (userId, _data) => {
    let success = false

    const obj = {
        id: userId      
    }
    
    _data.push(obj)
    fs.writeFileSync('./database/banned.json', JSON.stringify(_data))
}
/**
 * Unbanned someone.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
 const unBanned = (userId, _data) => {
    let position = null
    Object.keys(_data).forEach((i) => {
        if (_data[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _data.splice(position, 1)
        fs.writeFileSync('./database/banned.json', JSON.stringify(_data))
    }
    return true
}





/**
 * Check user is premium.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
 const cekBannedUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

module.exports = {
    addBanned,
    unBanned,
    cekBannedUser
}