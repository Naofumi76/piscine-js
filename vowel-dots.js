var vowels = /[aeiouAEIOU]/g
function vowelDots(str) {
    if (typeof str!=='string') {
        throw new Error('Input must be a string')
    }
    let result = str.replace(vowels, '$&.')
    return result
}

console.log(vowelDots('Hello WOrld'))