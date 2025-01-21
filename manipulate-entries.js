function filterEntries(obj, func) {
    return Object.fromEntries(Object.entries(obj).filter(([key, value]) => func([key, value])
    ))
}

function mapEntries(obj, func) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => func([key, value])))
}

function reduceEntries(obj, func, acc) {
    let result = acc
    for (let [key, value] of Object.entries(obj)) {
        result = func(result, [key, value])
    }
    return result
}

function totalCalories(obj) {
    return Number(reduceEntries(obj, (acc, key) => {
        var result = (nutritionDB[key[0]]["calories"] / 100) * key[1]
        return acc + result
    },0).toFixed(1))
}

function lowCarbs(obj) {
    return filterEntries(obj, ([key, value]) => {
        return (nutritionDB[key].carbs / 100 * value) < 50
    })
}

function cartTotal(obj) {
    var result = {}
    for (var ingredient in obj) {
        result[ingredient] = {}
        for (var nutriKey in nutritionDB[ingredient]) {
            // multiply by 1000 the calcs, and divide then by 1000 after calculating allow for 3 digits after comma of accuracy
            result[ingredient][nutriKey] = Math.round((obj[ingredient] / 100) * nutritionDB[ingredient][nutriKey] * 1000) / 1000
        }
    }
    return result
}
/* const nutritionDB = {
    tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
   vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
    oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
    onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
    garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
    paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
    sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
    orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
  }
  

const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

console.log('Total calories:')
console.log(totalCalories(groceriesCart))
console.log('Items with low carbs:')
console.log(lowCarbs(groceriesCart))
console.log('Total cart nutritional facts:')
console.log(cartTotal(groceriesCart))
console.log(mapEntries(groceriesCart, ([k, v]) => [
    v > 250 ? `✔️${k}` : `❌${k}`,
    v - 250,
  ]),
) */