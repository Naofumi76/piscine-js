// Triangle
console.log('---------- Triangle ----------')

function triangle(str, depth) {
    if (typeof str!=='string' || str.trim() === '') {
        throw new Error('Input must be a non-empty string')
    }
    if (typeof depth!== 'number' || depth <= 0 || depth % 1!== 0) {
        throw new Error('Depth must be a positive integer')
    }

    let result = ''
    for (let i = 1; i <= depth; i++) {
        for (let j = 0; j < i; j++) {
            result += str
        }
        result += '\n'
    }
    return result.trim()
}

console.log(triangle('*', 5))