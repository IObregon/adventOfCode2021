import fs from 'fs';
import URL from 'url';
import path from 'path';

const readInput = (url) => {
    const __filename = URL.fileURLToPath(url);
    const __dirname = path.dirname(__filename);
    const input = fs.readFileSync(`${__dirname}/input.txt`).toString();
    const lines = input.split('\r\n');
    return lines[lines.length - 1].trim() === '' ? lines.slice(0, lines.length - 1) : lines;
}

export default { readInput: readInput }