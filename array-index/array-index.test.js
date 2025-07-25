const { arrayIndex } = require("./array-index");

describe("arrayIndex", () => {
    test("returns the correct element at a valid index", () => {
        const numbers = [10, 20, 30, 40];
        const result = arrayIndex(numbers, 2);
        expect(result).toBe(30);
    });

    test("returns the first element when index is 0", () => {
        const numbers = [99, 88, 77];
        const result = arrayIndex(numbers, 0);
        expect(result).toBe(99);
    });

    test("returns the last element for the last valid index", () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = arrayIndex(numbers, 4);
        expect(result).toBe(5);
    });

    test("returns undefined when index is out of bounds (too high)", () => {
        const numbers = [1, 2, 3];
        const result = arrayIndex(numbers, 5);
        expect(result).toBeUndefined();
    });

    test("returns undefined when index is negative", () => {
        const numbers = [10, 20, 30];
        const result = arrayIndex(numbers, -1);
        expect(result).toBeUndefined();
    });

    test("returns undefined when input array is empty", () => {
        const numbers = [];
        const result = arrayIndex(numbers, 0);
        expect(result).toBeUndefined();
    });
});