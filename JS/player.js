export function createPlayer (inName, inSymbol) {
    const name = inName;
    const symbol = inSymbol;
    let moves = [];

    const makeMove = position => moves.push(position);
    const getName = () => name;
    const getMoves = () => moves;
    const clear = () => moves = [];

    return { makeMove, getName, getMoves, clear };
};