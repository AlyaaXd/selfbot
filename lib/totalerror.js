const fs = require('fs')


const addError = (msg, command, _data) => {
    const obj = {
        error: msg,
        cmd: command
    }
    _data.push(obj)
    fs.writeFileSync('./database/listerror.json', JSON.stringify(_data))

    return true
}


const deleteError = (command, _data) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].error === command) {
            _data.splice(i, 1)
            fs.writeFileSync('./database/listerror.json', JSON.stringify(_data))
        }
    })
    return true
}



const checkError = (command, _data) => {
    let status = false
    Object.keys(_data).forEach((i) => {
        if (_data[i].error === command) {
            status = true
        }
    })

    return status
}




module.exports = {
    addError,
    deleteError,
    checkError
}