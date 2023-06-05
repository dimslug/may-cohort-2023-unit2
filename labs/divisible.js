/*Your work will result in:

A file named divisible.js
Within divisible.js, a function named divisible which takes two arguments and handles our logic.
Within the divisible function, the remainder, dividend and divisor variables to store our values.
Within the divisible function, if...else conditional logic to return true or false
A program that correctly identifies whether or not one number is evenly divisible by the other.

Declare a function named divisible passing in dividend and divisor as its two arguments.
Within the divisible code block, initialize a remainder variable and assign it the value of the remainder of your dividend and divisor arguments.Do this by utilizing the modulus % operator.

Within the divisible code block, print the value of your remainder variable to make sure it is what you expect.

Within the divisible code block, write an if statement to check if the value of remainder is equal to 0 and if it is then return true.
Within the divisible code block, write an else statement which returns false. */

function divisible(dividend, divisor) {
    let remainder = dividend % divisor;
    if (remainder == 0) {
        // return `true`;
        console.log(`True`);
    } else {
        // return `false`;
        console.log(`False`);
    }
}

divisible(10, 3);
divisible(10, 5);