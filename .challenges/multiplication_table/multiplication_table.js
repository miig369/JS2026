function generateMultiplicationTable(num, limit = 10){
    for(let i = 0; i <=limit; i++){
        console.log(`${i} * ${num} = ${num * i}`)
    }
}

console.log(generateMultiplicationTable(5, 10))