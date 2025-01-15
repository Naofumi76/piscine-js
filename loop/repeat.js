function repeat(str, nb) {
    if (typeof str!=='string' || typeof nb !=='number' || nb < 0) {
        throw new Error('Input must be a string and a positive number')
    }
    let result = ""
    for (let i = 0; i < nb; i++) {
        result += str
    }
    return result
}