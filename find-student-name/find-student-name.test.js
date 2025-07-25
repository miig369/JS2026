const { findStudentName } = require("./find-student-name.js");


describe("findStudentName", () => {
    let students;

    beforeEach(() => {
        students = [
            "Sean Doe",
            "Dave Smith",
            "Ammy James",
            "Jimmy Carter",
            "Becky Adams"
        ];
    });

    test("returns the name of the student if found in the array", () => {
        const result = findStudentName(students, "Becky Adams");
        expect(result).toBe("Becky Adams");
    });

    test("returns null if the student is not found in the array", () => {
        const result = findStudentName(students, "Jimmy Davids");
        expect(result).toBeNull();
    });

    test("returns null when input array is empty", () => {
        const result = findStudentName([], "Becky Adams");
        expect(result).toBeNull();
    });

    test("returns null if input name is an empty string", () => {
        const result = findStudentName(students, "");
        expect(result).toBeNull();
    });

    test("is case-sensitive: returns null if casing does not match exactly", () => {
        const result = findStudentName(students, "becky adams"); // lowercase
        expect(result).toBeNull();
    });

    test("returns the first match if duplicates exist", () => {
        students.push("Becky Adams");
        const result = findStudentName(students, "Becky Adams");
        expect(result).toBe("Becky Adams");
    });

    test("returns null if non-string is passed as name", () => {
        const result = findStudentName(students, 123);
        expect(result).toBeNull();
    });

    test("returns null if the array contains non-string elements", () => {
        students.push(123);
        const result = findStudentName(students, "123");
        expect(result).toBeNull();
    });
});