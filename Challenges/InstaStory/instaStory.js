var arr = [
    {
        "img": "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        "name": "John"
    },
    {
        "img": "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        "name": "Doe"
    },
    {
        "img": "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        "name": "Doe"
    }
];
var stories = document.querySelector(".storiyan");
var clutter = "";
arr.forEach(function (elem, index) {
    clutter += ` <div class="story">
        <img id="${index}" src="${elem.img}" alt="">
    </div>`;
})

stories.innerHTML = clutter;

stories.addEventListener("click", function (info) {
    document.querySelector("#fill-screen").style.display = "block";
    document.querySelector("#fill-screen").style.backgroundImage = `url(${arr[info.target.id].img})`;

    setTimeout(() => {
        document.querySelector("#fill-screen").style.display = "none";
    }, 1000);
}); 