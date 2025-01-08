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
    if (str.length < 2 || (str.length<3 && keepFirst(str) == keepLast(str))) {
        return str
    }
    const firstPart = keepFirst(str);
    const lastPart = keepLast(str);
    if (str.length === 3 && firstPart[1] === lastPart[0]) {
        return str;
    }
    return firstPart + lastPart;
}
console.log(keepFirstLast('af'))
console.log(keepFirstLast('yoafdyo'))