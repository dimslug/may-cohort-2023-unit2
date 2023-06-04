/* 
! Funtions
    - block of code that preforms a particular task
    - simplified program(s) that run a task when invoked

    2 different types
        - declaration
        - expression

*/

//? Declaration

/*
    structure:
    (1)      (2)
    function hi() {
        code block...
    }


    1: keyword
    2: name of our function

        * is hoisted
*/

function hi() {
    console.log('hi');
}

//? Expression

/*

    let hey = function hi() {
        code block
    }

    let variableName = function functionName() {
        code block...
    }

    1: variable "hey" is now representative of the function hi();
*/

let hey = function hello() {
    console.log("Hey there!");
}

function coffeeMaker() {
    console.log("brewing...");
}

coffeeMaker(); // this is the on switch

// create a function that when invoked list out the numbers 1 through 10

function numBers() {
    //let i = 7;
    for( i = 1; i <= 10; i++) {
        console.log(i);
    }
}

numBers();


// fiven the array, create a function that lists out the values individually

let arr = ['this', 'is', 'really', 'cool'];

function listValues() {
    for (let element of arr) {
        console.log(element);
    }
}

listValues();

/*
    ! Parameters

    structure

                (1)
    function hi(name) {
                            (2)
        console.log(`hi, ${name}`)
    }
        (3)
    hi("Dave");
    
    1: the parameter(s) that the function is accepting or holding
    2: using string interpolation, we can refer to the parameter given to the function
    3: this is where we define what the parameter's value will be
*/

function newCoffeeMaker(filter) {
    console.log(`Maker is brewing ${filter}`);
}

newCoffeeMaker(`coffee`);
newCoffeeMaker(`tea`);
newCoffeeMaker(`soup`);

/*
- Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function fullName(firstName, lastName) {
    console.log(`Hello, my name is ${firstName} ${lastName}`);
}

fullName(`Dominic`, `Altobell`);


//! Arguments
let desc1 = "tall person";
let desc2 = "short person";

let thisFunction = function(info) {
    console.log(info);
}

thisFunction(desc1); // <--- desc1 is our argument
thisFunction(desc2); // <--- desc2 is our argument

/*
    - "info" is our function parameter
    - variables "desc1" and "desc2" are the arguments being passed into the function

*/

//! Arrow Functions
/*
    structure:
    (1)     (2)
    let x = () => {
        code block...
    }

    1: meed tp set the arrow function winthin a variable
    2:"fat arrow" to signify its a function

    - arrow functions were introduce in ES6 theye are basically just a more concise way to write function expressions - NOT declarations
        - means that arrow functions are NOT hoisted

    two types:
        -concise body
        -block body
*/

//? Concise body
let conciseArrow = () => console.log("Hellow");

//? Block Body
let blockArrow = () => {
    let a = "a";
    return a;
}

//* passing parameters

let apples = color => `the apple is ${color}`;
console.log(apples("red"));
console.log(apples("green"));
console.log(apples("tellow"));

let fruit = (type, count) => {
    let numOfFruit = count;
    return `Them are ${numOfFruit} ${type}`;
}

console.log(fruit("apples", 10));
console.log(fruit("pears", 5));
console.log(fruid("strawberries", 9));

let books = (author, tile) =>  console.log(`$"{title}": by ${author}`);
books('Stephen King', "IT")

//! Return
/*
    let hi = () => {
        (1)
        return "hi";
    }

    let newGreeting = hi();
    console.log(newGreeting);

    1: the keyword that brings our data out of our function
    2 we need a variable to hold the value of the return
    3  when called, the function become the value of the return
        - in this case: hi


*/

let fName = first => {
    return "steve";
}

let myname = fName();

function capitalizeName(first) {
    let capName = '';

    for(l in first) {
        if (l === 0) {
            capName += first[1].toUpperCase();
        }   else {
            capName += first[1].toLowerCase();
        }
    }

    return capName;
}

let nameSet = capitalizeName(myName);
console.log(`${nameSet}, how are you today?`);

//! IIFE

/*
    - immediatly invoked function expression
    - helps allocate space in memory for anonymous functions

*/

(function() {
    console.log("IIFE Fired")
})();