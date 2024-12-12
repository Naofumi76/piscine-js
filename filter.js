// Filter
console.log('---------- Filter ----------')

function filter(arr, condition) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array')
    }
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
}

function reject(arr, condition) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array')
    }
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (!condition(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
}

function partition(arr, condition) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array')
    }
    let works = []
    let notworks = []
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i], i, arr)) {
            works.push(arr[i])
        } else {
            notworks.push(arr[i])
        }
    }
    return [works, notworks]
}

console.log(filter([1, 2, 3, 4, 5], num => num % 2 === 0))
console.log(reject([1, 2, 3, 4, 5], num => num % 2 === 0))
console.log(partition([1, 2, 3, 4, 5], num => num % 2 === 0))