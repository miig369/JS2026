const person = {
    name: "John Doe",
    "prop": true,
    age: 23,
    occupation: "Software developer",
    info: function(){
        return `Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation}`
    }
}

// check if salary is falsly 
// if its any of these values it overrides them false, 0, "", null, undefined, NaN
if(!person.salary){
    person.salary = 100000
}

//check if property exists
const exists = person.hasOwnProperty("salary");
console.log(exists);


person["str"] = "my string";  

console.log(typeof person.str); //string


// iterating through an object
for(let key in person){
    if(typeof person[key] !== "function"){
        console.log(key, ":", person[key])
    }   
}

// spread operator allow properties of an object onto another 
const obj = {
    name: "James Dean",
    age: 26
}

const obj2 = { ... obj, salary: 10000 }

console.log(obj, obj2);

// const { name, age } = obj;

const name = obj.name;
const age = obj.age;

console.log(name, age) 

function greeting(message, callBack){
    return `${message} ${callBack}`
}

console.log(greeting("Hello", person.info()))