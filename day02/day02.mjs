import utils from "../utils.mjs";
import calculatePosition from "./calculatePosition.mjs";
import calculatePositionWithAim from "./calculatePositionWithAim.mjs";

const main = () => {
    const input = utils.readInput(import.meta.url);

    console.log('Day02-1');
    const [horizontal, depth] = calculatePosition(input);
    console.log(horizontal * depth);

    console.log('Day02-1');
    const [horizontalWithAim, depthWithAim] = calculatePositionWithAim(input);
    console.log(horizontalWithAim * depthWithAim);
};

export default main;