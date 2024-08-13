// Constructor function for creating Car objects
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Add a method to the Car prototype to print the car's details
Car.prototype.printDetails = function() {
    console.log(`Car Details: ${this.year} ${this.make} ${this.model}`);
};

// Create instances of the Car object
let car1 = new Car("Toyota", "Camry", 2021);
let car2 = new Car("Honda", "Civic", 2022);

// Call the printDetails method on the instances
car1.printDetails(); 
car2.printDetails(); 
