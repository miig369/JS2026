class MyArray {

    constructor(){
        this.length = 0;
        this.data = {}
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    get(index){
        return this.data[index] || -1;
    }
}

const arr = new MyArray()

arr.push("Adam")
arr.push("steve")

console.log(arr.pop())

console.log(arr)