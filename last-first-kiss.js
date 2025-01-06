function first(arg) {
    if (typeof arg=== 'string' || Array.isArray(arg)) {
        return arg[0]
    } else {
        throw new Error('Input must be a string or an array')
    }
}

function last(arg) {
    if (typeof arg=== 'string' || Array.isArray(arg)) {
        return arg[arg.length-1]
    } else {
        throw new Error('Input must be a string or an array')
    }
}

function kiss(arg) {
    if (typeof arg=== 'string' || Array.isArray(arg)) {
        return [arg[0], arg[arg.length-1]]
    } else {
        throw new Error('Input must be a string or an array')
    }
}
