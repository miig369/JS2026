const reverseString = (str) => {
    if(str.length === 0) return "";

    let newStr = "";

    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }

    return newStr;

}

const reverseString2 = (str) => {
    if(str.length === 0) return "";
    return str.split("").reverse().join("");
}

/***
 * function reversestring (str):
 *      if length(str) === 0:
 *          return "";
 * 
 *      define newStr = "";
 *      for(define 1 = legnth(str); i !== 0 ; i--) :
 *         newStr += str[i]
 * 
 *      return newStr; 
 */

module.exports = reverseString;