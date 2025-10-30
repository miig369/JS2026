const item = {
    name: "The Item",
    getInfo(){
        console.log(`${this.name}`)
    }
}

const item2 = Object.create(item);

console.log(item)

item.name = "John Doe"

console.log(Object.getPrototypeOf(item2) == item)

item2.getInfo()