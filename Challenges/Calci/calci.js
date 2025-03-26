document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    display.value = localStorage.getItem("calcValue") || "";

    document.addEventListener("keydown", (event) => {
        if (/[\d+\-*/.=]/.test(event.key)) {
            appendToDisplay(event.key);
        } else if (event.key === "Enter" || event.key === "=") {
            +9
            event.preventDefault();
            calculateResult();
        } else if (event.key === "Backspace") {
            display.value = display.value.slice(0, -1);
        }
    });
});

function appendToDisplay(value) {
    const display = document.getElementById("display");
    if (value === "=") return;
    display.value += value;
    localStorage.setItem("calcValue", display.value);
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
        localStorage.setItem("calcValue", display.value);
    } catch {
        display.value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
    localStorage.removeItem("calcValue");
}