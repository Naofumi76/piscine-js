function triangle(str, depth) {
    let result = ''
    for (let i = 1; i <= depth; i++) {
        for (let j = 0; j < i; j++) {
            result += str
        }
        result += '\n'
    }
    return result.trim()
}