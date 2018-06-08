/*** Chapter 5: Prototypes ***/
// [[Prototype]]: Objects in JavaScript have an internal property that is the reference / link to another object.
let myObjectA = {
    a: 2
};

let myObjectB = Object.create( myObjectA );
console.log(myObjectB.a);   // 2

// It creates an new myObjectB linked by the [[Prototype]] to myObjectA.  (line 7)
// 1. Check if the property 'a' exists in myObjectB
// 2. Property 'a' doesn't exist, check the in the [[Prototype]] of there is a link
// 3. There is a link to [[Prototype]] of myObjectA
// 4. Check if the property 'a' exists in myObjectA
// 5. Property 'a' exist, retrieve the value

// This look-up on the [[Prototype]] chain stops once the property is found or the chain ends (linked to null)

// Setting & Shadowing Properties
// Shadowing: If the property ends up in multiple Objects itself it will start on the lowest [[Prototype]] chain.
console.log(myObjectA.a);   // 2
console.log(myObjectB.a);   // 2

console.log(myObjectA.hasOwnProperty("a"));  // true
console.log(myObjectB.hasOwnProperty("a"));  // false

myObjectB.a++;              // implict shadowing
console.log(myObjectA.a);   // 2
console.log(myObjectB.a);   // 3

console.log(myObjectB.hasOwnProperty("a"));  // true

// 'Class'
// Delegation: link between two objects
function doSomething() {
    let b = 2;
    let c = 3;
}
let myObjectC = new doSomething();
console.log(Object.getPrototypeOf(myObjectC));  // doSomething {}

// Creates a link between two objects (doSomething function and myObjectC) are both objects
// myObjectC can delegate the property/function access to another object (doSomething() function)
// JavaScript do NOT copy properties, it creates a link (called prototype) between the objects

// Mechanics to simulate 'class' in JavaScript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getPublicInformation = function() {
    return `Hello my name is ${this.name} and my age is ${this.age}`;
}

let alice = new Person("Alice", 32);
let bob = new Person("Bob", 24);

console.log(alice.getPublicInformation());  // Hello my name is Alice and my age is 32
console.log(bob.getPublicInformation());    // Hello my name is Bob and my age is 24

// 1. this.name = name adds the .name property to each object, and so on for every property
// 2. Person.prototype.getPublicInformation, adds a property function to the Person Prototype that every object share
// 2.1 Each object created via 'new' keyword has its [[Prototype]] linked to the Person [[Prototype]] so it can access the properties declared in their 'parent' chain link.