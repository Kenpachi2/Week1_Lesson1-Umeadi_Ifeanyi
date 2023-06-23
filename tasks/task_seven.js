
//Using the typeof operator to check the type of a variable
let num = 42;
let str = "Vampires";
let bool = true;

console.log(typeof num); //Node Output: "number"
console.log(typeof str); //Node Output: "string"
console.log(typeof bool); //Node Output: "boolean"

//Comparing values using the equality (==) and strict equality (===) operators
console.log(5 == "5"); //Node Output: true
console.log(5 === "5"); //Node Output: false

//Understanding truthy and falsy values in JavaScript
let numFalse = 0;
let strFalse = "";
let numTrue = 5;
let strTrue = "camp";

console.log(Boolean(numFalse)); // Output: false
console.log(Boolean(strFalse)); // Output: false
console.log(Boolean(numTrue)); // Output: true
console.log(Boolean(strTrue)); // Output: true

