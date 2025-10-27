const arr = [1, [2, 3], 4, 4];

const flattenArray = (arr) => {
    return arr.flat();
}

const flattenArray2 = (arr) => {
    return Array.from(new Set(arr)).flat();
}

console.log(flattenArray2(arr))