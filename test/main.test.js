// W5 S3 - Challenge
const calculate = require('../calculate');

describe("Calculate operators", () => {
    test("addition", () => {
        expect(calculate.addition(5, 10)).toBe(15);
        expect(calculate.addition(-10, 5)).toBe(-5);
        expect(() => calculate.addition("a", 5)).toThrow("ERROR! Input must be valid numbers.");
    });

    test("subtraction", () => {
        expect(calculate.subtraction(10, 5)).toBe(5);
        expect(calculate.subtraction(-10, -5)).toBe(-5)
        expect(() => calculate.subtraction(10, "-b")).toThrow("ERROR! Input must be valid numbers.");
    });

    test("division", () => {
        expect(calculate.division(100, 20)).toBe(5);
        expect(calculate.division(20, 100)).toBe(0.2);
        expect(() => calculate.division("c", "d")).toThrow("ERROR! Input must be valid numbers.");
    });

    test("multiplication", () => {
        expect(calculate.multiplication(-10, 5)).toBe(-50);
        expect(calculate.multiplication(50, 100)).toBe(5000);
        expect(() => calculate.multiplication("e", 100)).toThrow("ERROR! Input must be valid numbers.");
    })
});



