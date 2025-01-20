function filterEntries(obj, func) {
    let result = {}
    for (let [key, value] of Object.entries(obj)) {
        if (func(key, value)) {
            result[key] = value
        }
    }
    return result
}

function mapEntries(obj, func) {
    let result = {}
    for (let [key, value] of Object.entries(obj)) {
        var [newKey, newValue] = func(key, value)
        result[newKey] = newValue
    }
    return result
}

function reduceEntries(obj, func, acc) {
    let result = acc
    for (let [key, value] of Object.entries(obj)) {
        result = func(result, key, value)
    }
    return result
}

function totalCalories(obj) {
    return reduceEntries(obj, (acc, key, value) => acc + value, 0)
}

function lowCarbs(obj) {
    return filterEntries(obj, (key, value) => value <= 50)
}

function cartTotal(obj) {
    return reduceEntries(obj, (acc, key, value) => {
        acc[key] = (acc[key] || 0) + value
        return acc
    }, {})
}

// Test Data
const groceriesCart1 = {
    onion: 230,
    garlic: 220,
    chocolate: 500,
    sugar: 700,
};

console.log(filterEntries(groceriesCart1, (key, value) => value < 300));
// Expected output: { onion: 230, garlic: 220 }

console.log(totalCalories(groceriesCart1));
// Expected output: 1650 (230 + 220 + 500 + 700)

console.log(lowCarbs(groceriesCart1));
// Expected output: { onion: 230, garlic: 220 }

console.log(cartTotal(groceriesCart1));
// Expected output: { onion: 230, garlic: 220, chocolate: 500, sugar: 700 }
