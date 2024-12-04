// Index Of
console.log('---------- Index Of ----------')

const arr = [1, 2, 3, 4, 3, 6, 8, 5]

function indexOf(arr, target, start=0) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

function lastIndexOf(arr, target, start=arr.length-1) {
    
    for (let i =start; i>= 0; i--) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

function includes(arr, target) {
    if (indexOf(arr, target) !== -1) {
        return true
    } else {
        return false
    }
}
console.log('IndexOf with 3:')
console.log(indexOf(arr, 3))
console.log(lastIndexOf(arr, 3))
console.log(includes(arr, 3))

console.log('\nIndexOf with 7:')
console.log(indexOf(arr, 7))
console.log(lastIndexOf(arr, 7))
console.log(includes(arr, 7))

console.log('\nIndex with 3 and a start at 5:')
console.log(indexOf(arr, 3, 5))
console.log(lastIndexOf(arr, 3, 5))
console.log(includes(arr, 3))