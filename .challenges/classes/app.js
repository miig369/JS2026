class Person {
        name; // public
        #age; // private
        createdAt;
        static numberOfPeople = 0;
        static people = []

     constructor(name, age){
        this.name = name;
        this.#age = age;
        this.createdAt = new Date();
        Person.numberOfPeople++;
        Person.people.push(this)
     }

     get age(){
        return this.#age;
     }

     set age(age){
        this.#age = age;
     }

     static getNumberOfPeople(){
        return Person.numberOfPeople;
     }

     static getAvarageAge(){
        let total = 0;
        for(let p of this.people){
            total+=p.age;
        }
        return total/Person.numberOfPeople;
     }
}

const p1 = new Person("John Doe", 18);
const p2 = new Person("John Doe", 28);

p1.age = 27; // calls the setter
const myAge = p1.age; // calls the getter
console.log(myAge);


const num = Person.getNumberOfPeople();
const result = Person.getAvarageAge();

console.log("avarage", result);
