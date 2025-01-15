function fold(arr, func, accumulator) {
    if (!Array.isArray(arr) || typeof func !== 'function') {
        return
    }
    
    if (accumulator === undefined) {
        if (arr.length > 0 && typeof arr[0] === 'string') {
            accumulator = ''
        } else {
            accumulator = 0
        }
    }

    for (let i = 0; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i]);
    }

    return accumulator;
}

function foldRight(arr, func, accumulator) {
    if (!Array.isArray(arr) || typeof func !== 'function') {
        return
    }
    
    if (accumulator === undefined) {
        if (arr.length > 0 && typeof arr[0] === 'string') {
            accumulator = ''
        } else {
            accumulator = 0
        }
    }

    for (let i = arr.length-1; i >= 0; i--) {
        accumulator = func(accumulator, arr[i]);
    }

    return accumulator;
}

function reduce(arr, func, accumulator) {
    return fold(arr, func, accumulator)
}

function reduceRight(arr, func, accumulator) {
    return foldRight(arr, func, accumulator)
}

/* const adder = (a, b) => a + b
console.log(fold([1, 2, 3], adder, 2)) // returns 8 (2 + 1 + 2 + 3)
console.log(foldRight([1, 2, 3], adder, 2)) // returns 8 (2 + 3 + 2 + 1)
console.log(reduce([1, 2, 3], adder)) // returns 6 (1 + 2 + 3)
console.log(reduceRight([1, 2, 3], adder)) // returns 6 (3 + 2 + 1) */