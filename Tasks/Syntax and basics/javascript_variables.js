// varLetConst.js

// Example of var
console.log("Example of var:");

var x = 10;
console.log("Initial value of x:", x); // Output: 10

if (true) {
    var x = 20; // Reassigning and re-declaring x inside block scope
    console.log("Value of x inside if block:", x); // Output: 20
}

console.log("Value of x outside if block:", x); // Output: 20
// Note: `var` is function-scoped or globally scoped, not block-scoped, so x is overwritten even outside the block.

// Example of let
console.log("\nExample of let:");

let y = 10;
console.log("Initial value of y:", y); // Output: 10

if (true) {
    let y = 20; // `y` is block-scoped, so this is a different `y`
    console.log("Value of y inside if block:", y); // Output: 20
}

console.log("Value of y outside if block:", y); // Output: 10
// Note: `let` is block-scoped, so the y inside the block does not affect the y outside the block.

// Example of const
console.log("\nExample of const:");

const z = 10;
console.log("Initial value of z:", z); // Output: 10

if (true) {
    const z = 20; // `z` is block-scoped, so this is a different `z`
    console.log("Value of z inside if block:", z); // Output: 20
}

console.log("Value of z outside if block:", z); // Output: 10

// Trying to reassign a const will throw an error
try {
    z = 30; // This will cause an error
} catch (error) {
    console.log("Error when trying to reassign z:", error.message); // Output: Assignment to constant variable.
}
