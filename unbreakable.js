function split(str, sep) {
    if (typeof str !== 'string' || typeof sep !== 'string') {
        throw new Error('Input must be a string')
    }
    var parts = []
    var temp = ""
    for (let values in str) {
        if (str[values] !== sep) {
            temp += str[values]
        } else {
            parts.push(temp)
            temp = ""
        }
    }
    parts.push(temp)
    return parts
}

function join(arr, sep) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array')
    }
    if (typeof sep!=='string') {
        throw new Error('Separator must be a string')
    }
    var result = ""
    for (let values in arr) {
        if (values <= arr.length-2) {
            result += arr[values] + sep
        } else {
            result += arr[values]
        }
    }
    return result
}