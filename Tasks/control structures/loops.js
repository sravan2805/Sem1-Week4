// For loop to print numbers from 1 to 10
console.log("for loop")
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("while loop")
// Initialize the counter
let j = 10;
// While loop to print numbers from 10 to 1
while (j >= 1) {
    console.log(j);
    j--; // Decrement the counter by 1
}
console.log("Do while loop")
// Initialize the counter and the even number
let count = 0;
let number = 2;

// Do...while loop to print the first 5 positive even numbers
do {
    console.log(number);
    number += 2; // Move to the next even number
    count++; // Increment the count
} while (count < 5);
