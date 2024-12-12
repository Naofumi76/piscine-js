// Currify
console.log('---------- Currify ----------')

function currify(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args)
        }
        return (...moreArgs) => curried(...args,...moreArgs)
    }
}

const add3 = (a) => a + 3;
const add3Curried = currify(add3);

console.log(add3Curried(4)); // Output: 7
console.log(currify(add3)(4)) // Output 7