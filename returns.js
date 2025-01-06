function id(arg) {
    return arg
}

function getLength(arg) {
    if (typeof arg === 'string' || Array.isArray(arg)) {
        return arg.length
    } else {
        throw new Error('Input must be a string or an array')
    }
}