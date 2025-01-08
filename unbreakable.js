function split(str, sep) {
    if (typeof str !== 'string' || typeof sep !== 'string') {
        throw new Error('Input must be a string')
    }
    var parts = []
    var temp = ""
    var index = 0
    while (index < str.length) {
        var match = true
        for (let i = 0; i < sep.length; i++) {
            if (str[index + i] !== sep[i]) {
                match = false
                break        
            }
        }
        if (match) {
            parts.push(temp)
            temp = ""
            index += sep.length
        } else {
            temp += str[index]
            index++
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
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            result += sep
        }
        result += arr[i]
    }
    return result
}
/*
console.log(split('ggg - ddd - b', ' - '))
console.log(split("ceci  est  un  test", "  "))
console.log(join(['ceci est un test', 'test'], 'gg'))
*/