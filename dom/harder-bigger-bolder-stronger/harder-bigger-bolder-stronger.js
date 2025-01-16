export function generateLetters() {
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var choosenLetters = []
    var fontSize = 11
    for (let i = 0; i < 120; i++) {
        choosenLetters.push(letters[Math.floor(Math.random() * letters.length)]);
    }
    for (var i = 0; i < choosenLetters.length; i++ ){
        var letterDiv = document.createElement('div')
        letterDiv.textContent = choosenLetters[i]
        letterDiv.style.fontSize = String(fontSize) + 'px'
        if (i < 40) {
            letterDiv.style.fontWeight = '300'
        } else if (i < 80) {
            letterDiv.style.fontWeight = '400'
        } else {
            letterDiv.style.fontWeight = '600'
        }
        fontSize++
        document.body.appendChild(letterDiv)
    }
}