// Define the ES6 class Animal
class Animal {
    // Constructor method to initialize properties
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    // Method to print the animal's details
    printDetails() {
        console.log(`Name: ${this.name}, Species: ${this.species}`);
    }
}

// Create an instance of the Animal class
let lion = new Animal("Simba", "Lion");

// Call the printDetails method on the instance
lion.printDetails();
