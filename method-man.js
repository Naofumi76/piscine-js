// Method-man
console.log('---------- Method-Man ----------')

const str = "Hello, World! How are YOU?'"

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
    return whisperedStr
}

function capitalize (str) {
    if (typeof str!=='string') {
        throw new Error('Input must be a string')
    }
    let wordsArr = words(str)
    let capitalizedWordsArr = wordsArr.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    let capitalizedStr = sentence(capitalizedWordsArr)
    return capitalizedStr
}

console.log(words(str))
console.log(sentence(words(str)))
console.log(yell(str))
console.log(whisper(str))
console.log(capitalize(str))