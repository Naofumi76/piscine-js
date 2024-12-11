// Vowel Dots
console.log('---------- Vowel Dots ----------')


var vowels = /[aeiouAEIOU]/g
function vowelDots(str) {
    if (typeof str!=='string') {
        throw new Error('Input must be a string')
    }
    let result = str.replace(vowels, '$&.')
    return result
}

console.log(vowelDots('Hello World')) // -> He.llo. Wo.rld
console.log(vowelDots("Salut les amis")) // -> Sa.lu.t le.s a.mi.s