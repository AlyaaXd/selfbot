const fs = require('fs')


const addblockcmd = (msg, _data) => {
    const obj = {
        cmd: msg
    }
    _data.push(obj)
    fs.writeFileSync('./database/blockcmd.json', JSON.stringify(_data))

    return true
}


const deleteblockcmd = (command, _data) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].cmd === command) {
            _data.splice(i, 1)
            fs.writeFileSync('./database/blockcmd.json', JSON.stringify(_data))
        }
    })
    return true
}



const checkblockcmd = (command, _data) => {
    let status = false
    Object.keys(_data).forEach((i) => {
        if (_data[i].cmd === command) {
            status = true
        }
    })

    return status
}




module.exports = {
    addblockcmd,
    deleteblockcmd,
    checkblockcmd
}