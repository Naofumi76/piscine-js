function reverse(str) {
    let result = ""
    for (let i = str.length; i >= 0; i--) {
        result += str.charAt(i)
    }
    return result
}