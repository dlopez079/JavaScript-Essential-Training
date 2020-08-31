const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var timer = [0, 0, 0, 0]; // We need to change the format so that we capture the minutes, seconds, hundredth of seconds and thousandth of seconds.

// Add leading zero to numbers 9 or below (purely for aesthetics):

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2]; //Display current time in time format.
    theTimer.innerHTML = currentTime; // We will take the html avlue of theTimer and pass it to the timer variable.
    timer[3]++; // Then we increment the last value (hundredth of seconds) which is index number 3 of the array.
    timer[0] = Math.floor(timer[3] / 100 / 60); // Timer[0] represents the minutes of the clock.  You divide the hundredths of a second over 100 then divide 60 to get minutes.
    timer[1] = Math.floor(timer[3] / 100 - timer[0] * 60); // Timer[1] represents the seconds of the clock.  You divide the hundreths of a second over 100 and subtract hour * 60.
    timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000); //Timer[2] represenets the hundredths of a second.
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    console.log(textEntered);
}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;

    // Create an interval every millionth of a second when textEnteredLength is equal to 0.
    if (textEnterdLength === 0) {
        setInterval(runTimer, 10);
    }

    console.log(textEnterdLength);
}

// Reset everything:
function reset() {
    console.log("reset button has been pressed!");
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
