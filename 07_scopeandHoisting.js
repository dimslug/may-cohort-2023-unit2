let x = 12;

function scope() {
    let x = 33;
    console.log(x);
}

scope();
console.log(x);

let y = 12;

function scope2() {
    y = 33;
    console.log(y);
}

scope2();
console.log(y);

/*
    Variable keywords
        - cons: cannot be reassigned
        - var: scoped to the nearest function block
        - let: scoped to the enarest enclosing block
*/

//* Var

var v = 12

function varTest() {
    var v = 33;

    if(true) {
        var v = 45;
        console.log(`Var - withing IF: ${v}`); // 33
    }

    console.log(`Var - Outside IF: ${v}`); // 45
}

varTest();
console.log(`Var - Outside Function: ${v}`); // 12

//* LET Example

var l = 12

function varTest() {
    let l = 33;

    if(true) {
        let l = 45;
        console.log(`Var - withing IF: ${l}`); //45
    }

    console.log(`Var - Outside IF: ${l}`); // 33
}

varTest();
console.log(`Var - Outside Function: ${l}`); // 12

//! Hoisting
/*
    - JS reasd from top to bottom in two different passes
        1st pass:
            - made by the compiler. this is where hoisting is initiated
            - compiled for execution
        2nd pass:
            - variable assigned
            - executes any hoisted code
*/


let firstName= "everly";
console.log(firstName);

b();

function b() {
    console.log("I have been hoisted!");
}

let notHoisted = () => console.log('not hoisted');
notHoisted();
