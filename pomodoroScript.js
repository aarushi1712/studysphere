

let timerInterval;

// Timer variables
let workTime = 25;
let breakTime = 5;
let seconds = "00";

// On window load
window.onload = function() {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    // Add active class to work title
    document.getElementById('work').classList.add('active');
};

// Start the timer
function start() {
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;
    let breakCount = 0;

    // Timer function
    function timerFunction() {
        // Update display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        seconds--;

        if (seconds === 0) {
            workMinutes--;

            if (workMinutes === -1) {
                if (breakCount % 2 === 0) {
                    // Switch to break
                    workMinutes = breakMinutes;
                    breakCount++;
                    // Switch titles
                    document.getElementById('work').classList.remove('active');
                    document.getElementById('break').classList.add('active');
                } else {
                    // Switch to work
                    workMinutes = workTime;
                    breakCount++;
                    // Switch titles
                    document.getElementById('break').classList.remove('active');
                    document.getElementById('work').classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    // Start the interval timer
    timerInterval = setInterval(timerFunction, 1000);
}

// Reset the timer
function resetTimer() {
    // Stop the interval timer
    clearInterval(timerInterval);

    // Reset timer variables
    workTime = 25;
    breakTime = 5;
    seconds = "00";

    // Update the DOM
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    // Reset buttons
    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";

    // Reset titles
    document.getElementById('work').classList.add('active');
    document.getElementById('break').classList.remove('active');
}