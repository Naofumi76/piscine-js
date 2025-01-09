function findExpression(number) {
    let result = 1
    let chaineresult = "1"

    return solver(number, result, chaineresult)
}

function solver(number, calc, chaine) {
    if (calc === number) {
        return chaine
    } else if (calc > number) {
        return undefined
    }

    if (solver(number, calc+4, chaine + " " + add4) !== undefined) {
        return solver(number, calc+4, chaine + " " + add4)
    }

    if (solver(number, calc*2, chaine + " " + mul2) !== undefined) {
        return solver(number, calc*2, chaine + " " + mul2)
    }

    return undefined
}


/*
const add4 = '+4'
const mul2 = '*2'

console.log(findExpression(14))
console.log(findExpression(2))
console.log(findExpression(12))
console.log(findExpression(3))
*/