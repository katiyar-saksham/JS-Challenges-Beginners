let countdown, timeLeft, initialTime, isStopwatch = false;
        let startTime, elapsedTime = 0, stopwatchInterval;

        function start() {
            if (isStopwatch) {
                startStopwatch();
                return;
            }

            let minutes = parseInt(document.getElementById("minutes").value) || 0;
            let seconds = parseInt(document.getElementById("seconds").value) || 0;
            timeLeft = minutes * 60 + seconds;

            if (isNaN(timeLeft) || timeLeft <= 0) {
                alert("Enter valid time!");
                return;
            }

            initialTime = timeLeft;
            clearInterval(countdown);
            countdown = setInterval(updateCountdown, 1000);
        }

        function updateCountdown() {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                document.getElementById("timerDisplay").textContent = "Time's Up!";
                document.getElementById("beepSound").play();
                document.getElementById("progressBar").style.width = "0%";
                return;
            }

            timeLeft--;
            updateDisplay();
            document.getElementById("progressBar").style.width = (timeLeft / initialTime) * 100 + "%";
        }

        function pause() {
            if (isStopwatch) {
                clearInterval(stopwatchInterval);
            } else {
                clearInterval(countdown);
            }
        }

        function reset() {
            if (isStopwatch) {
                clearInterval(stopwatchInterval);
                elapsedTime = 0;
                updateStopwatchDisplay();
                return;
            }

            clearInterval(countdown);
            timeLeft = initialTime;
            updateDisplay();
            document.getElementById("progressBar").style.width = "100%";
        }

        function updateDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById("timerDisplay").textContent =
                String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
        }

        function toggleMode() {
            isStopwatch = !isStopwatch;
            document.getElementById("modeTitle").textContent = isStopwatch ? "Stopwatch" : "Countdown Timer";
            reset();
        }

        function startStopwatch() {
            startTime = Date.now() - elapsedTime;
            stopwatchInterval = setInterval(() => {
                elapsedTime = Date.now() - startTime;
                updateStopwatchDisplay();
            }, 100);
        }

        function updateStopwatchDisplay() {
            let seconds = Math.floor(elapsedTime / 1000);
            let minutes = Math.floor(seconds / 60);
            seconds %= 60;
            document.getElementById("timerDisplay").textContent =
                String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
        }