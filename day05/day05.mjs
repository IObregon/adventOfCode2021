import utils from "../utils.mjs";

const parseInputToCords = (input) => {
  const sp = input[0].split('\n')
  return sp.map((inp) => {
    const splited = inp.split(' -> ');
    if (splited.length > 1) {
      const [originX, originY] = splited[0];
      const [destX, destY] = splited[1];
      return { originX, originY, destX, destY };
    }
    return {};
  });
}


const main = () => {
  const input = utils.readInput(import.meta.url);
  console.log(parseInputToCords(input));
}


main();