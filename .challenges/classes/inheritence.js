class Vehicle {
    #name
    #age
    #make
    #model

    constructor(name, age, make, model){
        this.#name = name;
        this.#model = model;
        this.#age = age;
        this.#make = make;
    }

    start(){
        console.log("Vehicle is moving")
    }

    stop(){
        console.log("Vehicle has stopped")
    }

    drive(){
        console.log("Vehicle is driving")
    }

    reverse(){
        console.log("Vehicle us reversing")
    }

    getInfo() {
        return `${this.#name} (${this.#make} ${this.#model}, ${this.#age} years old)`;
      }

}
// since we are using private they do not appear in cole, object.key or stringify but they are saved in memory we can use methods to output the data
const v1 = new Vehicle("Car", "BMW", "8 SERIES", 5)
console.log(v1.getInfo())


// working with inheritence

class SuperCar extends Vehicle {

    constructor(name, age, make, model, horsepower){
        super(name, age, make, model);
        this.horsepower = horsepower;
    }

    sport(){
        console.log("Vehicle in sport mode")
    }

    // overriding
    reverse(){
        console.log("automatic self reversing")
    }

}

const superCar = new SuperCar("Car", "BMW", "i8", 1, 600)
console.log(superCar.getInfo());

superCar.reverse()
superCar.sport();