const characterExists = (str, target) => {
    return str.toLowerCase().includes(target.toLowerCase());
}

function characterExists1(str, target){
    const arr = str.toLowerCase().split("");
    const newTarget = target.toLowerCase();

    for(let s of arr){
        if(s === newTarget){
            return true;
        }
    }

    return false;
}

module.exports = { characterExists, characterExists1 }