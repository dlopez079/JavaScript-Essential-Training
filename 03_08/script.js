var pens;
pens = ["red", "blue", "green", "orange"];
girls = ["Amanda", "Susan", "Vanessa", "Kalise"];
fellas = ["Edwin", "Bobby", "Lucas", "Matthew", "Pablo"];
numbers = ["one", "two", "three", "four", "five", "six"];
linebreak = "";

//Displays the above array;
console.log(linebreak);
console.log("Before: ", pens);
console.log("Before: ", girls);
console.log("Before", fellas);
console.log("Before", numbers);

// PROPERTIES:
// Get a property of an object by name:
console.log(linebreak);
console.log("Array length for pens: ", pens.length);
console.log("Array length for girls: ", girls.length);
console.log("Array length for fellas: ", fellas.length);
console.log("Array length for numbers: ", numbers.length);

// METHODS:
// Reverse the array:
pens.reverse();
girls.reverse();
fellas.reverse();
numbers.reverse();

//Displays the above array reversed;
console.log(linebreak);
console.log("After Reverse: ", pens);
console.log("After Reverse: ", girls);
console.log("After Reverse:", fellas);
console.log("After Reverse: ", numbers);

// Remove the first value of the array:
pens.shift();
girls.shift();
fellas.shift();
numbers.shift();

//Displays the above array shift;
console.log(linebreak);
console.log("After Shift: ", pens);
console.log("After Shift: ", girls);
console.log("After Shift:", fellas);
console.log("After Shift: ", numbers);

// Add comma-separated list of values to the front of the array:
pens.unshift("purple", "black");
girls.unshift("Samantha", "Cortney");
fellas.unshift("George", "Jeffrey");
numbers.unshift("1", "2");

//Displays the above array comma-separated;
console.log(linebreak);
console.log("After Unshift: ", pens);
console.log("After Unshift: ", girls);
console.log("After Unshift:", fellas);
console.log("After Unshift: ", numbers);

// Remove the last value of the array:
pens.pop();
girls.pop();
fellas.pop();
numbers.pop();

//Displays the above array after last value was removed;
console.log(linebreak);
console.log("After Pop: ", pens);
console.log("After Pop: ", girls);
console.log("After Pop: ", fellas);
console.log("After Pop: ", numbers);

// Add comma-separated list of values to the end of the array:
pens.push("pink", "prussian blue");
girls.push("Karina", "Jasmin");
fellas.push("William", "Bryan");
numbers.push("one", "zero");

//Displays the above array after values were added to the end of the array;
console.log(linebreak);
console.log("After Push: ", pens);
console.log("After Push: ", girls);
console.log("After Push: ", fellas);
console.log("After Push: ", numbers);

// Find the specified position (pos) and remove n number of items from the array. Arguments: pens.splice(pos,n):
pens.splice(1, 1); // Remove black.
girls.splice(0, 2); //Remove Samantha and Cortney
fellas.splice(4, 3); //Remove Bobby William Bryan
numbers.splice(0, 2); //Remove "1", "2"

//Displays the above array after certain values are removed;
console.log(linebreak);
console.log("After Splice: ", pens);
console.log("After Splice: ", girls);
console.log("After Splice: ", fellas);
console.log("After Splice: ", numbers);

// console.log("After: ", pens);

// Create a copy of an array. Typically assigned to a new variable:
var newPens = pens.slice();
var newGirls = girls.slice(); //Slice method creates a copy of the girls array.
var newFellas = fellas.slice(); //Slice method creates a copy of the numbers array.
var newNumbers = numbers.slice(); //Slice method creates a copy of the numbers array..

console.log(linebreak);
console.log("New pens array: ", newPens);
console.log("New girls array: ", newGirls);
console.log("New fellas array: ", newFellas);
console.log("New numbers array: ", newNumbers);

// Return the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):
var pensResult = pens.indexOf(search, index);
var girlsResult = girls.indexOf(search, index);
var fellasResult = fellas.indexOf(search, index);
var numbersResult = numbers.indexOf(search, index);

console.log(linebreak);
console.log("The search result index is: ", pensResult);
console.log("The search result index is: ", girlsResult);
console.log("The search result index is: ", fellasResult);
console.log("The search result index is: ", numbersResult);

// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):
// var arrayString = pens.join(separator);
// console.log("String from array: ", arrayString);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
