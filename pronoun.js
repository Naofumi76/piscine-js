function pronoun(str) {
    var pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we']
    var result = {}
    var wordsArray = str.toLowerCase().split(/\s+/).map(word => word.replace(/[^a-zA-Z0-9]/g, ''))
    for (var i = 0; i < wordsArray.length; i++) {
        if (pronouns.includes(wordsArray[i])) {
            if (!result[wordsArray[i]]) {
                result[wordsArray[i]] = { word : [], count : 0}
            }
            if (i === wordsArray.length - 1) {
                continue
            }
            if (!pronouns.includes(wordsArray[i+1])) {
                result[wordsArray[i]].word.push(wordsArray[i + 1])
            }
            result[wordsArray[i]].count++
        }
    }
    return result;
}

/* const ex = 'Using Array Destructuring, you you can iterate through objects easily. i' */

/* console.log(pronoun(`it i it she is gone`), {
    it: { word: [], count: 2 },
    i: { word: [], count: 1 },
    she: { word: ['is'], count: 1 },
  }) */