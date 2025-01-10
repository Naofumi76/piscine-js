function vowelDots(str) {
    var vowels = /[aeiouAEIOU]/g
    if (typeof str!=='string') {
        throw new Error('Input must be a string')
    }
    let result = str.replace(vowels, '$&.')
    return result
}

console.log(vowelDots('hello world'))