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

console.log(me);    //  name: 'Hector',  hobbies: [ 'Read', 'Programming', 'Play Piano' ] }
console.log(me2);   // { name: 'Gerardo', age: 25 }

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
console.log(`Price of the cup after tax is: $${(cup.price * 1.15).toFixed(2)}`);    // Price of the cup after tax is: $13.80

// Square notation  
console.log(cup["size"]);   // small
console.log(cup["volume"]); // 235

