const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['casa', 'alan', 'ciao', 'anta']

crosswordSolver(puzzle, words)

function crosswordSolver(puzzle, words) {
    if (!isValidPuzzle(puzzle, words)) {
        console.log('Error')
        return
    }
    const puzzleMap = puzzle.split('\n').map(rows => rows.split(''))
    const positions = getWordsPositions(puzzleMap)
    console.log(puzzle)
    console.log(positions)
}

function getWordsPositions(puzzleMap) {
    const positions = [];
    console.log(puzzleMap)
    const rows = puzzleMap.length;
    const cols = puzzleMap[0].length;
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            cell = puzzleMap[y][x]
            if ((cell >= '1' && cell <= '2')) {
                var {valverif, wordLength} = verifHorizontal(puzzleMap, x, y)
                if (valverif) {
                    positions.push({ x: x, y: y, direction: 'horizontal' , wordLength: wordLength})
                }
                var {valverif, wordLength} = verifVertical(puzzleMap, x, y) 
                if (valverif){
                    positions.push({ x: x, y: y, direction:'vertical', wordLength: wordLength })
                }
            }
        }
    }
    return positions
}

function verifVertical(puzzleMap, x, y) {
    var row = puzzleMap.map(rows => rows[x])
    var wordLength = 1
    if (y+1 > row.length) {
        return false
    }
    if (y-1 > 0 && row[y-1] >= '0' && row[y-1] <= '2') {
        return false
    }
    for (let i = y+1; i < row.length; i++) {
        if (row[i] >= '0' && row[i] <= '2') {
            wordLength++
            continue
        } else {
            return false
        }
    }
    if (wordLength <= 1) {
        return false
    }
    return {valverif : true, wordLength: wordLength}
}

function verifHorizontal(puzzleMap, x, y) {
    col = puzzleMap[y]
    var wordLength = 1
    if (x+1 > col.length) {
        return false
    }
    for (let i = x+1; i < col.length; i++) {
        if (col[i] >= '0' && col[i] <= '2') {
            wordLength++
            continue
        } else {
            return false
        }
    }
    if (wordLength <= 1) {
        return false
    }
    return {valverif : true, wordLength : wordLength}
}

function isValidPuzzle(puzzle, words) {
    return isTypeValid(puzzle, words) && areWordsValids(words) && isPuzzleCorrect(puzzle) && noDouble(words) && correctNumberOfWords(puzzle, words)
}

function isTypeValid(puzzle, words) {
    if (!Array.isArray(words) || typeof puzzle !== 'string' || words.some(word => typeof word !== 'string')) {
        console.log('Type Error')
        return false
    }
    return true
}


function areWordsValids(words) {
    if (!words.every(word => /^[a-zA-Z]+$/.test(word))) {
        console.log('Invalid characters in words')
        return false
    }
    return true
}

function noDouble(words) {
    const set = new Set(words)
    if (set.size !== words.length) {
        console.log('Duplicate words')
        return false
    }
    return true
}

function isPuzzleCorrect(puzzle) {
    for (const item of puzzle) {
        if (item !== '.' && item !== '\n' && (item < '0' || item > '9')) {
            console.log('Invalid characters in puzzle')
            return false
        }
    }
    if (!isPuzzleSizeCorrect(puzzle)) {
        console.log('Invalid puzzle size')
        return false
    }
    return true
}

function isPuzzleSizeCorrect(puzzle) {
    const puzzleMap = puzzle.split('\n');
    if (puzzleMap.length < 2) {
        console.log('Puzzle must have at least two rows');
        return false;
    }
    for (const row of puzzleMap) {
        if (row.length!== puzzleMap[0].length) {
            return false
        }
    }
    return true
}

function correctNumberOfWords(puzzle, words) {
    const puzzleMap = puzzle.split('\n');
    let totalSlots = 0;
    for (const row of puzzleMap) {
        const matches = row.match(/[0-9]/g);
        if (matches) {
            // Apply 'totalSlots = sum + num' to every int in the row to obtain the number of words in the row.
            totalSlots += matches.map(Number).reduce((sum, num) => sum + num, 0);
        }
    }
    if (totalSlots !== words.length) {
        console.log('Invalid number of words');
        return false;
    }
    return true;
}
