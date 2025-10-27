const characterExists = require('./app.js');

describe("characterExists", ()=>{
    test("should return true when a given charater exists in a string", ()=>{
        expect(characterExists.characterExists("Hello", "o")).toBe(true)
    })

    test("should return true when a given charater exists in a string", ()=>{
        expect(characterExists.characterExists("Hello", "w")).toBe(false)
    })

    test("should return typeof boolean", ()=>{
        expect(typeof characterExists.characterExists("Hello", "o")).toBe("boolean")
    })
})