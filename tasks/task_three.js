
let isTrue = true;
let isFalse = false;

// Logical Operators
let andResult = isTrue && isFalse;
console.log("AND Result:", andResult); //Nodemon output: AND Result: false

let orResult = isTrue || isFalse;
console.log("OR Result:", orResult); //Nodemon output: OR Result: true

let notResult = !isTrue;
console.log("NOT Result:", notResult); //Nodemon output: NOT Result: false

// Conditional Statements
if (isTrue) {
  console.log("isTrue is true. Perform some action.");
} else {
  console.log("isTrue is false. Perform a different action.");
}

if (!isFalse) {
  console.log("isFalse is false. Perform some action.");
} else {
  console.log("isFalse is true. Perform a different action.");
}
