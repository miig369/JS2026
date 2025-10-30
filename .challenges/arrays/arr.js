const arr = []

arr.push({name: "John Doe", age: 24})
arr.push({name: "Sam Smith", age: 14})
arr.push({name: "Ashley Cole", age: 34})
arr.push({name: "Zeina Ammy", age: 44})
arr.push({name: "Jame Dean", age: 54})

const mostRecentUser = (users) => {
    
    //if the arr is empty return null
    if(users.length === 0) return null;

    return users[users.length - 1].name;
}

const avarageAge = (arr) => {
    let total = 0;

    for(let i = 0; i < arr.length; i++){
        total+=arr[i].age;
    }

    return total/arr.length;
}

const sortByAgeAsc = (arr) => {
    return arr.sort((a,b) => a.age - b.age);
}

const sortByAgeDesc = (arr) => {
    return arr.sort((a,b) => b.age - a.age);
}

const sortByNameAlphabetically = (arr) => {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
} 

const userExist = (arr, name) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name === name){
            return true
        }
    }
    return false;
}

const addUser = (arr, user) => {
    if(!userExist(arr, user.name)){
        arr.push(user);
        console.log("user added")
    }else{
        console.log("user already exists")
    }
}

const removeUser = (arr, user) => {
    if(userExist(arr, user.name)){
       const index =  arr.findIndex(u => u.name === user.name);
       if(index !== -1){
        console.log("user deleted", index)
       }
    }else{
        console.log("User could not be found")
    }
}

console.log(mostRecentUser(arr))
console.log(avarageAge(arr))
console.log(sortByAgeAsc(arr))
console.log(sortByAgeDesc(arr))
console.log(userExist(arr, "Jan"))

// working with the spread syntax

const num = [10, 20, 30];

const uploadNewMessaages = (oldNumbers, newNumbers) => {
    const newArrayNumbers = [...oldNumbers, ...newNumbers];
    return newArrayNumbers;
}

addUser(arr, {name: "Jame Dan", age: 54});
removeUser(arr, {name: "Ashley Cole", age: 34})