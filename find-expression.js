// Find Expression
console.log('---------- Find Expression ----------')

const add4 = '+4';
const mul2 = '*2';


function findExpression(number) {
    let result = 1
    let chaineresult = "1 "
    while (result != number) {
        if ((result * 2) <= number) {
            result *= 2;
            chaineresult += mul2 + ' ';
        }

        else if ((result + 4) <= number) {
            result += 4;
            chaineresult += add4 + ' ';
        }

        else {
            return undefined;
        }
    }
    return chaineresult.trim()
}

console.log(findExpression(8));  // Example: should return "1 *2 *2 *2"
console.log(findExpression(16)); // Example: should return "1 *2 *2 *2 *2"
console.log(findExpression(12)); // Example: should return "1 *2 *2 *2 +4"
console.log(findExpression(9));  // Example: should return undefined