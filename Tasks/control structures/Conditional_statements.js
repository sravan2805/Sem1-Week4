// Function to check if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is positive.`);
    } else if (num < 0) {
        console.log(`${num} is negative.`);
    } else {
        console.log(`${num} is zero.`);
    }
}

// Example usage
let number = -1; // You can change this number to test different cases
checkNumber(number);
