let favoriteFruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
console.log(favoriteFruits);
// Access the first and last elements
let firstFruit = favoriteFruits[0];
let lastFruit = favoriteFruits[favoriteFruits.length - 1];

console.log(`First fruit: ${firstFruit}`);
console.log(`Last fruit: ${lastFruit}`);
//modify second element
favoriteFruits[1] = "Blueberry";
console.log(`Modified fruits array: ${favoriteFruits}`);

// Demonstrate push method
favoriteFruits.push("Mangoes");
console.log(`After push: ${favoriteFruits}`);

// Demonstrate pop method
favoriteFruits.pop();
console.log(`After pop: ${favoriteFruits}`);

// Demonstrate shift method
favoriteFruits.shift();
console.log(`After shift: ${favoriteFruits}`);

// Demonstrate unshift method
favoriteFruits.unshift("Oranges");
console.log(`After unshift: ${favoriteFruits}`);

