document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const status = document.getElementById("status");
    const restartButton = document.getElementById("restart");
    const toggleModeButton = document.getElementById("toggleMode");
    const clickSound = document.getElementById("clickSound");
    const winSound = document.getElementById("winSound");
    const drawSound = document.getElementById("drawSound");

    let currentPlayer = "X";
    let boardState = Array(9).fill(null);
    let againstAI = true;

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        board.appendChild(cell);
    }

    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            const index = cell.dataset.index;
            if (!boardState[index] && !checkWinner()) {
                makeMove(index, currentPlayer);
                if (!checkWinner() && againstAI) {
                    setTimeout(() => makeAIMove(), 300);
                }
            }
        });
    });

    function makeMove(index, player) {
        boardState[index] = player;
        cells[index].textContent = player;
        clickSound.play();
        if (checkWinner()) {
            status.textContent = `🎉 Player ${player} Wins!`;
            winSound.play();
        } else if (!boardState.includes(null)) {
            status.textContent = "🤝 It's a Draw!";
            drawSound.play();
        } else {
            currentPlayer = player === "X" ? "O" : "X";
            status.textContent = `Player ${currentPlayer}'s Turn`;
        }
    }

    function makeAIMove() {
        let emptyIndices = boardState.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
        if (emptyIndices.length > 0) {
            let randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
            makeMove(randomIndex, "O");
        }
    }

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                cells[a].classList.add("winner");
                cells[b].classList.add("winner");
                cells[c].classList.add("winner");
                status.textContent = `🎉 Player ${boardState[a]} Wins!`;
                winSound.play();
                return true;
            }
        }
        if (!boardState.includes(null)) {
            status.textContent = "🤝 It's a Draw! Restarting in 2s...";
            drawSound.play();
            startDrawCountdown(); // Start countdown
            return true;
        }
        return false;
    }

    function startDrawCountdown() {
        let timer = 2;
        const countdown = setInterval(() => {
            if (timer === 0) {
                clearInterval(countdown);
                restartGame();
            } else {
                status.textContent = `🤝 It's a Draw! Restarting in ${timer}s...`;
                timer--;
            }
        }, 1000);
    }

    function restartGame() {
        boardState.fill(null);
        cells.forEach(cell => { cell.textContent = ""; cell.classList.remove("winner"); });
        currentPlayer = "X";
        status.textContent = "Player X's Turn";
    }


    restartButton.addEventListener("click", () => {
        boardState.fill(null);
        cells.forEach(cell => { cell.textContent = ""; cell.classList.remove("winner"); });
        currentPlayer = "X";
        status.textContent = "Player X's Turn";
    });

    toggleModeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            toggleModeButton.textContent = "🌞 Light Mode";
        } else {
            toggleModeButton.textContent = "🌙 Dark Mode";
        }
    });
});