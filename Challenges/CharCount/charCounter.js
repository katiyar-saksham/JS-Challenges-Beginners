const text = document.querySelector('#text');
const charCount = document.querySelector("#charCount");

text.addEventListener("input", function () {
    const count = text.value.length;
    charCount.textContent = `Characters Count: ${count}`
})