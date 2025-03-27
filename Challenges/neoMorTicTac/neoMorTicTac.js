document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const status = document.getElementById("status");
    const restartButton = document.getElementById("restart");
    const toggleModeButton = document.getElementById("toggleMode");

    let currentPlayer = "X";
    let boardState = Array(9).fill(null);

    // Create board cells
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        board.appendChild(cell);
        cell.addEventListener("click", () => handleMove(i, cell));
    }

    function handleMove(index, cell) {
        if (!boardState[index] && !checkWinner()) {
            boardState[index] = currentPlayer;
            cell.textContent = currentPlayer;

            if (checkWinner()) {
                status.textContent = `🎉 Player ${currentPlayer} Wins!`;
            } else if (!boardState.includes(null)) {
                status.textContent = "🤝 It's a Draw!";
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                status.textContent = `Player ${currentPlayer}'s Turn`;
            }
        }
    }

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]
        ];
        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                document.querySelectorAll(".cell")[a].classList.add("winner");
                document.querySelectorAll(".cell")[b].classList.add("winner");
                document.querySelectorAll(".cell")[c].classList.add("winner");
                return true;
            }
            return false;
        });
    }

    restartButton.addEventListener("click", () => {
        boardState.fill(null);
        document.querySelectorAll(".cell").forEach(cell => {
            cell.textContent = "";
            cell.classList.remove("winner");
        });
        currentPlayer = "X";
        status.textContent = "Player X's Turn";
    });

    toggleModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleModeButton.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
});