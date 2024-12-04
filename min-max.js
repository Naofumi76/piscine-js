// Min-max
console.log('---------- Min-max ----------')

function max(x1, x2) {
    
    if (x1 > x2) {
        return x1
    }
    return x2
}

function min(x1, x2) {
    if (x1 < x2) {
        return x1
    }
    return x2
}

console.log(max(5, 10))
console.log(min(5, 10))