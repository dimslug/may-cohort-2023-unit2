//! For 

/*
    3 Parameteres
        1 Initial Expression
        2 condition
        3 increment expression

*/

let i = 7;
// (1)       (2)    (3)
for(i = 0; i < 10; i++) {
    console.log(i);
}

console.log("Global Variable: ", i);

/*
    keywor(initial expression; condition; increment) {
        code block
    }
*/

for(let i = 10; i <= 100; i += 10) {
    console.log(i);
}


for(let i = -10; i <= 20; i += 2) {
    console.log(i)
}

for(let i = 10; i >=0; i--) {
    console.log(i);
}

for (i = 0; i >= -25; i-=2) {
    console.log(i);
}

for (i = 0; i != -25; i--) {
    console.log(i);
}



//! Using a for loop, go through a name and display each letter individually
let firstName = "Steve";
for(i = 0; i <= firstName.length; i++) {

    console.log(`${firstName.charAt(i)}`);
}

//! Challenge: Make a for loop where you add up all the numbers from 1 to 50. This should equal to 1275.

/* 

    1 + 2 + 3 + 4 + 5 etc...

    1 + 1 = 2
    2 + 2 = 4
    3 + 3 = 6
    6 + 6

*/

// let num = 1

/*
    keyword(initial expression; condition; increment) {
        code block
    }
*/

let sum = 0;

for(i = 0 ; i <= 50; i++) {

    sum += i
    console.log(sum)


}