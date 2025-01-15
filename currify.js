function currify(func) {
    return function curried (...args) {
        if (args.length >= func.length) {
            return curried (...args)
        } else {
            return function (...nextarg) {
                return curried(...args, ...nextarg)
            }
        }
    }
}

/* const mult2 = (el1, el2) => el1 * el2
console.log(mult2(2, 2)) // result expected 4

const mult2Curried = currify(mult2)

console.log(mult2Curried(2)(2)) // result expected 4
// (same result, with a function that has technically only one argument) */