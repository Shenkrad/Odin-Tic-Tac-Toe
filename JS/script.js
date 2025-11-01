import { gameController } from "./gameController.js";

(function render() {
    const cells = Array.from(document.querySelectorAll(".gameCell"));
    const startButton = document.querySelector("#btn-play");
    const playerInputs = Array.from(document.querySelectorAll("playerNameInput"));

    // event binding
    startButton.addEventListener('click', handleStart);
    cells.forEach(cell => cell.addEventListener('click', handleMove));
    

    function handleStart(e) {
        playerInputs.forEach(input => {
            gameController.setPlayer(input.value, input.id);
            input.readOnly = true;
        });
        
        cells.forEach(cell => cell.disabled = false);
    }

    function handleMove(e) {
        const cell = e.target;
        e.textContent = gameController.getActivePlayer().getSymbol();
        cell.disabled = true;
        gameController.makeMove(parseInt(cell.id));
    }

})();

