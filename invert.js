function invert(obj) {
    if (typeof obj!== 'object') {
        throw new TypeError('Not an object')
    }
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]))
}