function fusion(obj1, obj2) {
    var objFinal = {}
    var setKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])
    for (var key of setKeys) {
        var valueObj1 = obj1[key]
        var valueObj2 = obj2[key]

        if (valueObj1 !== undefined && valueObj2 !== undefined) {
            if (Array.isArray(valueObj1) && Array.isArray(valueObj2)) {
                objFinal[key] = valueObj1.concat(valueObj2)
            } else if (typeof valueObj1 === 'string' && typeof valueObj2 === 'string') {
                objFinal[key] = valueObj1 + ' ' + valueObj2
            } else if (typeof valueObj1 === 'number' && typeof valueObj2 === 'number') {
                objFinal[key] = valueObj1 + valueObj2
            } else {
                objFinal[key] = valueObj2
            }
        } else {
            objFinal[key] = valueObj1 || valueObj2
        }
    }
    return objFinal
}

console.log(fusion({ a: { b: 1 } }, { a: 1 }).a, 1); // -> { a: 11, x: [], b: { c: 'Salem alem' } }