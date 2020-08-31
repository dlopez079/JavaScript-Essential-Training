const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

// Add leading zero to numbers 9 or below (purely for aesthetics):

// Run a standard minute/second/hundredths timer:

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    console.log(textEntered);
}

// Start the timer:
function start() {
    let textEnteredLength = testArea.value.length;
    console.log(textEnteredLength);
}

// Reset everything:
function reset() {
    console.log("Reset button has been pressed!");
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false); // Manipulate the test area when there is an input.  The length of the input is captured in the value.  Value lenth is then console.logged with the spellcheck function.
testArea.addEventListener("keyup", spellCheck, false); // Manipulate the test area when there is an input.  The input is captured in a value.  Value is then console.log within the start function.
resetButton.addEventListener("click", reset, false); // Add an a listener for the "RESET" button.  When the button is clicked, we will call the reset function which will console.log "RESET BUTTON HAS BEEN PRESSED!".
