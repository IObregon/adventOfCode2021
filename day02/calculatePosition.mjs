export default (commands) =>
    commands && commands.length > 0
        ? commands.reduce(([horizontal, depth], current) => {
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
        }
            , [0, 0])
        : [0, 0];