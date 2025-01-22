function pronoun(str) {
    var pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we']
    var result = {}
    var wordsArray = str.toLowerCase().split(/\s+/).map(word => word.replace(/[^a-zA-Z0-9]/g, ''))
    for (var i = 0; i < wordsArray.length; i++) {
        if (pronouns.includes(wordsArray[i])) {
            if (i === wordsArray.length - 1) {
                continue
            }
            result[wordsArray[i]].word.push(wordsArray[i + 1])
            result[wordsArray[i]].count++
        }
    }
    return result;
}

/* const ex = 'Using Array Destructuring, you you can iterate through objects easily. i' */

console.log(pronoun('I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go'))