const calculateIncreases = (elements) => {
    if (!elements || elements.length <= 1) return 0;
    const result = elements.reduce((prev, current, index, array) => {
        if (current > array[index - 1]) {
            return ++prev
        }
        return prev;
    }, 0);
    return result;
};
export default calculateIncreases;
