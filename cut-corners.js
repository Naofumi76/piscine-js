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

function multiply(x1, x2) {
    let oneNegative = (x1 < 0) !== (x2 < 0);
    x1 = Math.abs(x1);
    x2 = Math.abs(x2);
    let result = 0;
    for (let i = 0; i < x2; i++) {
        result += x1;
    }
    return oneNegative ? -result : result;
}

function divide(x1, x2) {
    let negativeResult = (x1 < 0) !== (x2 < 0);
    x1 = Math.abs(x1);
    x2 = Math.abs(x2);
    let quotient = 0;
    while (x1 >= x2) {
        x1 -= x2;
        quotient++;
    }
    return negativeResult ? -quotient : quotient;
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

function modulo(x1, y) {
    let remainder = x1 - multiply(divide(x1, y), y);
    if (x1 < 0 && remainder > 0) {
        remainder -= Math.abs(y);
    } else if (x1 > 0 && remainder < 0) {
        remainder += Math.abs(y);
    }
    return remainder;
}
const nums = [3.7, -3.7, 3.1, -3.1]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))
