function round(nb) {
    let nbInt = nb < 0 ? (nb - 1) | 0 : nb | 0;
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
    let nbInt = nb < 0 ? (nb - 1) | 0 : nb | 0;
    let fracInt = nb - nbInt 
    if (fracInt < 0) {
        return nbInt-1
    }
    return nbInt
}

function trunc(nb) {
    let nbInt = nb < 0 ? (nb - 1) | 0 : nb | 0;
    return nbInt
}


function ceil(nb) {
    let nbInt = nb < 0 ? (nb - 1) | 0 : nb | 0;
    let fracInt = nb - nbInt 
    if (fracInt > 0) {
        return nbInt+1
    } else if (fracInt < 0) {
        return nbInt
    }
    return nbInt
}