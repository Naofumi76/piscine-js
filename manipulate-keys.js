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

function reduceKeys(obj, func, acc = '') {
    let result = acc
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        result = func(result, key);
    }
    return result
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// output: carbohydrates, protein, fat
