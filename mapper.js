function map(arr, func) {
    if (!Array.isArray(arr) || typeof func !== 'function') {
        return
    }
    for (let i = 0; i < arr.length; i++) {
        const result = func(arr[i], i, arr)
        arr[i] = result
    }
    return arr
}

function flatMap(arr, func) {
    return flat(map(arr, func), 1)
}

function flat(arr, depth=0) {
    let result = []
    for (let items of arr) {
        if (Array.isArray(items) && depth >= 0) {
            depth--
            result = result.concat(flat(items,depth))
        } else {
            result.push(items)
        }
    }
    return result
}

/* const array1 = [1, 4, 9, 16];

// Pass a function to map
function mult2(arg) {
    return arg*2
}
const map1 = flatMap(array1, mult2)

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const arr1 = [1, 2, 1];
const result = flatMap(arr1, (num) => (num === 2 ? [2, 2] : 1))

console.log(result);
// Expected output: Array [1, 2, 2, 1] */
