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
    const positions = []
    for (let i = 0; i < puzzleMap.length; i++) {
        for (let j = 0; j < puzzleMap[i].length; j++) {
            if (puzzleMap[i][j] === '.' || (puzzleMap[i][j] > '1' && puzzleMap[i][j] <= '9')) {
                positions.push({ x: j, y: i })
            }
        }
    }
    return positions
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
