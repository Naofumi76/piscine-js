function forEach(callback, arr) {
    if (typeof callback !== 'function' || !Array.isArray(arr)) {
        return
    }
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

const testArr = [1, 2, 3]
var result = []
forEach(value => result.push(value), testArr)
console.log(result)

const ctx = {
    arr: [1, 2, 3, 4, 5, 0.31087952857109147, 7, 10, -10, 20, -95]
}
result = []
const returned = forEach(value => result.push(value), ctx.arr)
console.log(returned)
console.log(result)



/* const arr = [1, 2, 3, 4, 5]
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
console.log(arr) */