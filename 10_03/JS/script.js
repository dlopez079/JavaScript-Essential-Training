const IMAGES = document.querySelectorAll("img"); // Search for any image on the DOM and save it into a contant called IMAGES.

// Create a function that will loop through the different size files that you have in the image folder.
function makeSrcset(imgSrc) {
    let markup = []; // We set up an emtpy array called markup.
    let width = 400; // We default the smallest size width to 400.

    // loop through the 5 different size images that you have for each image in the image folder.
    for (let i = 0; i < 5; i++) {
        markup[i] = imgSrc + "-" + width + ".jpg" + width + "w"; // This generates the markup for each image.
        width += 400; // Increment the width by 400 since that's how the files are saved.
    }
    return markup.join();
}

// Loop trough all of the images.
for (let i = 0; i < IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src"); // Pull the attributes from all the images and save it to a variable imgSrc.
    imgSrc = imgSrc.slice(0, -8); // Slice the last 8 values from the array.
    let srcset = makeSrcset(imgSrc); // Created a function that will pull markup for me and save it to the variable srcset.
    console.log(srcset); // Console.log the attributes for all images to make sure you've captured them.

    let type = IMAGES[i].getAttribute("data-type"); // Pull the data-type attributes from the images.
    console.log(type); // Console.log the data-type attribute for each image.
}
