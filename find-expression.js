function findExpression(number) {
    let result = 1;
    let chaineresult = "1";
    while (result !== number) {
        if ((result * 2) <= number) {
            result *= 2;
            chaineresult += ' ' + mul2;
        }
        else if ((result + 4) <= number) {
            result += 4;
            chaineresult += ' ' + add4;
        }
        else {
            return undefined;
        }
    }

    return chaineresult.trim();
}
