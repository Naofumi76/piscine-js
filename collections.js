// Collections
console.log('---------- Collections ----------')

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

const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

console.log(arrToSet(arr)) // -> Set { 1, 2, 3 }
console.log(arrToStr(arr)) // -> '1213'
console.log(setToArr(set)) // -> [1, 2, 3]
console.log(setToStr(set)) // -> '123'
console.log(strToArr(str)) // -> ['h', 'e', 'l', 'l', 'o']
console.log(strToSet(str)) // -> Set { 'h', 'e', 'l', 'o' }
console.log(mapToObj(map)) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
console.log(objToArr(obj)) // -> [45, 75, 24]
console.log(objToMap(obj)) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
console.log(arrToObj(arr)) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
console.log(strToObj(str)) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }


console.log(superTypeOf(map)) //         -> 'Map'
console.log(superTypeOf(set)) //         -> 'Set'
console.log(superTypeOf(obj)) //         -> 'Object'
console.log(superTypeOf(str)) //         -> 'String'
console.log(superTypeOf(666)) //         -> 'Number'
console.log(superTypeOf(NaN)) //         -> 'Number'
console.log(superTypeOf(arr)) //         -> 'Array'
console.log(superTypeOf(null)) //        -> 'null'
console.log(superTypeOf(undefined)) //   -> 'undefined'
console.log(superTypeOf(superTypeOf)) // -> 'Function'