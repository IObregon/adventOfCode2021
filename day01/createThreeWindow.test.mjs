import createThreeWindow from './createThreeWindow.mjs';
describe('createThreeWindow', () => {
    it('should return 0 when nothing is provided', () => {
        expect(createThreeWindow()).toStrictEqual([0]);
    });
    it('should return 0 when empty array is provided', () => {
        expect(createThreeWindow([])).toStrictEqual([0]);
    });
    it('should return 0 when array with one element is provided', () => {
        expect(createThreeWindow([1])).toStrictEqual([0]);
    });
    it('should return 0 when array with two elements is provided', () => {
        expect(createThreeWindow([1, 2])).toStrictEqual([0]);
    });
    it('should return the sum of the elements when array with three elements is provided', () => {
        expect(createThreeWindow([1, 2, 3])).toStrictEqual([6]);
    });
    it('should return the two elements when array with four elements is provided', () => {
        expect(createThreeWindow([1, 2, 3, 4])).toStrictEqual([6, 9]);
    });
    it('should return the two elements when array with four elements is provided', () => {
        expect(createThreeWindow([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])).toStrictEqual([607, 618, 618, 617, 647, 716, 769, 792]);
    });
})