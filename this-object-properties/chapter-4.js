/*** Chapter 4: "Class" Objects ***/
// Classes are a design pattern. JS have a similar syntax to other languagues, 'new', 'class', 'super' keywords. But they are 'sugar-syntax to prototypes.

class Vehicle {
    constructor(wheels, type) {
        this.wheels = wheels;
        this.type = type;
    }

    ignition() {
        console.log("Turning on engine for a:", this.type);
    }

    drive() {
        this.ignition();
    }
}

let vehicle1 = new Vehicle(2, "Generic Vehicle");
vehicle1.ignition();    // Turning on engine for a: Generic Vehicle

class Car extends Vehicle {
    constructor(model) {
        super(4, "Car");
        this.model = model;
    }

    drive() {
        super.drive();
        console.log("Driving at 300km/h");
    }
}

let teslaX = new Car("Tesla Model X");
teslaX.drive(); // Turning on engine for a: Car, Driving at 300km/h

class Airplane extends Vehicle {
    constructor(model) {
        super(0, "Airplane");
        this.model = model;
    }

    takeoff() {
        console.log("Taking off in 3, 2, 1...")
    }

    fly() {
        this.takeoff();
        console.log("Flying at 800km/h");
    }
}

let boeing707 = new Airplane("Boeing 747");
boeing707.fly();    // Taking off in 3, 2, 1... Flying at 800km/h