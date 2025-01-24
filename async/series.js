async function series(funcArray) {
    var results = []
    for (var i = 0; i < funcArray.length; i++) {
        results.push(await funcArray[i]())
    }
    return results
}