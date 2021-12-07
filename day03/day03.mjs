import utils from "../utils.mjs";
import calculateCO2ScrubberRating from "./calculateCO2ScrubberRating.mjs";
import calculateOxigenGeneratorRatio from "./calculateOxigenGeneratorRatio.mjs";
import calculateGamaRate from "./calculateGamaRate.mjs";

const calculateEpsilonRate = (gamaRate) => {
    return gamaRate.split('').map((gr) => {
        return gr === '0' ? '1' : '0'
    }).join('');
}

const main = () => {
    const input = utils.readInput(import.meta.url);

    console.log('Day03-1');
    const gamaRateBinary = calculateGamaRate(input);
    const epsilonRateBinary = calculateEpsilonRate(gamaRateBinary);
    console.log(parseInt(gamaRateBinary, 2) * parseInt(epsilonRateBinary, 2));

    console.log('Day03-2');
    const oxygenGeneratorRatingBinary = calculateOxigenGeneratorRatio(input);
    const CO2ScrubberRatingBinary = calculateCO2ScrubberRating(input);

    console.log(parseInt(oxygenGeneratorRatingBinary, 2) * parseInt(CO2ScrubberRatingBinary, 2));
};

export default main;