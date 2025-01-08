function split(str, sep) {
    var parts = []
    var temp = ""
    var index = 0
    while (index < str.length) {
        var match = true
        if (sep === "") {
            for (let i = 0; i < str.length; i++) {
                parts.push(str[i])
            }
            return parts
        }
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

function join(arr) {
    var result = ""
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}

/*
console.log(split('ggg - ddd - b', ' - '))
console.log(split('ggg - ddd - b', ''))
console.log(split("ceci  est  un  test", "  "))
console.log(join(['ceci est un test', 'test']))
*/