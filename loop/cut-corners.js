//round nearest integer
function round (n){
    let decimal = (n*10)-trunc(n)*10;
    if (decimal >= 5){return ceil(n)};
    if (decimal < 0){
        if (decimal > -5){
            return ceil(n)
        }
    };
    return floor(n);
};

//round up
function ceil (n){
    if ( n > 0 ){n += 1};
    return getDigit(n);
}

//round down
function floor (n){
    if ( n < 0 ){n -= 1};
    return getDigit(n);
};

function trunc (n){
    return getDigit(n);
};

function getDigit (n){
    
    let absA = Math.abs(n);
    let result = 0;

    while (absA >= 1){
        let b = 1; 
        while (b < (absA/10)){
            b *= 10;
        }
        absA -= b;
        result += b;
    };
    if ( n < 0 ){ result = -result;};
    return result;
}

/*const nums = [3.7, -3.7, 3.1, -3.1]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))*/