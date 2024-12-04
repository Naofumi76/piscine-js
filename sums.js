// Sums
console.log('---------- Sums ----------')


/* 
To remember : 

'...' on a [[1,2], [3]] return '[1,2],[3]' as result.

Reccursive part :

Adds a number (i) (starting from `start`) to the actual partition.
Calls itself recursively with the remaining value (nb - i) and updates the partition (with the new value).
Does it until it reaches the partition that only contains the number given in argument
*/

function sums(nb, partition = [], start = 1) {
    if (typeof nb !== 'number') {
        throw new Error('Input must be a number')
    }
    if  (nb ===0) {
        return [partition]
    }
    let result = []
    for (let i = start; i <= nb; i++) {
        let newPart = [...partition, i]
        result.push(...sums(nb-i, newPart, i))
    }
    return result
}


console.log(sums(4))