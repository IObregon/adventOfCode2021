import utils from "../utils.mjs";

const checkIfRowWin = (row) => {
    return !row.some((r) => r !== 'X');
}

const checkIfColumnWin = (board, pos) => {
    const col = board.map(x => x[pos]);
    return checkIfRowWin(col);
}

const calculateSumOfRemainings = (board) => {
    return board.flat().reduce((prev, curr) => {
        if (!isFinite(curr)) {
            return prev;
        }
        return prev + Number(curr);
    }, 0);
}

const convertInputToBoards = (input) => {
    const boards = []
    for (let i = 0; i < input.length - 6; i = i + 6) {
        boards.push(input.slice(i, i + 5).map((inp) => {
            return inp.match(/\d+/g)
        }));
    }
    return boards;
}

const playBingo = (boards, bingoNumbers) => {
    for (const number of bingoNumbers.split(",")) {
        for (let board of boards) {
            for (let row of board) {
                const pos = row.findIndex((num) => num === number);
                if (pos >= 0) {
                    row[pos] = 'X';
                    if (checkIfRowWin(row) || checkIfColumnWin(board, pos)) {
                        return [board, number];
                    }
                    break;
                }
            }
        }
    }
}


const main = () => {
    const input = utils.readInput(import.meta.url);

    console.log('Day04-1');
    const [bingoNumbers] = input;
    const boards = convertInputToBoards(input.slice(2));
    const [winningBoard, lastNumber ] = playBingo(boards, bingoNumbers);
    console.log(calculateSumOfRemainings(winningBoard) * lastNumber);
};

main();