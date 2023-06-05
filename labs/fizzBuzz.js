/*
    - Create a function called "fizzBuzz".
    - Within the function, create a loop that counts from 1 to 100.
      - Create a variable within the loop called "response".
    - For each iteration, evaluate the expression (i). 
      - For numbers evenly divisible by 3, store "Fizz" within "response".
      - For numbers evenly divisible by 5, store "Buzz" within "response".
      - For numbers evenly divisible by both 3 and 5, store "Fizz Buzz" within "response".
      - For numbers not divisible by either, store the value of the expression.
    - log the response variable within the console for each iteration.
    
    - After the function has completed, log a string that details how many different 
      "Fizz", "Buzz", and "Fizz Buzz" were found.
    
      example: "There were X Fizz Buzz, X Fizz, and X Buzz counted."
      hint:
        What kind of operator helps us with finding out division with remainders? 
        Consider how to store the values outside of the function.  
*/
let f = 0;
let b = 0;
let fb = 0;

function fizzBuzz() {
    for (let i = 1; i <= 101; i++) {

        let response = "";
        if (i == 101) {
            console.log(`There were ${fb} Fizz Buzz, ${f} Fizz, and ${b} Buzz counted.`);
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            fb += 1
            response = "Fizz Buzz"
            console.log(`${response}`);
        } else if (i % 5 == 0) {
            b += 1
            response = "Buzz"
            console.log(`${response}`);
        } else if (i % 3 == 0) {
            f += 1
            response = "Fizz";
            console.log(`${response}`);
        } else response = `${i}`; console.log(`${response}`);
    }
}

fizzBuzz();

// console.log(`There were ${fb} Fizz Buzz, ${f} Fizz, and ${b} Buzz counted.`)