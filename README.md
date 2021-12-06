The objective for this year is to be consistent for more days than the previous year(8 days).

# Day 1
As every first day, the most difficult part is deciding with language to use and setting up the environment for it.

The selected language is `node`, previous years I tried `Go` `Haskell` and others. This year I wanted a language I am comfortable with. 

The code is not complicated but I am not sure which one express the intent better:

```javascript
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
```
Or

```javascript
export default (elements) => (elements && elements.length > 1)
    ? elements.reduce((prev, current, index, array) => current > array[index - 1] ? ++prev : prev, 0)
    : 0;
```

# Day2

Not a difficult problem. There must be a better way to handle the commands than the if/ifelse but this was fast.

```javascript
    if (typeof current !== 'string') return [horizontal, depth];
    const [commandName, commandNumber] = current.split(' ');
    if (commandName === 'forward') {
        horizontal += Number(commandNumber);
    } else if (commandName === 'down') {
        depth += Number(commandNumber);
    } else if (commandName === 'up') {
        depth -= Number(commandNumber);
    }
    return [horizontal, depth];
```