const sumOfDigital = require("./sumOfDigital.js");

describe('sumOfDigital', () => {
  test('sums basic arrays of numbers', () => {
    expect(sumOfDigital([1, 2, 3])).toBe(6);
    expect(sumOfDigital([10, 20, 30, 40])).toBe(100);
  });

  test('returns 0 for an empty array', () => {
    expect(sumOfDigital([])).toBe(0);
  });

  test('handles negative numbers correctly', () => {
    expect(sumOfDigital([-1, -2, -3])).toBe(-6);
  });

  test('handles large arrays efficiently', () => {
    expect(sumOfDigital(Array(1000).fill(1))).toBe(1000);
  });
});
