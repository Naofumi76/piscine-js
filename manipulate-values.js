function filterValues(obj, func) {
    let result = {}
    for (let key in obj) {
        if (func(obj[key], key)) {
            result[key] = obj[key]
        }
    }
    return result
}

function mapValues(obj, func) {
    let result = {}
    for (let key in obj) {
        result[key] = func(obj[key], key)
    }
    return result
}

function reduceValues(obj, func, acc=0) {
    let result = acc
    for (let key in obj) {
        result = func(result, obj[key], key)
    }
    return result
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// output: { carbohydrates: 12, fat: 5 }

console.log(mapValues(nutrients, (v) => v+1))
// output: { carbohydrates: 13, protein: 21, fat: 6 }

console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// output: 37