// variables are containers that hold data values.
/* 
    Quick Key: Alt+Shift+A

    Variable Keywords:
        - var
        - let
        - const
*/


let a = 2;

    let   b   =    2;
//  (1)  (2) (3)  (4)
/*
    1. JS keyword to denote the creation of a variable
    2. The name of the variable. Typically names for what it should be holding
            ex let streeAddress = "123 Main Street";
    3. Assignment operator
    4. initial value
    5. closing statement
 */

//! Variable Initialization
// Initialization is to the right side of the assignment operator (=)
let x = 10; // <-- 10 has been initialized to the variable "x"

//! Assigning to Other Variables

let first = "john ";
let last = "smith";

let fullname = first + last;

//! Additional Examples

let c;

console.log("Declaration", c);

c=10; // assigning our variable
console.log("initilization 1:", c);

c=33; // reassigning the value of our variable
console.log("Reassigning:", c);

let y = 'Hello';
//  emmet for console.log() -> clg
console.log("Both", c, y);

//! Const
// "new" in ES6: declases variables meant to remain unchanges.

let today = "Great!";
const javaScript = "Wonderful!";
console.log(today, javaScript);

today = "Lovely!";
console.log(today, javaScript);

javaScript = "Super!";
console.log(today, javaScript);