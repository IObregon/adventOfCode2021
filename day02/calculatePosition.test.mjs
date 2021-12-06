import calculatePosition from './calculatePosition'
const data = [
    { title: 'should return [0, 0] when nothing is provided', input: undefined, result: [0, 0] },
    { title: 'should return [0, 0] when empty array is provided', input: [], result: [0, 0] },
    { title: 'should return [0, 0] when array with empty string is provided', input: [], result: [0, 0] },
    { title: 'should return [0, 0] when array with a number is provided', input: [1], result: [0, 0] },
    { title: 'should return [0, 0] when array with not a command is provided', input: ['asd'], result: [0, 0] },
    { title: 'should return [1, 0] when array with a command `forward 1` is provided', input: ['forward 1'], result: [1, 0] },
    { title: 'should return [0, 1] when array with a command `down 1` is provided', input: ['down 1'], result: [0, 1] },
    { title: 'should return [0, -1] when array with a command `up 1` is provided', input: ['up 1'], result: [0, -1] },
    { title: 'should return [15, 10] when array with test data is provided', input: ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2',], result: [15, 10] },
]
describe('calculatePosition', () => {
    data.forEach((d) => {
        it(d.title, ()=> {
            expect(calculatePosition(d.input)).toStrictEqual(d.result);
        })
    })
});