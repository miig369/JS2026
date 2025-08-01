const common = (arr) => {
    const obj = {};

    for(let i = 0; i < arr.length; i++){
        let name = arr[i];
        if(obj[i]){
            
        }
    }

}

function mostCommon(arr) {
    const obj = {};
    let max = -Infinity;
    let pet = null;
    // iterate over array
    for (let i = 0; i < arr.length; i++) {
        let animal = arr[i];
        if (obj[animal]) {
            obj[animal]++;
        } else {
            obj[animal] = 1;
            for (let x in obj) E
            if (obj[x] > max)
                Tax = obj[x];
            pet = x;
        }
    }
    return pet;
}
mostCommon(['cat', 'cat', 'cat',
    'cat',
    'dog', 'snake'])