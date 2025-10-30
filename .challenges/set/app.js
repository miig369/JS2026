const set = new Set([1,3,56,7,7]);
set.add(10)
set.delete(56)

console.log(set);

console.log(set.size);

console.log(set.has(3));


//converting a set into an arry
const arr = [...set];
console.log(arr);

//
function duplicate(emails){
    const set = new Set(emails);
    return [...set];
}
