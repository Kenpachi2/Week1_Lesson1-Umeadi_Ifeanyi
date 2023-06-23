
//Converting a string to a number using parseInt() or parseFloat()
let stringNumber = "42";
let number = parseInt(stringNumber);
console.log(number); // Output: 42

let stringFloat = "3.14";
let floatNumber = parseFloat(stringFloat);
console.log(floatNumber); // Output: 3.14

//Convert a number to a string using toString() method or string concatenation
let striNumber = 42;
let numString = striNumber.toString();
console.log(numString); // Output: "42"

let myFloat = 3.14;
let floatString = myFloat + ""; // Using string concatenation
console.log(floatString); // Output: "3.14"

//Converting a string to an array using the split() method
let string = "Hello, Kenpachi!";
let array = string.split(" ");
console.log(array); // Output: ["Hello," "Kenpachi!"]
