// Series
console.log('---------- Series ----------')


async function series(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array')
    }
    result = []
    for (let item of arr) {
        result.push(await item())
    }
    return result
}