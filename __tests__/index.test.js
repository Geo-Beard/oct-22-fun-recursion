const {factorial} = require("../index.js")

describe('factorial', () => {
    test('factorial 0 or 1 returns 1', () => {
        expect(factorial(0)).toBe(1)
        expect(factorial(1)).toBe(1)
    });
    test('returns factorial of given number', () => {
        expect(factorial(2)).toBe(2)
        expect(factorial(3)).toBe(6);
        expect(factorial(5)).toBe(120);
        expect(factorial(8)).toBe(40320);
    });
});