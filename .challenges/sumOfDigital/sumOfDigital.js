const sumOfDigital = (arr) => {
    return arr.reduce((current, prev) => current + prev, 0);
}

const sumOfDigital1 = (arr) => {
    let total = 0; 

    if(!Array.isArray(arr)) return 0;

    for(let n of arr){
        total += n;
    }
    return total;
}

module.exports = sumOfDigital, sumOfDigital1;