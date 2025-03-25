const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson"
];

const box = document.querySelector(".box");
const newQuote = document.querySelector(".newQuote");

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length); 
    box.textContent = quotes[randomIndex];
}

newQuote.addEventListener('click', generateQuote);

