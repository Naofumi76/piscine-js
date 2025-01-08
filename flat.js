function flat(arr, done = false) {
    let result = []
    for (let items of arr) {
        if (Array.isArray(items) && done === false) {
            done = true
            result = result.concat(flat(items, done))
        } else {
            result.push(items)
        }
    }
    return result
}

//console.log(flat([1, 2, [3, 4], 5, [6, [7, 8, [9, 10]]]]));
