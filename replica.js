function replica(targetObj, ...otherObj) {
    for (var obj of otherObj){
        if (obj && typeof obj === 'object') {
            for (var key of Object.keys(obj)) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] instanceof Date) {
                        targetObj[key] = new Date(obj[key])
                    } else if (obj[key] instanceof RegExp) {
                        targetObj[key] = new RegExp(obj[key])
                    } else if (typeof obj[key] === 'object') {
                        targetObj[key] = Array.isArray(obj[key])? [] : {}
                        replica(targetObj[key], obj[key])
                    } else {
                        targetObj[key] = obj[key]
                    }
                }
            }
        }
    }
    return targetObj
}