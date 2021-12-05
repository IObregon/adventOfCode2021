const createThreeWindow = (elements) => {
    if (!elements || elements.length <= 2) return [0]
    return elements.reduce((prev, current, index, array) => {
        if (array.length < index + 3) return prev;
        prev.push(current + array[index + 1] + array[index + 2]);
        return prev;
    }, [])
}

export default createThreeWindow;