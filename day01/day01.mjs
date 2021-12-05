import utils from "../utils.mjs";
import calculateIncreases from "./calculateIncreases.mjs";
import createThreeWindow from "./createThreeWindow.mjs";
const main = () => {
    const input = utils.readInput(import.meta.url).map((value) => Number(value));

    console.log('Day01-1');
    console.log(calculateIncreases(input));

    console.log('Day01-2');
    console.log(calculateIncreases(createThreeWindow(input)));
}
export default main;
