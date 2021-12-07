import calculateCO2ScrubberRating from "./calculateCO2ScrubberRating.mjs";

const data = [
    {title:'should return the first number if the first bit is 0 when two numbers provided', input: ['01', '10'], result: '01'},
    {title:'should return the second number if the first bit is 0 when two numbers provided', input: ['10', '01'], result: '01'},
    {title:'should return the first number if the first bit and the second is 0 when 3 numbers provided', input: ['001', '110', '111'], result: '001'},
    {title:'should return the second number if the first bit and the second is 0 when 3 numbers provided', input: ['110', '001', '111'], result: '001'},
    {title:'should return the third number if the first bit and the second is 0 when 3 numbers provided', input: ['110', '111', '001'], result: '001'},
    {
        title: "should return the number with the most repetition when array with multiple valid strings is provided"
        , input: ['00100','11110','10110','10111','10101','01111','00111','11100','10000','11001','00010','01010',]
        , result: '01010'
    },
];

describe('calculateCO2ScrubberRating', () => {
    data.forEach((d) => {
        it(d.title, () => {
            expect(calculateCO2ScrubberRating(d.input)).toBe(d.result);
        })
    });
});