function filterEntries(obj, func) {
    let result = {}
    for (let [key, value] of Object.entries(obj)) {
        if (func(key, value)) {
            result[key] = obj[key]
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
        result = func(result, value, key)
    }
    return result
}

function totalCalories(obj) {
    return reduceEntries(obj, (acc, [food, calories]) => acc + calories, 0)
}

function lowCarbs(obj) {
    return filterEntries(obj, ([food, calories]) => calories <= 50)
}

function cartTotal(obj) {
    return reduceEntries(obj, (acc, [food, calories]) => acc + calories, 0)
}