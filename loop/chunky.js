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
