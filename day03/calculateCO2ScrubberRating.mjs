import calculateGamaRate from "./calculateGamaRate.mjs";

const calculateCO2ScrubberRating = (input, index = 0) => {
    if (input.length === 1) return input[0];
    const firstBit = input.map((inp) => inp[index]);
    const bit = calculateGamaRate(firstBit) === '0' ? '1' : '0';
    const nextInput = input.filter((inp) => inp[index] === bit);
    return calculateCO2ScrubberRating(nextInput, ++index);
}

export default calculateCO2ScrubberRating