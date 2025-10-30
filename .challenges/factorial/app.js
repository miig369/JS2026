function factorial(n){

    if(n < 0 ) throw new Error("Please enter a positive value");

    if(n === 0 || n === 1) return 1;

    let total = 1;
    for(let i = 1; i <=n; i++){
        total *=i;
    }
    return total;
}

console.log(factorial(4)) // 4 * 3 * 2 * 1 = 24