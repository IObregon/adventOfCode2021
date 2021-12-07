import calculateGamaRate from "./calculateGamaRate.mjs";

const calculateOxigenGeneratorRatio = (input, index = 0) => {
    if (input.length === 1) return input[0];
    const firstBit = input.map((inp) => inp[index]);
    const bit = calculateGamaRate(firstBit);
    const nextInput = input.filter((inp) => inp[index] === bit);
    return calculateOxigenGeneratorRatio(nextInput, ++index);
}

export default calculateOxigenGeneratorRatio