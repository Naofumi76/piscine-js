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
    if (keepFirst(str) === keepLast(str)) {
        return keepFirst(str)
    }
    return keepFirst(str) + keepLast(str)
}