import { createPlayer } from "./player.js";
import { gameboard } from "./gameboard.js";

// IIFE (module)
export const gameController = (function(){
   let players = [];
   let activePlayer;

    const setPlayer = (name, symbol) => {
        players.push(createPlayer(name === '' ? symbol.toUpperCase() : name, symbol));
        if (players.length === 1) { activePlayer = players[0];}
    }

    const getPlayers = () => players;

    const makeMove = position => {
        activePlayer.makeMove(position);
        gameboard.addMove(position);
        const results = getGameResults();
        if (results) {
            if (results == 'draw') {
                alert(results);
                return true;
            } else {
                alert(activePlayer.getName() + " wins!");
                return true;
            }
        }

        changeActivePlayer();
        return false;
    }

    const changeActivePlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    const getGameResults = () => {
        if (gameboard.checkWinCondition(activePlayer.getMoves().sort())) {
            return activePlayer;
        }
        if (!gameboard.getBoard().includes(-1) && !gameboard.checkWinCondition(activePlayer.getMoves().sort())) {
            return 'draw';
        }
    }

    const resetGame = () => {
        gameboard.clearBoard();
        players.forEach(player => player.clear());
        activePlayer = players[0];
    }

    const getActivePlayer = () => activePlayer;

   return {setPlayer, getPlayers, makeMove, getGameResults, resetGame, getActivePlayer};

})();