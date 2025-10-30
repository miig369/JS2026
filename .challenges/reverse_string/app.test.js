const reverseString = require("./app.js");

describe("Reverse String", () => {
    test("should return a correct reversed string given an input", ()=>{
        expect(reverseString("hello")).toBe("olleh")
    })

    test("should return a string", ()=>{
        expect(typeof reverseString("hello")).toBe("string")
    })
})
