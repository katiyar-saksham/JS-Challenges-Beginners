const URL_1 = "https://plus.unsplash.com/premium_photo-1741723515540-16a4e71b7d49?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8";

        const URL_2 = "https://images.unsplash.com/photo-1741850820739-109eb983c478?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

        const URL_3 = "https://plus.unsplash.com/premium_photo-1742353866584-27c87d42da99?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

        const URL_4 = "https://images.unsplash.com/photo-1742293603913-a61164108169?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

        const URL_5 = "https://images.unsplash.com/photo-1742316946714-b06b7cb98e53?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D";


        const images = [URL_1, URL_2, URL_3, URL_4, URL_5];

        let index = 0;
        const left = document.querySelector("#left");   //left
        const img = document.querySelector("img");      // image
        const right = document.querySelector("#right"); //right

        const updateImage = () => {
            img.src = images[index];
        };

        updateImage();

        left.addEventListener('click', () => {
            index = (index - 1 + images.length) % images.length; // Circular navigation
            updateImage();
        })
        right.addEventListener('click', () => {
            index = (index + 1) % images.length; // Circular navigation
            updateImage();
        });
        