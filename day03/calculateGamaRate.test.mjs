import calculateGamaRate from './calculateGamaRate'
const data = [
    { title: "should return '0' when nothing is provided", input: undefined, result: '0' },
    { title: "should return '0' when empty array is provided", input: [], result: '0' },
    { title: "should return '0' when array with empty string is provided", input: [''], result: '0' },
    { title: "should return '0' when array with a number is provided", input: [1], result: '0' },
    { title: "should return '0' when array with a not valid string is provided", input: ['4'], result: '0' },
    { title: "should return the input when array with only one valid string is provided", input: ['00100'], result: '00100' },
    { title: "should return the most common in each possition when array with three valid strings is provided", input: ['00100', '11011', '10110'], result: '10110' },
    {
        title: "should return the biggest in each possition when array with multiple valid strings is provided"
        , input: ['00100','11110','10110','10111','10101','01111','00111','11100','10000','11001','00010','01010',]
        , result: '10110'
    },
];
describe('calculateGamaRate', () => {
    data.forEach((d) => {
        it(d.title, () => {
            expect(calculateGamaRate(d.input)).toBe(d.result);
        })
    });
});