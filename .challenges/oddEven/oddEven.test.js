const oddEven = require("./oddEven.js");

describe("OddEven", ()=>{
    test("should return Even given the value of 10 as an argument", ()=>{
        expect(oddEven(10)).toBe("Even");
    })

    test("should return Odd given the value of 15 as an argument", ()=>{
        expect(oddEven(15)).toBe("Odd");
    })

    test("should return number as the typeof OddEven return value", ()=>{
        expect(typeof oddEven(10)).toBe("string");
    })
})