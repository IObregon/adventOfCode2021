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

const deleteAlreadyWonBoard = (boards, board) => {
    const index = boards.findIndex((b) => b == board);
    boards.splice(index, 1);
}
const play = (boards, number) => {
    const result = [];
    let won = false;
    for (let board of boards) {
        result.push(board);
        for (let row of board) {
            const pos = row.findIndex((num) => num === number);
            if (pos >= 0) {
                row[pos] = 'X';
                if (checkIfRowWin(row) || checkIfColumnWin(board, pos)) {
                    if (boards.length > 1) {
                        deleteAlreadyWonBoard(result, board)
                    } else {
                        won = true
                    }
                }
                break;
            }
        }
    }
    return [result, won];
}

const playBingoToLose = (boards, bingoNumbers) => {
    let won = false;
    for (const number of bingoNumbers.split(",")) {
        [boards, won] = play(boards, number)
        if (boards.length === 1 && won) {
            return [boards[0], number]
        }
    }
}


const main = () => {
    const input = utils.readInput(import.meta.url);

    console.log('Day04-1');
    const [bingoNumbers] = input;
    const boards = convertInputToBoards(input.slice(2));
    const [winningBoard, lastNumber] = playBingo(JSON.parse(JSON.stringify(boards)), bingoNumbers);
    console.log(calculateSumOfRemainings(winningBoard) * lastNumber);

    console.log('Day04-2');

    const [lossingBoard, lastNumberLossing] = playBingoToLose(JSON.parse(JSON.stringify(boards)), bingoNumbers);
    console.log(calculateSumOfRemainings(lossingBoard) * lastNumberLossing);
};

main();