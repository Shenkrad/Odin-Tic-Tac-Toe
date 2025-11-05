// IIFE (module)
export const gameboard = (function(){
    let board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const addMove = move => board[move] = move;

    const clearBoard = () => board.fill(-1);

    const checkWinCondition = playerMoves => winCondition.some(condition => {
        return condition.every((position) => playerMoves.includes(position));
    });

    const getBoard = () => board;

    return { addMove, clearBoard, checkWinCondition, getBoard };
   
})();
