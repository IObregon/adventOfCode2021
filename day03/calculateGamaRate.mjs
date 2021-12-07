const calculateGamaRate = (input) => {
    if (!input || input.length === 0) return '0'
    return input.reduce((prev, current) => {
        if (typeof current !== 'string' || current.length === 0 || !(current.match(/^[0-1]+$/))) return prev;
        for (let i = 0; i < current.length; i++) {
            prev[i] = (isNaN(prev[i]) ? 0 : parseInt(prev[i], 10)) + parseInt(current[i], 10);
        }
        return prev;
    }, ['0'])
        .map((b) => {
            return b / input.length >= 0.5 ? 1 : 0
        })
        .join('');
}

export default calculateGamaRate;