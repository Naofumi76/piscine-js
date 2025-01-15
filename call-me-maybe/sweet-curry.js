function mult2(x) {
    return function (y) {
        return x * y
    }
}


function add3(x) {
    return function (y) {
        return function (z) {
            return x + y + z
        }
    }
}


function sub4(x) {
    return function (y) {
        return function (z) {
            return function (w) {
                return x - y - z - w
            }
        }
    }
}


console.log(mult2(4)(2))
console.log(add3(5)(2)(3))
console.log(sub4(10)(2)(3)(4))
