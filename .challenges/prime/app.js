const primeNumbers = (max) => {

    if(max <= 1) return false;
    for(let i =2; i < Math.sqrt(max); i++){
        if(max % i === 0) return false;
    }

    return true;
}

function printPrimeNumbers(max){
    if(max <= 1) return "not a prime number";

    for(let j = 2; j <= max; j++){

    let isPrime = true;

    for(let i = 2; i <= Math.sqrt(j); i++){
        if(j % i === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(j)
    }
    }
}

printPrimeNumbers(37);