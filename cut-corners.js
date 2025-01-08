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

function trunc(nb) {
    if (typeof nb!== 'number') {
        throw new Error('Input must be a number')
    }
    let fracInt = nb%1
    let nbInt = nb-fracInt
    return nbInt
}


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