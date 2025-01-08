function round(nb) {
    if (typeof nb !== 'number') {
        throw new Error('Input must be a number')
    }
    let nbInt = nb < 0 ? -parseInt(-nb) : parseInt(nb)
    let fracInt = nb - nbInt 
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
    let nbInt = nb < 0 ? -parseInt(-nb) : parseInt(nb)
    let fracInt = nb - nbInt 
    if (fracInt < 0) {
        return nbInt-1
    }
    return nbInt
}

function trunc(nb) {
    if (typeof nb!== 'number') {
        throw new Error('Input must be a number')
    }
    let nbInt = nb < 0 ? -parseInt(-nb) : parseInt(nb)
    return nbInt
}


function ceil(nb) {
    if (typeof nb!== 'number') {
        throw new Error('Input must be a number')
    }
    let nbInt = nb < 0 ? -parseInt(-nb) : parseInt(nb)
    let fracInt = nb - nbInt 
    if (fracInt > 0) {
        return nbInt+1
    } else if (fracInt < 0) {
        return nbInt
    }
    return nbInt
}