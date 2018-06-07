/*** Chapter 4: "Class" Objects ***/
// Classes are a design pattern. JS have a similar syntax to other languagues, 'new', 'class', 'super' keywords. But they are 'sugar-syntax to prototypes.

// Constructor: The method job to initialize any information the instance needs.
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

// 'new' keyword makes an instance of the Class. Makes a copy of the original blueprint.
let vehicle1 = new Vehicle(2, "Generic Vehicle");
vehicle1.ignition();    // Turning on engine for a: Generic Vehicle

// Class Inheritance: when classes are inherited a copy of behavior from parent-child occurs.
class Car extends Vehicle {
    constructor(model) {
        // 'super' keyword, calls the parent constructor.
        super(4, "Car");
        this.model = model;
    }

    drive() {
        // Polymorphism: having different functions at multiple levels of an inheritance chain with the same name. It is a copy of behavior, not a reference link.
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

// Faking classes in JS makes more problems than solving present real problems.