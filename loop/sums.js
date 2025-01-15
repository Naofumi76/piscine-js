function sums(a) {
    if (a === 0) {
        return []
    }
    function solve(nb, partition = [], start = 1){
        if (typeof nb !== 'number') {
            throw new Error('Input must be a number')
        }
        if (nb ===0) {
            return [partition]
        }
        let result = []
        for (let i = start; i <= nb; i++) {
            let newPart = [...partition, i]
            if(i !== a)result.push(...solve(nb-i, newPart, i));
        }
        return result
    }

    return solve(a);
}

console.log(sums(0))
console.log(sums(4))
console.log(sums(6))
console.log(sums(8))
