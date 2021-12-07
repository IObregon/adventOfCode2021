import calculateOxigenGeneratorRatio from "./calculateOxigenGeneratorRatio.mjs";

const data = [
    {title:'should return the first number if the first bit is 1 when two numbers provided', input: ['10', '01'], result: '10'},
    {title:'should return the second number if the first bit is 1 when two numbers provided', input: ['01', '10'], result: '10'},
    {title:'should return the first number if the first bit and the second is 1 when 3 numbers provided', input: ['111', '110', '011'], result: '111'},
    {title:'should return the second number if the first bit and the second is 1 when 3 numbers provided', input: ['110', '111', '011'], result: '111'},
    {title:'should return the third number if the first bit and the second is 1 when 3 numbers provided', input: ['110', '101', '111'], result: '111'},
    {
        title: "should return the number with the most repetition when array with multiple valid strings is provided"
        , input: ['00100','11110','10110','10111','10101','01111','00111','11100','10000','11001','00010','01010',]
        , result: '10111'
    },
];

describe('calculateOxigenGeneratorRatio', () => {
    data.forEach((d) => {
        it(d.title, () => {
            expect(calculateOxigenGeneratorRatio(d.input)).toBe(d.result);
        })
    });
});