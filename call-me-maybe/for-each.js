function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

const testArr = [1, 2, 3]
var result = []
forEach(testArr, value => result.push(value))
console.log(result)

const ctx = {
    arr: [1, 2, 3, 4, 5, 0.31087952857109147, 7, 10, -10, 20, -95]
}
result = []
const returned = forEach(ctx.arr, value => result.push(value))
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