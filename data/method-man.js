function words (str) {
    if (typeof str!=='string') {
        throw new Error('Input must be a string')
    }
    let wordsArr = str.split(' ')
    return wordsArr
}

function sentence (stringArray) {
    if (!Array.isArray(stringArray)) {
        throw new Error('Input must be an array of strings')
    }
    let sentence = stringArray.join(' ')
    return sentence
}

function yell (str) {
    if (typeof str!=='string') {
        throw new Error('Input must be a string')
    }
    let yelledStr = str.toUpperCase()
    return yelledStr
}

function whisper (str) {
    if (typeof str!=='string') {
        throw new Error('Input must be a string')
    }
    let whisperedStr = str.toLowerCase()
    return '*'+whisperedStr+'*'
}

function capitalize(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}