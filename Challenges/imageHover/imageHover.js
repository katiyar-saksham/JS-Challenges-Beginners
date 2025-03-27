const elem = document.querySelectorAll(".elem");
        var elemImage = elem1.querySelector("img");


        elem.forEach(function (event) {
            event.addEventListener("mouseenter", function () {
                event.querySelector("img").style.opacity = 1;
            });
            event.addEventListener("mouseleave", function () {
                event.querySelector("img").style.opacity = 0;
            });
            event.addEventListener("mousemove", function (dets) {
                event.querySelector("img").style.left = dets.x + "px";
                event.querySelector("img").style.top = dets.y + "px";
            });
        })