function filterKeys(obj, func) {
    let result = {}
    for (let key in obj) {
        if (func(key)) {
            result[key] = obj[key]
        }
    }
    return result
}

function mapKeys(obj, func) {
    let result = {}
    for (let key in obj) {
        result[func(key)] = obj[key]
    }
    return result
}

function reduceKeys(obj, func, start) {
    let keys = Object.keys(obj);
    if (start === undefined) {
        return keys.reduce((acc, key, index) => {
            return index === 0 ? key : func(acc, key) 
        })
    } else {
        return keys.reduce((acc, key) => {
            return func(acc, key);
        }, start)
    }
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// output: carbohydrates, protein, fat
