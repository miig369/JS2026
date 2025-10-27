const total = (function(arr){
    let total = 0;
    for(let n of arr){
        total+=n;
    }

    return total;
})([10,10,10])

console.log(total)