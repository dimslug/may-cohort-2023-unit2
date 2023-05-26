/*
!   Operators
    - Plus          +
    - Times         *
    - Power         **
    - Dot           .
    - Assignment    =
    - Comparison    ==

    Used for:
        - Assign
        - Compare
        - Arithmetic
        - Logical
        - Conditionals

    Expressions & Statements

    keyword Name (expressions)  {
        code block
    }

    Statements are a collection of a keyword, and expression, and a code block.
*/

//!Comparison Operators
// Equal To - Outputs a boolean - true or false
console.log("3" == 3);

// Strict Equal to
console.log("Strictly equal to: ", "3" === 3); // one data type is a sting, one is a number, not strictly equals to

// Not Equal to
console.log("Not Equal to: ", "3" != 3); // asking if this is a true statement, if true outputs true, if false outputs false
console.log("Strict Not Equal to: ", "3" !== 3); // strictly not equal to

// Greater Than

3 > 2;

// Less Than
2 < 3;

//! AND
2 && 3;

//! OR
2 || 3;

//! Logical Operators
let x = 1;
console.log(x); // 1
x = x + 1;
console.log(x); // 2

let r = 10;
r += 1; // r = r + 1;
console.log("let r = 10", r);

// Subtraction
r -= 2;
console.log("r -= 2 =", r);

// Multiplications
r *= 2;
console.log("r *= 2 =", r)

// Reset Value
r=10;
console.log("Reset value of r to ", r);

// Division
r /= 2; // r = r / 2
console.log("r /= 2 =", r);

// Remainder (Modulus)
r %= 3; // r = r % 1;
console.log("r %= 2 =", r);

// Exponential
r **= 3; // r = r ** 3;
console.log("r **= 3 =", r);