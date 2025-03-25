let count = 0;
        document.querySelector(".btn").addEventListener("click", () => {
            document.querySelector("h1").innerHTML = `Clicked ${++count} times`
        });
        const bttn = document.querySelector(".btn");
        bttn.addEventListener("click", () => {
            const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

            document.querySelector("button").style.backgroundColor = randomColor;
        })