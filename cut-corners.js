function round(nb) {
    let fracInt = getCommaValue(nb)
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
    let fracInt = getCommaValue(nb)
    let nbInt = nb-fracInt
    if (fracInt < 0) {
        return nbInt-1
    }
    return nbInt
}

function trunc(nb) {
    let fracInt = getCommaValue(nb)
    let nbInt = nb-fracInt
    return nbInt
}


function ceil(nb) {
    let fracInt = getCommaValue(nb)
    let nbInt = nb-fracInt
    if (fracInt > 0) {
        return nbInt+1
    } else if (fracInt < 0) {
        return nbInt
    }
    return nbInt
}


function getCommaValue(nb) {
    if (nb < 0) {
        while (nb <= -1) {
            nb += 1
        }  
    } else {
        while (nb >= 1) {
            nb -= 1
        }
    }
    return nb

}