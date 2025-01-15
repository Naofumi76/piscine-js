function filter(arr, func) {
    if (!Array.isArray(arr) || typeof func !== 'function') {
        return
    }
    var result = []
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result
}

function reject(arr, func) {
    if (!Array.isArray(arr) || typeof func !== 'function') {
        return
    }
    var result = []
    for (var i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result
}

function partition(arr, func) {
    if (!Array.isArray(arr) || typeof func !== 'function') {
        return
    }
    var filtered = []
    var rejected=  []
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            filtered.push(arr[i]);
        } else if (!func(arr[i], i, arr)) {
            rejected.push(arr[i]);
        }
    }
    return [filtered, rejected]
}

/* const arr = [1, 2, 3, 4, 5];
const result = partition(arr, (num) => num > 3);
console.log(result); // Output: [[4, 5], [1, 2, 3]] */


/* const arr = [1, 2, 3, 4, 5];
const result = reject(arr, (num) => num > 3);
console.log(result); // Output: [1, 2, 3] */

/* const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = filter(words, (word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"] */