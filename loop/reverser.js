function reverse(str) {
    if (typeof str === 'string') {
        let result = ""
        for (let i = str.length; i >= 0; i--) {
            result += str.charAt(i)
        }
        return result
    } else {
        let result = []
        for (let i = str.length - 1; i >= 0; i--) {
            result.push(str[i])
        }
        return result
    }
}