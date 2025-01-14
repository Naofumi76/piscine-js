function forEach(callback, arr) {
    if (typeof callback !== 'function' || !Array.isArray(arr)) {
        return
    }
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
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