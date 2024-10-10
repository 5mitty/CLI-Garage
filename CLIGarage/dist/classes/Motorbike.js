// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
    // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        // Call the constructor of the parent class, Vehicle
        super();
        // Initialize properties of the Car class
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // Check if the wheels array has 4 elements
        // If not, create 4 new Wheel objects
        // Otherwise, use the provided wheels array
        if (wheels.length !== 2) {
            this.wheels = [new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    doAWheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    printDetails() {
        super.printDetails();
        console.log(`Motorbike Details: ${this.vin}, ${this.make}, ${this.model}, ${this.year}, ${this.weight}, ${this.topSpeed}, ${this.color}, and ${this.wheels}.`);
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
