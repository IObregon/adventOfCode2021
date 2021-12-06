export default (elements) => (elements && elements.length > 1)
    ? elements.reduce((prev, current, index, array) => current > array[index - 1] ? ++prev : prev, 0)
    : 0;