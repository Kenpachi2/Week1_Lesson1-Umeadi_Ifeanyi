
let num1 = 10;
let num2 = 5;

console.log("Starting the calculation...");

console.log("num1:", num1);
console.log("num2:", num2);

let sum = num1 + num2;
console.log("Sum:", sum);

let difference = num1 - num2;
console.log("Difference:", difference);

if (difference < 0) {
  console.warn("Warning: The difference is negative!");
}

if (num2 === 0) {
  console.error("Error: Cannot divide by zero!");
} else {
  let division = num1 / num2;
  console.log("Division:", division);
}

console.log("Calculation completed You are doing well!");
