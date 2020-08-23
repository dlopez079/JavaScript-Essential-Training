const CTA = document.querySelector(".cta a"); // Set up a constant for the button.
const ALERT = document.querySelector("#booking-alert"); // Set up a constant for the booking alert message.

CTA.classList.remove("hide"); // Remove the "HIDE" class from the button so it displays on the page.
ALERT.classList.add("hide"); // Add the "HIDE" class to the alert so it does not display.

// Create a function that will toggle the HIDE class on and off.
function reveal(e) {
    e.preventDefault(); // Prevent the page from scrolling to the top when you click the button.
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

// Create an event handler for the button
CTA.onclick = reveal;
