export default (commands) =>
    (commands && commands.length > 0)
        ? commands.reduce(([horizontal, depth, aim], current) => {
            if (typeof current !== 'string') return [horizontal, depth, aim];
            const [commandName, commandNumber] = current.split(' ');
            if (commandName === 'forward') {
                horizontal += Number(commandNumber);
                depth += aim * Number(commandNumber);
            } else if (commandName === 'down') {
                aim += Number(commandNumber);
            } else if (commandName === 'up') {
                aim -= Number(commandNumber);
            }
            return [horizontal, depth, aim];
        },
            [0, 0, 0])
        : [0, 0, 0]