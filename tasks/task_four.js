
//Arrays
let numbers = [1, 2, 3, 4, 5];

console.log(numbers); // Output: [1, 2, 3, 4, 5]

let specificElement = numbers[2];
console.log("Specific Element:", specificElement); // Output: Specific Element: 3

numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4, 5]

numbers.shift();
console.log(numbers); // Output: [2, 3, 4, 5]

numbers.unshift(0);
console.log(numbers); // Output: [0, 2, 3, 4, 5]
