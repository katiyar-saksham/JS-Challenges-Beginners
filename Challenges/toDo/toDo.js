const task = document.querySelector(".task");
    const addTask = document.querySelector(".btn");
    const listItem = document.querySelector(".listItem");

    const createTask = () => {
        const data = task.value.trim();
        if (data !== "") {
            const LI = document.createElement("li");

            const taskText = document.createElement("span"); // Separate span for task text
            taskText.textContent = data;
            taskText.style.flex = "1"; // Allow it to take remaining space

            const delBtn = document.createElement("button");
            delBtn.classList.add("innerBtn");
            delBtn.innerHTML = "Remove";

            // Prevent toggling "done" class when clicking the button
            delBtn.addEventListener("click", (event) => {
                event.stopPropagation();
                LI.remove();
            });

           // ✅ Toggle "done" class only when clicking the <li>, NOT the button
            LI.addEventListener("click", (event) => {
                if (!event.target.classList.contains("innerBtn")) { // Prevent toggle on button click
                    LI.classList.toggle("done");
                }
            });

            LI.appendChild(taskText); // Append text separately
            LI.appendChild(delBtn);
            listItem.appendChild(LI);
            task.value = "";
        }
    };

    addTask.addEventListener("click", createTask);

    task.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            createTask();
        }
    });