/*** Chapter 3: Objects ***/

// Objects: collection of key/value pairs, that could be used to represent to 'something'
// Literal syntax
let me = {
    name: "Hector",
    hobbies: ["Read", "Programming", "Play Piano"]
};

// Constructed syntax
let me2 = new Object();
me2.name = "Gerardo";
me2.age = 25;

console.log(me); //  name: 'Hector',  hobbies: [ 'Read', 'Programming', 'Play Piano' ] }
console.log(me2); // { name: 'Gerardo', age: 25 }

// both makes the same type of object, there is no difference. Literal syntax is the most common way to create objects since the simplicity

// Types: JS currently has 6 types. string, number, boolean, null, undefined and object
// Functions is a subtype of object, named "callable object". functions are called first class, since they can handled just as objects
// Arrays are a form of objects, with a special internal structure

// Content of an Object: values can be accessed as properties with dot notation or square bracket notation
let cup = {
    color: "black",
    volume: 235,
    price: 12,
    size: "small"
};

// Dot notation
console.log(cup.color);
console.log(`Price of the cup after tax is: $${(cup.price * 1.15).toFixed(2)}`); // Price of the cup after tax is: $13.80

// Square notation  
console.log(cup["size"]); // small
console.log(cup["volume"]); // 235

// Computed Property Names: In ES6, it can be specified an expression surrounded by [] pair, in the key position

let prefix1 = "skill";
let prefix2 = "ability";

let mage = {
    [prefix1 + "Fireball"]: 23,
    [prefix1 + "Thunder"]: 12,
    [prefix2 + "Teleport"]: "Ability teleporting",
    [prefix2 + "Readmind"]: "Ability reading minds"
};

console.log("Spelldamage of Fireball: " + mage.skillFireball);
console.log("Spelldamage of Thunder: " + mage.skillThunder);

// Duplicating Objects via ES6 Object.assign()
let objectA = {
    colors: ["red", "black", "blue"],
    price: 12.99,
    country: "Mexico"
};

let objectB = Object.assign({}, objectA);

console.log(objectB); // { colors: [ 'red', 'black', 'blue' ], price: 12.99, country: 'Mexico' }
console.log(objectA === objectB); // false, different objects swallow copied

// Property Descriptors: distinction between the characteristics of properties
let countryMexico = {};

Object.defineProperty(countryMexico, "name", {
    value: "Mexico",
    writable: false,
    configurable: false,
    enumerable: true
});

console.log(countryMexico); // { name: 'Mexico' }

countryMexico.name = "France";

console.log(countryMexico); // { name: 'Mexico' }, since writable is false

// writable: change the value of a property
// configurable: modify its descriptor definition
// enumerable: controls if a property will show up in certain object-property enumerations

// Immutability: make properties or objects that cannot be changed (either by accident or intentionally)
// Object Constant, create a constant inside an object.
let constant_me = {};

Object.defineProperty(constant_me, "ssn", {
    value: "025-44-4457",
	writable: false,
    configurable: false,
    enumerable: true
});

constant_me.name = "Hector";

console.log(constant_me);   // { ssn: '025-44-4457', name: 'Hector' }

// Prevent Extensions, prevent an object to be added more properties
let product = {
    name: "product-name",
    price: 0.00
};

Object.preventExtensions(product);

product.size = "large";

console.log(product);   // { name: 'product-name', price: 0 }

// Seal: Object.preventExtension(...) + configurable: false to all existing properties.
// Freeze: Object.seal(...) + writable: false to all existing properties. (Highest level of immutability)