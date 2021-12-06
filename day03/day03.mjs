import utils from "../utils.mjs";
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

};

main();