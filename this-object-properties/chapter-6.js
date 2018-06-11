/*** Chapter 6: Behavior Delegation ***/
// OLOO: Objects Linked to Other Objects
let Task = {
    setID: function(ID) {
        this.id = ID;
    },
    getID: function() {
        return this.id;
    }
};

let note = Object.create(Task);

note.setContent = function(ID, content) {
    this.setID(ID);
    this.content = content;
};

note.getContent = function() {
    return `The note ID ${this.getID()}, and its contents are ${this.content}`; 
};

note.setContent(4, "Hello wonderful world!");
console.log(note.getContent());                 // The note ID 4, and its contents are Hello wonderful world!

// 'Task' and 'note' are not classes (or functions), both are only objects. 'note' object is set up via object.create(Task) to its [[Prototype]] delegate to Task.

// Prototypal Inheritance Pattern (Object Oriented)
// 1. Declare Building abstract class
function Building (size, pricePerSquareFeet) {
    this.size = size;
    this.pricePerSquareFeet = pricePerSquareFeet;
}

// 2. Declare Building class methods
Building.prototype.calculateCost = function () {
    return "$" + (this.size * this.pricePerSquareFeet).toFixed(2);
};

// 3. Declare School abstract class
function School(size, pricePerSquareFeet, type = "School") {
    Building.call(this, size, pricePerSquareFeet, type);
    this.type = type;
}

// 4. "Inherit" Building the methods 
School.prototype = Object.create(Building.prototype);

// 5. Declare School methods
School.prototype.showType = function() {
    return `This school is a ${this.type}`
};

let itesm = new School("100", 200, "Univeristy");
let jfk = new School("75", 100, "Middle School");

console.log(itesm.calculateCost());
console.log(jfk.calculateCost());
console.log(itesm.showType());
console.log(jfk.showType());

// Delegation Pattern (Object Linked to Other Object)
// 1. Create object BuildingX with two properties as functions
let BuildingX = {
    init: function(size, pricePerSquareFeet) {
        this.size = size;
        this.pricePerSquareFeet = pricePerSquareFeet;
    },
    calculateCost: function() {
        return "$" + (this.size * this.pricePerSquareFeet).toFixed(2) + "X";
    }
};

// 2. Link SchoolX to BuildingX
let SchoolX = Object.create(BuildingX);

// 3. Add a create() method to the SchoolX object
SchoolX.create = function(size, pricePerSquareFeet, type) {
    this.init(size, pricePerSquareFeet);
    this.type = type;
}

// 4. Add a showType() method to the SchoolX object
SchoolX.showType = function() {
    return `This school is a ${this.type}`
};

let itesmX = Object.create(SchoolX);
itesmX.create("100", 200, "UniveristyX");

let jfkX = Object.create(SchoolX);
jfkX.create("75", 100, "Middle SchoolX");

console.log(itesmX.calculateCost());
console.log(jfkX.calculateCost());
console.log(itesmX.showType());
console.log(jfkX.showType());