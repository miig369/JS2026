const isPalindrome = (str) => {
    if(str.length === 0) return false;
    return str.toLowerCase().split("").reverse().join("") === str.toLowerCase();
}

const isPalindrome2 = (str) => {
    if((str.length === 0) || (typeof str !== "string")) return false;

    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }

    return newStr.toLocaleLowerCase() === str.toLocaleLowerCase()

} 

console.log(isPalindrome2("bobi"));
console.log(isPalindrome2("bob"));