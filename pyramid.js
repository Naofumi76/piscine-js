function pyramid(str, depth) {
    let result = ''
    for (let i = 1; i <= depth; i++) {
        for (let j = 0; j < depth - i; j++) {
            result +=' '
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            result += str
        }
        if (i !== depth) {
            result += '\n'
        }
    }
    return result
}
