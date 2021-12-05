import calculateIncreases from "./calculateIncreases.mjs"

describe("CalculateIncrease", () => {
    it("should return 0 when nothing is provided", () => {
        expect(calculateIncreases()).toBe(0);
    });
    it("should return 0 when empty array is provided", () => {
        expect(calculateIncreases([])).toBe(0);
    });
    it("should return 0 when array with one element is provided", () => {
        expect(calculateIncreases([1])).toBe(0);
    });
    it("should return 1 when second element in array is bigger", () => {
        expect(calculateIncreases([1, 2])).toBe(1);
    });
    it("should return 0 when second element in array is smaller", () => {
        expect(calculateIncreases([2, 1])).toBe(0);
    });
    it("should return 7 when data provided", () => {
        expect(calculateIncreases([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])).toBe(7);
    });
});