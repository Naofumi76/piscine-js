// Returns
console.log('---------- Returns ----------')


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

console.log(id("TEST de la fonction id"))
console.log(getLength([1,2,3,5]))
//console.log(getLength(123))
