export default (elements) => elements && elements.length > 2
    ? elements.reduce((prev, current, index, array) => {
        if (array.length >= index + 3) {
            prev.push(current + array[index + 1] + array[index + 2]);;
        }
        return prev;
    },
        [])
    : [0];