const area = require("./app.js");

describe("Area of a Rectangle", () => {
    test("should return 16 give the length and width of 4 respectively", ()=>{
        expect(area(4,4)).toBe(16);
    })

    test("should return a number", ()=>{
        expect(typeof area(4,4)).toBe("number")
    })
})