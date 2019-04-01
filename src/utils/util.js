const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

const cloneDeep = obj => {
    if (isPrimaryData(obj)) {
        return obj;
    } else {
        if (Array.isArray(obj)) {
            return Array.map(el => {
                cloneDeep(el);
            });
        } else if (Object.prototype.toString.call(obj) === "[object Object]") {
            let retObj = {};
            for (let prop in obj) {
                retObj[prop] = cloneDeep(obj[prop]);
            }
            return retObj;
        } else { //function 或者Date
            return obj;
        }
    }
}

const isPrimaryData = obj => {
    let type = typeof obj;
    return type == "string" ||
        type == "boolean" ||
        type == "number" ||
        type == "symbol" ||
        type == "undefined";
}

module.exports = {
    formatTime,
    cloneDeep,
    isPrimaryData
}