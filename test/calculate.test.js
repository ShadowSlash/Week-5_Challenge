// W5 S3 - Challenge
const calculate = require('../calculate');
const paraValid = require("../main");

describe("Calculate Addition OP", () => {
    test("Multiple Addition Equations", () => {
        expect(calculate.addition(5, 10)).toBe(15);
        expect(calculate.addition(-5, 10)).toBe(5);
        expect(calculate.addition(10, 0)).toBe(10);
    });

    test("Throws an Error if Addition values aren't Numbers.", () => {
        expect(() => calculate.addition("5", 10)).toThrow("ERROR! Input must use valid numbers.");
        expect(() => calculate.addition(5, "10")).toThrow("ERROR! Input must use valid numbers.");
        expect(() => paraValid.nonNumbers("five", "ten")).toThrow("ERROR! Input must use valid numbers.");
        
    });
});

describe("Calculate Subtraction OP", () => {
    test("Multiple Subtraction Equations", () => {
        expect(calculate.subtraction(10, 5)).toBe(5);
        expect(calculate.subtraction(0, 10)).toBe(-10);
        expect(calculate.subtraction(0, 0.5)).toBe(-0.5);
    });

    test("Throws an Error if Subtraction values aren't Numbers.", () => {
        expect(() => calculate.subtraction("10", 5)).toThrow("ERROR! Input must use valid numbers.");
        expect(() => calculate.subtraction(10, "5")).toThrow("ERROR! Input must use valid numbers.");
        expect(() => paraValid.nonNumbers("ten", "five")).toThrow("ERROR! Input must use valid numbers.");
    });
});

describe("Calculate Division OP", () => {
    test("Multiple Division Equations", () => {
        expect(calculate.division(100, 20)).toBe(5);
        expect(calculate.division(20, 0)).toBe("ERROR! You cannot divide by Zero");
        expect(calculate.division(100, 3.33)).toBe(30.03003003003003);
        expect(calculate.division(50, -10)).toBe(-5);
    });

    test("Throws an Error if Division values aren't Numbers.", () => {
        expect(() => calculate.division("100", 20)).toThrow("ERROR! Input must use valid numbers.");
        expect(() => calculate.division(100, "20")).toThrow("ERROR! Input must use valid numbers.");
        expect(() => paraValid.nonNumbers("hundred", "twenty")).toThrow("ERROR! Input must use valid numbers.");
    });
});

describe("Calculate Multiplication OP", () => {
    test("Multiple Multiplication Equations", () => {
        expect(calculate.multiplication(10, 50)).toBe(500);
        expect(calculate.multiplication(-10, 50)).toBe(-500);
        expect(calculate.multiplication(0, 50)).toBe(0);
    });

    test("Throws an Error if Multiplication values aren't Numbers.", () => {
        expect(() => calculate.multiplication("-10", 50)).toThrow("ERROR! Input must use valid numbers.");
        expect(() => calculate.multiplication(-10, "50")).toThrow("ERROR! Input must use valid numbers.");
        expect(() => paraValid.nonNumbers("minus ten", "fifty")).toThrow("ERROR! Input must use valid numbers.");
    });
});

describe("Missing parameters", () => {
    test("Throws Error if Parameters are Invalid.", () => {
        expect(() => paraValid.nonNumbers(null, "Fifty")).toThrow("ERROR! Input must use valid numbers.");
        expect(() => paraValid.nonOpp("%")).toThrow("ERROR! Input must use valid operators.");
    });
});