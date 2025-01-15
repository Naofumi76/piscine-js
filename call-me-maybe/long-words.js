function longWords(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array')
    }
    return arr.every(elem => typeof elem === 'string' && elem.length >= 5);
}

function oneLongWord(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array')
    }
    return arr.some(elem => typeof elem ==='string' && elem.length >= 10);
}

function noLongWords(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array')
    }
    return arr.every(elem => typeof elem === 'string' && elem.length < 5);
}

console.log(longWords(['Hello', 'World', 'this', 'is', 'a', 'test']))
console.log(longWords(['Onlyyy', 'longgggg', 'worddddd']))
console.log(oneLongWord((['Hello', 'World', 'this', 'is', 'a', 'LONG WORD!!!!'])))
console.log(noLongWords(['Hello', 'World', 'this', 'is', 'a', 'test']))
console.log(noLongWords(['No', 'long', 'word']))