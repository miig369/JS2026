const add = require("../add/app.js");

describe("Add", ()=>{
    test("should return 16 as the sum of value1 and value2", ()=>{
        // aaa => arrange, act, assert
        expect(add(8,8)).toBe(16);
    })

    test("should return a number", ()=>{
        expect(typeof add(8,8)).toBe("number")
    })
})