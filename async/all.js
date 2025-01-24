async function all(promises = {}) {
    var results = {}
    for (let key in promises) {
        results[key] = await promises[key]
    }
    return results
}