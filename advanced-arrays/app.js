/**
 * REVERSE INT
 */
const reverseInt = (num) => {
    const str = num.toString();
    const reversedNum = str.split("").reverse().join("");
    return parseInt(reversedNum)
}
console.log(reverseInt(123))

/**
 * REVERSE STRING
 * @param {*} str 
 * @returns 
 */
const reverseString = (str) => {
    if(str.length < 1) return "";
    return str.split("").reverse().join("")
}

console.log(reverseString("hello"))


/**
 * PALINDROM
 * @param {*} str 
 * @returns 
 */
const palindrome = (item) =>{
    if(item === "" || item < 0) return false;

    if(typeof item === "string")
        return item === reverseString(item);
    else if(typeof item === "number")
        return item === reverseInt(item)
}
console.log(palindrome("boby"))
console.log(palindrome(1211))

/**
 * CAPITALIZE
 */
const capitalise = (str) => {
   return str.toLowerCase().split(" ").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ")
}

console.log(capitalise("HelLo WorLd"))

/**
 * FIZZBUZZ
 */
const fizzbuzz = (num) => {
    const result = []
    for(let i = 0; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            result.push("FIZZBUZZ");
        }else if(i % 3 === 0){
            result.push("FIZZ");
        }else if(i % 5 === 0){
            result.push("BUZZ");
        }
        else{
            result.push(i);
        }
    }
    return result;
}

console.log(fizzbuzz(15))


/***
 * MAX PROFIX
 */

const maxProfit = (prices) => {

    let minPrice = prices[0]; //
    let profit = 0;

    for(let i = 1; i < prices.length; i++){
        const currentPrice = prices[i];

        minPrice = Math.min(minPrice, currentPrice);

        const potentialProfit = currentPrice - minPrice;

        profit = Math.max(profit, potentialProfit)

    }
    return profit;
}

const prices = [7, 1, 5, 4, 6, 3];

console.log(maxProfit(prices))