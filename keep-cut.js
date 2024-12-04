// Keep Cut
console.log('---------- Keep Cut ----------')

function cutFirst(str) {
    return str.slice(2)
}

function cutLast(str) {
    return str.slice(0, -2)
}

function cutFirstLast(str) {
    return cutLast(cutFirst(str))
}

function keepFirst(str) {
    return str.slice(0, 2)
}

function keepLast(str) {
    return str.slice([str.length - 2])
}

function keepFirstLast(str) {
    return  keepFirst(str) + keepLast(str)
}

const sentence = "Ceci est un test"
console.log(cutFirst(sentence))
console.log(cutLast(sentence))
console.log(cutFirstLast(sentence))
console.log(keepFirst(sentence))
console.log(keepLast(sentence))
console.log(keepFirstLast(sentence))