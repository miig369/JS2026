function findSmallestNumber(arr){

    if(arr.length === 0) return 0;
    if(!Array.isArray(arr)) throw new Error("Invalid input");

    let val = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "number" || isNaN(arr[i])){
            throw new Error("Invalid value " + arr[i]);
        }

        if(arr[i] < val){
            val = arr[i];
        }
    }
    return val;
}

console.log(findSmallestNumber([10, 0, 23, 5, 45]))