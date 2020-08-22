//Retrieve the hands of the clock from the DOM and save them into a variable.
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// Create a function so the hands of the clock move.
function runTheClock() {
    var date = new Date(); // Retrieve the current date and save it into a variable called date.
    console.log(date); //Console the date to see if it is correct.
    let hr = date.getHours(); // Retrieve the hour from the date.
    let min = date.getMinutes(); // Retrieve the minutes from the date.
    let sec = date.getSeconds(); // Retrieve the seconds from the date.
    console.log("Hours: " + hr); // Confirm that you extracted the Hours from the date with console log.
    console.log("Minutes: " + min); // Confirm that you extracted the Minutes from the date with console log.
    console.log("Seconds: " + sec); // Confirm that you extracted teh Seconds from the date with console log..

    let hrPosition = (hr * 360) / 12 + (min * 360) / 60 / 12; // Determine the position of the Hour hand.
    let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60; // Determine the position of the Minute hand.
    let secPosition = (sec * 360) / 60; // Determine the position of the Second hand.

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"; // Move the Hour hand to appropriate position on clock.
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"; // Move the Minute hand to the appropriate postion on the clock.
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"; // Move the Second hand to the appropriate position on the clock.
}
var interval = setInterval(runTheClock, 1000); // Set an interval where the function continues to run every second.
