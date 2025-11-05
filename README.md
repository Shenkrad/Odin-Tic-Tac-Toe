# Tic Tac Toe

A browser-based Tic Tac Toe game built with vanilla JavaScript as part of The Odin Project – JavaScript Path.  
This project focuses on encapsulating game logic, keeping code clean, and separating responsibilities between logic and UI.

Live Demo: https://shenkrad.github.io/Odin-Tic-Tac-Toe/  
Repository: https://github.com/Shenkrad/Odin-Tic-Tac-Toe

---

## Learning Goals

- Practice modular JavaScript and encapsulation.
- Separate game logic from DOM manipulation.
- Implement turn-based gameplay and win/draw detection.
- Keep functions simple, reusable, and maintainable. 
- Reinforce good practices for clean JavaScript architecture.

---

## Features

- Local two-player mode (Player X vs Player O).  
- Real-time win and draw detection.  
- Restart button to reset the match without reloading.  
- Minimal and responsive UI design.  
- No frameworks or dependencies required.  
- Runs directly in the browser.

---

## How to Play

1. Open the live demo or run the game locally.
2. Players set their names and press "!Play!" button.
3. Player X starts and places a mark on an empty cell.
4. Players take turns marking X and O.
5. The first player to align three symbols vertically, horizontally, or diagonally wins.
6. If all cells are filled with no winner, the game ends in a draw.
7. Click Restart to reset the board and start again.

---

## How to Run Locally

1. Clone the repository:  
   git clone https://github.com/Shenkrad/Odin-Tic-Tac-Toe.git  
2. Open the project folder on your computer.  
3. Double-click the file named index.html to open it in your browser, or open it with the Live Server extension in Visual Studio Code.  

The game will start instantly. No build steps or installations are required.

---

## Code Quality

- Keep logic (state, turns, rules) separated from display (DOM updates).
- Use descriptive names like currentPlayer, winner, or boardState.
- Avoid hardcoded values and define constants when needed.
- Keep functions short and focused.
- Comment only when logic is not self-explanatory.

---

## Credits

Based on The Odin Project assignment: JavaScript – Tic Tac Toe  
Developed by Cristian Rivera (Shenkrad)  
GitHub: https://github.com/Shenkrad

---

## License

This project is released under the MIT License.  
You are free to use, modify, and distribute it.
