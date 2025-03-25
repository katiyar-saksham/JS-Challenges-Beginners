document.addEventListener("DOMContentLoaded", () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const buttons = document.querySelectorAll(".choice-btn");
    const resultText = document.getElementById("result");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const userChoice = button.textContent;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            let result = "";
            if (userChoice === computerChoice) {
                result = "It's a tie!";
            } else if (
                (userChoice === "Rock" && computerChoice === "Scissors") ||
                (userChoice === "Paper" && computerChoice === "Rock") ||
                (userChoice === "Scissors" && computerChoice === "Paper")
            ) {
                result = "You win!";
            } else {
                result = "You lose!";
            }

            resultText.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;
        });
    });
});