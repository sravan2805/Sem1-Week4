// Array of numbers
let numbers = [1, 2, 3, 4, 5];

// Use map to create a new array with each number squared
let squaredNumbers = numbers.map(num => num * num);
console.log(`Squared numbers: ${squaredNumbers}`);

// Use filter to create a new array with only even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(`Even numbers: ${evenNumbers}`);

// Use reduce to calculate the sum of all numbers in the array
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Sum of all numbers: ${sum}`);
