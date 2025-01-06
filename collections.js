function arrToSet (arr) {
    if (!Array.isArray (arr)) {
        throw new TypeError ('Not an array')
    }
    return new Set(arr)
}
function arrToStr(arr) {
    if (!Array.isArray (arr)) {
        throw new TypeError ('Not an array')
    }
    return arr.join('')
}
function setToArr(set) {
    if (!(set instanceof Set)) {
        throw new TypeError ('Not a set')
    }
    return [...set]
}
function setToStr(set) {
    if (!(set instanceof Set)) {
        throw new TypeError ('Not a set')
    }
    return [...set].join('')
}
function strToArr(str) {
    return str.split('')
}
function strToSet(str) {
    if (typeof str!=='string') {
        throw new TypeError ('Not a string')
    }
    return new Set(str.split(''))
}
function mapToObj(map) {
    if (!(map instanceof Map)){
        throw new TypeError ('Not a Map')
    }
    let obj = {}
    for (let [key, value] of map) {
        obj[String(key)] = value
    }
    return obj
}
function objToArr(obj) {
    if (typeof obj!== 'object') {
        throw new TypeError ('Not an object')
    }
    return Object.values(obj)
}
function objToMap(obj) {
    if (typeof obj!=='object') {
        throw new TypeError ('Not an object')
    }
    let map = new Map()
    for (let [key, value] of Object.entries(obj)) {
        map.set(key, value)
    }
    return map
}
function arrToObj(arr) {
    if (!Array.isArray (arr)) {
        throw new TypeError ('Not an array')
    }
    let obj = {}
    arr.forEach((value, index) => {
        obj[index] = value
    })
    return obj
}
function strToObj(str) {
    if (typeof str!=='string') {
        throw new TypeError ('Not a string')
    }
    let obj = {}
    str.split('').forEach((char, index)=> {
        obj[index] = char
    })
    return obj
}

function superTypeOf(mapOrset) {
    if (mapOrset === null) {
        return 'null';  // Special case for null
    }
    if (mapOrset === undefined) {
        return 'undefined';  // Special case for undefined
    }
    return mapOrset.constructor.name
}