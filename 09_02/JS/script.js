var extLinks = document.querySelectorAll("a[href^='http']"); // Capture all http and https links in the dom and save it to the extLinks variable.

// Create a for look that will loop through the extlink variable which has all the a hrefs saved in it.
for (var i = 0; i < extLinks.length; i++) {
    // Create a for loop that will check for links that do not have a target and set the target to _blank.
    if (!extLinks[i].hasAttribute("target")) {
        extLinks[i].setAttribute("target", "_blank");
    }
}
