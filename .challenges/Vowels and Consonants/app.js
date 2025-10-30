const vowelsAndConsonantsCount = (str) => {
    if(str.length === 0) return `Vowel count ${0} and Consonant count ${0}`;
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;

    for(let i =0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            vowelCount++;
        }
    }

    return  `Vowel count ${vowelCount} and Consonant count ${str.length - vowelCount}`;
}

console.log(vowelsAndConsonantsCount("aeibdupklb"));