// Cut Corners
console.log('---------- Cut Corners ----------')

function round(nb) {
    if (typeof nb !== 'number') {
        throw new Error('Input must be a number')
    }
    let fracInt = nb%1
    let nbInt = nb-fracInt
    if (fracInt >= 0.5) {
        return nbInt+1
    } else if (fracInt <= -0.5) {
        return nbInt-1
    } else {
        return nbInt
    }
}
console.log('ROUND :')
console.log(round(1.3))
console.log(round(1.7))
console.log(round(-1.3))
console.log(round(-1.7))

function floor(nb) {
    if (typeof nb !== 'number') {
        throw new Error('Input must be a number')
    }
    let fracInt = nb%1
    let nbInt = nb-fracInt
    if (fracInt < 0) {
        return nbInt-1
    }
    return nbInt
}
console.log('FLOOR :')
console.log(floor(1))
console.log(floor(1.3))
console.log(floor(1.7))
console.log(floor(-1.3))
console.log(floor(-1.7))

function trunc(nb) {
    if (typeof nb!== 'number') {
        throw new Error('Input must be a number')
    }
    let fracInt = nb%1
    let nbInt = nb-fracInt
    return nbInt
}

console.log('TRUNC :')
console.log(trunc(1))
console.log(trunc(1.3))
console.log(trunc(1.7))
console.log(trunc(-1.3))
console.log(trunc(-1.7))

function ceil(nb) {
    if (typeof nb!== 'number') {
        throw new Error('Input must be a number')
    }
    let fracInt = nb%1
    let nbInt = nb-fracInt
    if (fracInt > 0) {
        return nbInt+1
    } else if (fracInt < 0) {
        return nbInt
    }
    return nbInt
}

console.log('CEIL :')
console.log(ceil(1))
console.log(ceil(1.3))
console.log(ceil(1.7))
console.log(ceil(-1.3))
console.log(ceil(-1.7))