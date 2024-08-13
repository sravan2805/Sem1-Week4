// Object representing a car
let car = {
    make: "Tesla",
    model: "Model S",
    year: 2023,
    
    // Method to print a description of the car using the this keyword
    getDescription: function() {
        console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
    }
};

// Call the method to demonstrate how the this keyword works
car.getDescription();
