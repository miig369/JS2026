const greeting = require("../greeting/app.js")

describe("Greeting", () => {
    test("should return Hello World", () => {
        // Arrange, Act, Assert
        const expectedResult = "Hello World";
        const actuallResult = greeting();
        expect(actuallResult).toBe(expectedResult);
    });

    test("should return a string", ()=>{
        expect(typeof greeting()).toBe("string")
    })
})