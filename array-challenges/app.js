const names = ["Derek", "Joe", "Anna", "Coen", "Chris", "Macey", "Ella"];

// Add a name to the beginning of the names array.
names.unshift("John")

// Add a name to the end of the names array.s
names.push("David")

// Remove the name you added to the beginning of the names array.
names.shift()

// Remove the name you added to the end of the names array
names.pop()

// Create a new array called lowercasedNames with each name lowercased.
const lowercasedNames = names.map(name => name.toLocaleLowerCase())

// Sort the names array alphabetically.
names.sort((a, b) => a.localeCompare(b))

// Find the index of "Chris"
const item = names.indexOf("Chris")

// Create a new array called afterChris with all names after "Chris" in the names array.
const afterChris = names.slice(item + 1)

// Alter the original array to only contain the names before "Chris"
const beforeChris = names.slice(0, item)

// remove "Chris" from the original array
names.splice(item, 1)

// Return true if the names array contains "Chris" and false if it does not (hint: it should be false now)
console.log(names.includes("Chris"))

console.log("names track", names)

/**
 * INTERMEDIATE CHALLENGES
 */

const peeps = [
    {
      id: 1,
      name: "Chris",
      age: 24,
      favoriteNumbers: [1, 4, 8, 12, 32],
    },
    {
      id: 2,
      name: "Terrance",
      age: 37,
      favoriteNumbers: [2, 8, 9],
    },
    {
      id: 3,
      name: "Megan",
      age: 22,
      favoriteNumbers: [23, 14],
    },
    {
      id: 4,
      name: "Juan",
      age: 18,
      favoriteNumbers: [23, 14, 2],
    },
    {
      id: 5,
      name: "Tina",
      age: 42,
      favoriteNumbers: [12, 9, 1, 4, 18],
    },
    {
      id: 6,
      name: "Lin",
      age: 24,
      favoriteNumbers: [3, 9],
    },
  ];

// Add a boolean property isAwesome for each peep and set it to true if the person has at least 3 favorite numbers (or false if not).
peeps.forEach((peep)=>{
    peep["isAwesome"] = peep.favoriteNumbers.length > 2
})

// Return a new array called youngPeeps with peeps 25 or younger.
const youngPeeps = peeps.filter(peep => peep.age < 26)

// Sort the favoriteNumbers property from least to greatest for each peep in the peeps array.
peeps.forEach((peep)=>{
    peep.favoriteNumbers.sort((a, b) => a - b)
})

// Return true if every person has an age below 50 and false if not.
peeps.every(person => person.age < 50);

// Create a function called findPeep that returns the peep for an ID passed in and returns "not found" if the peep does not exist. 
// Call it for an id that exists and one that does not.
// JavaScript considers the following values to be falsy: false, 0, "" (empty string), null, undefined, NaN
// Everything else is considered truthy.
const findPeep = (id, array) => {
    const peep = array.find(peep => peep.id === id);
    return peep ||  "not found";    // truthy || falsey
}

// console.log("findPeep track", findPeep(6, peeps))
// console.log("findPeep track", findPeep(60, peeps))

//Create a new array called reversedPeeps with the peeps array order reversed.
const reversedPeeps = [...peeps].reverse();

//Create a new array called reversedFavourateNumbers with the favoriteNumbers array order reversed.
const reversedFavourateNumbers = peeps.map((peep) => {
    return {...peep, 
            favoriteNumbers: peep.favoriteNumbers.reverse()}
})

// Add an additional property on each peep object called favoriteNumbersSum with a single number value which equals the total of all their favorite numbers.
peeps.forEach((peep) => {
    peep.favoriteNumbersSum = peep.favoriteNumbers.reduce((prev, current) => prev + current, 0) }
)

// Create a new array called numberOnePeeps with all people that include a favorite number of "1". Include only their names and ids in the new array.
const numberOnePeeps = peeps.filter((peep) => {
    return peep.favoriteNumbers.includes(1)
}).map(peep => ({id: peep.id, name: peep.name}))

// Combine all peeps from the numberOnePeeps (#8 above) which are also in the youngPeeps (#2 above) array into a new array called freshPeeps. Include peeps with unique ids only from the youngPeeps array.
const combinedPeeps = Array.from(new Set([...numberOnePeeps, ...youngPeeps]));

//Return a single value representing the total of all favoriteNumbers for anyone with the isAwesome property set to true (hint: it should be 159).
let total = 0;
peeps.forEach((peep) =>{
    if(peep.isAwesome){
        peep.favoriteNumbers.forEach((num)=>{
            total += num
        })
    }
})

console.log(total)