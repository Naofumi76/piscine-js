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

console.log(flat([1, [2, [3], [4, [5]]]], 2))
