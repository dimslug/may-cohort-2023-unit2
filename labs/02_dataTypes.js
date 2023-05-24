//! Booleans : true / false
let on = true;
console.log(on);

let off = false;
console.log(off);

//! Null
let empty = null;
console.log(empty);

//! Undefined
let undef = undefined; // instead of assigning our undef variable a datatype of undefined, we can simply just declate the variable.
console.log(undef);

//! Numbers
let degrees = 90;
console.log(degrees);

let precise = 999999999999999; // 15 9's
console.log(precise);

let rounded = 9999999999999999; // 16 9's - JS gives us space for 16 9s
console.log(rounded);

let notQuite = 0.2 + 0.1; // JS rounds out a certain number, so if math is needed, be aware
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//! Strings
// Represent text, wrapped in 'Single' or "Double" quotes.
let stringOne = "double quote";
let StringTwo = 'single quote';

console.log(stringOne, StringTwo);

// Numbers vs String
let first = 1234 + 567;
let second = "1234" + "567";

console.log(first);
console.log(second);

//! Objects
let frodo = {
    race: "Hobbit",
    rings: 1,
    sting: true,
}

console.log(frodo);

//! Arrays
let list = ['item1', 'item 2', 'item 3'];
// (1)     (2)          (3)
/*
    1: name of the array = "list"
    2: the array is within square brackets
    3: each item, regardless of datatype, is separated by commas
*/

console.log(list);

//! DataType Literals
let car = "Ford";
let dec = 12;

