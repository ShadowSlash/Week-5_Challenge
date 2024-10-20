// W5 S3 - Challenge
const calculate = require('../calculate');

describe("Calculate operators", () => {
    test("adds 5 + 10 to equal 15", () => {
        expect(calculate.addition(5, 10)).toBe(15);
        expect(calculate.addition(-10, 5)).toBe(-5);
    });

    test("Throws an Error if ammounts aren't a number.", () => {
        expect(() => calculate.addition("5", 10)).toThrow("ERROR! Input must be valid numbers.");
    });

    test("subtracts 10 - 5 to equal 5", () => {
        expect(calculate.subtraction(10, 5)).toBe(5);
        expect(calculate.subtraction(-10, -5)).toBe(-5);
    });

    test("Throws an Error if ammounts aren't a number.", () => {
        expect(() => calculate.subtraction("5", 10)).toThrow("ERROR! Input must be valid numbers.");
    });

    test("divides 100 / 20 to equal 5", () => {
        expect(calculate.division(100, 20)).toBe(5);
        expect(calculate.division(20, 100)).toBe(0.2);
    });

    test("Throws an Error if ammounts aren't a number.", () => {
        expect(() => calculate.division("5", 10)).toThrow("ERROR! Input must be valid numbers.");
    });

    test("multiplies -10 * 5 to equal -50", () => {
        expect(calculate.multiplication(-10, 5)).toBe(-50);
        expect(calculate.multiplication(50, 100)).toBe(5000);
    });

    test("Throws an Error if ammounts aren't a number.", () => {
        expect(() => calculate.multiplication("5", 10)).toThrow("ERROR! Input must be valid numbers.");
    });
});



