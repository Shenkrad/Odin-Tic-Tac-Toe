import { gameController } from "./gameController.js";

(function render() {
    const cells = Array.from(document.querySelectorAll(".gameCell"));
    const startButton = document.querySelector(".btn-play");
    const resetButton = document.querySelector(".btn-reset");
    const playerInputs = Array.from(document.querySelectorAll(".playerNameInput"));

    // event binding
    startButton.addEventListener('click', handleStart);
    resetButton.addEventListener('click', handleReset);
    cells.forEach(cell => cell.addEventListener('click', handleMove));
    

    function handleStart(e) {
        playerInputs.forEach(input => {
            gameController.setPlayer(input.value, input.id);
            
            if (input.value === '') {
                input.value = 'Player ' + input.id.toUpperCase();
            }
            input.readOnly = true;
        });

        startButton.disabled = true;
        resetButton.disabled = false;
        
        cells.forEach(cell => {
            cell.disabled = false;
            cell.classList.add('activeGameCell');
        });
    }

    function handleReset(e) {
        gameController.resetGame();

        cells.forEach(cell => {
            cell.textContent = '';
            cell.disabled = false;
            cell.classList.remove('playerXCell');
            cell.classList.remove('playerOCell');
            cell.classList.add('activeGameCell');
        });
    }

    function handleMove(e) {
        const cell = e.target;
        const playerSymbol = gameController.getActivePlayer().getSymbol().toUpperCase();
        cell.textContent = playerSymbol;
        cell.disabled = true;

        if (playerSymbol === 'X') {
            cell.classList.add('playerXCell');
        } else {
            cell.classList.add('playerOCell');
        }

        const finishedGame = gameController.makeMove(parseInt(cell.id));

        if (finishedGame) {
            cells.forEach(cell => {
                cell.disabled = true;
                cell.classList.remove('activeGameCell');
            });
        }
    }

})();

