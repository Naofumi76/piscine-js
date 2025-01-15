function every(arr, func) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array')
    }
    if (typeof func!== 'function') {
        throw new Error('Function must be a function')
    }

    for (let elem in arr) {
        if (!func(arr[elem])) {
            return false
        }
    }
    return true
}

function some(arr, func) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array')
    }
    if (typeof func!== 'function') {
        throw new Error('Function must be a function')
    }

    for (let elem in arr) {
        if (func(arr[elem])) {
            return true
        }
    }
    return false
}

function none(arr, func) {
    return!some(arr, func)
}


function isLessThanTen(nb) {
    if (typeof nb !== 'number') {
        throw new Error('Input must be a number')
    }
    return nb < 10
}


const arrLessTen = [1,2,3,4,5,6,7,8,9]
const arrMoreTen = [11,12,13,14,15,16]


console.log(every(arrLessTen, isLessThanTen)) // true
console.log(every(arrMoreTen, isLessThanTen)) // false
console.log(some(arrLessTen, isLessThanTen)) // true
console.log(some(arrMoreTen, isLessThanTen)) // false
console.log(none(arrLessTen, isLessThanTen)) // false
console.log(none(arrMoreTen, isLessThanTen)) // true