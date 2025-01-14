function forEach(callback, arr) {
    if (!Array.isArray(arr) || typeof callback !== 'function') {
        throw new Error('The function needs a function and an array')
    }
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i], i, arr)
        if (result !== undefined) {
            arr[i] = result
        }
    }
}

const arr = [1, 2, 3, 4, 5]
function show(number) {
    console.log(number)
}
function add1(number) {
    return number + 1
}
function remove1(number) {
    return number - 1
}
forEach(show, arr)
forEach(add1, arr)
console.log(arr)
forEach(show, arr)
forEach(remove1, arr)
console.log(arr)