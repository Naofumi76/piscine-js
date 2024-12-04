// Chunky
console.log('---------- Chunky ----------')

function chunk (arr, size) {
    if (!Array.isArray(arr)) {
        throw new Error('Arr must be an array')
    }
    if (typeof size !== 'number') {
        throw new Error('Size must be a number')
    }
    let result = []
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }
    return result
}

console.log(chunk([1,2,3,4,5,6,7,8,9,10,11,12],3))