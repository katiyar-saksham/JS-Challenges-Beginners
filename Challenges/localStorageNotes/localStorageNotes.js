const noteInput = document.getElementById("noteInput");
        const saveButton = document.getElementById("saveNote");
        const deleteButton = document.querySelector(".del");

        // Delete note from localStorage when "Delete" icon is clicked
        deleteButton.addEventListener("click", () => {
            localStorage.removeItem("userNote");
            noteInput.value = "";
        });

        // Load saved note from localStorage on page load
        noteInput.value = localStorage.getItem("userNote") || "";

        // Save note to localStorage when button is clicked
        saveButton.addEventListener("click", () => {
            localStorage.setItem("userNote", noteInput.value);
        });

        // Auto-save note on every input change (optional)
        noteInput.addEventListener("input", () => {
            localStorage.setItem("userNote", noteInput.value);
        });