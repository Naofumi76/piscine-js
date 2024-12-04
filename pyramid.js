// Pyramid
console.log('---------- Pyramid ----------')

function pyramid(str, depth) {
    if (typeof str!=='string' || str.trim() === '') {
        throw new Error('Input must be a non-empty string')
    }
    if (typeof depth!== 'number' || depth <= 0 || depth % 1!== 0) {
        throw new Error('Depth must be a positive integer')
    }

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

console.log(pyramid('*', 5))