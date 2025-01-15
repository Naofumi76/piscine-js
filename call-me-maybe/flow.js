function flow(funcs) {
    return function(...values) {
        let result = values
        for (let func of funcs) {
            result = [func(...result)]
        }
        return result[0]
    }
}

/* const square = (nbr) => nbr * nbr
const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2
const flowedFunctions = flow([add2Numbers, square])
console.log(flowedFunctions(2, 3))
 */