function pick(obj, strOrArray) {
    if (typeof strOrArray ==='string') {
        var objet = {}
        for (var key in obj) {
            if (key === strOrArray) {
                objet[key] = obj[key]
            }
        }
        return objet
    }
    if (Array.isArray(strOrArray)) {
        var result = {}
        for (var key in obj) {
            if (strOrArray.includes(key)) {
                result[key] = obj[key]
            }
        }
        return result
    }
    throw new Error('Invalid input. Expected a string or an array.')
}

function omit(obj, strOrArray) {
    if (typeof strOrArray ==='string') {
        var objet = {}
        for (var key in obj) {
            if (key!== strOrArray) {
                objet[key] = obj[key]
            }
        }
        return objet
    }
    if (Array.isArray(strOrArray)) {
        var result = {}
        for (var key in obj) {
            if (!strOrArray.includes(key)) {
                result[key] = obj[key]
            }
        }
        return result
    }
    throw new Error('Invalid input. Expected a string or an array.')
}