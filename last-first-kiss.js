// Last First Kiss
console.log('---------- Last First Kiss ----------')

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

console.log(first([1,2,3,4,5]))
console.log(last([1,2,3,4,5]))
console.log(kiss([1,2,3,4,5]))
