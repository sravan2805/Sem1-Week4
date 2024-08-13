// dataTypes.js

// String
let str = "Hello, World!";
console.log("Value:", str);
console.log("Type:", typeof str); // Output: string

// Number
let num = 42;
console.log("Value:", num);
console.log("Type:", typeof num); // Output: number

// Boolean
let bool = true;
console.log("Value:", bool);
console.log("Type:", typeof bool); // Output: boolean

// Null
let nullValue = null;
console.log("Value:", nullValue);
console.log("Type:", typeof nullValue); // Output: object
// Note: typeof null is a known JavaScript quirk; it returns "object"

// Undefined
let undefinedValue;
console.log("Value:", undefinedValue);
console.log("Type:", typeof undefinedValue); // Output: undefined

// Symbol
let sym = Symbol("uniqueIdentifier");
console.log("Value:", sym.toString()); // Symbols need to be converted to string for readable output
console.log("Type:", typeof sym); // Output: symbol
