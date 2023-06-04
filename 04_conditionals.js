//! Conditionals
/* 
    Falsy
        - false
        - 0
        - empty strings ( "", '' )
        - null
        - undefined
        - NaN (not a number)

    Conditionals evaluates an expression and responds if it is true.
*/

let isOn = true;

if (isOn == true) {
    console.log('The light is on!');
}

/* Structure
    if(expression condition evaluated) {
        code that runs if expression is true
    }
*/

if(isOn) {
    console.log("There is light!");
}

isOn = false;
if(isOn == false) {
    console.log('The light is off...')
}

//! Else - If Else Statement
let weather = 75;

if(weather < 70) {
    console.log('Wear a jacket.');
} else {
    console.log("No jacket needed!");
}

let rain = true;
if(rain && weather < 70) {
    console.log('Wear a jacket and boots.');
} else {
    console.log('No boots needed.');
}

rain = false;
if (weather < 70 || rain) {
    console.log('Get your rain jacket');
} else {
    console.log('Going to be nice.');
}

/*
Use this string: let name = 'sAmwISe';

Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    
Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    
Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/


// let grade = 88; //test 1

let grade = 73;

if(grade>= 75) {
    console.log("please see teacher");
} else if(grade >= 69) {
    console.log("passing");
} else {
    console.log("failing");
}

/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 24;

if (age <= 17) {
    console.log("Sorry, you're too young to do anything")
} else if(age >= 25) {
    console.log("You can rent a car!");
} else if(age >= 21) {
    console.log("You can drink!");
} else if (age >= 18) {
    console.log("you can Vote!");
}


if (age <= 17) {
    console.log("Sorry, you're too young to do anything")
} else if(age >= 18 && age < 21) {
    console.log("You can rent a car!");
} else if(age >= 21 && age < 25) {
    console.log("You can drink!");
} else if (age >= 25) {
    console.log("you can Vote!");
}

//! Switch
/* 
    Keywords:
        - switch
        - case 
        - break
        - default

        frame -

        switch(expressions) {
            case:
                break;
            default
        }
*/

let officeCharacter = "Pam";

switch (officeCharacter) {
    case "Michael" :
        console.log("My mind is going a mile an houre.");
        break;
    case "Dwight" :
        console.log("Perfectenschlag");
        break;
    case "Jim" :
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default :
        // console.log("I'm sorry but do I know you?");
        console.log(`I'm sorry, ${officeCharacter} but do I know you?`);
    }

/*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = "ice cream";

switch (dessert) {
    case "pie" :
        console.log ("Pie, Pie, me oh my!");
        break;
    case "cake" :
        console.log ("Cake is great!");
        break;
    case "ice cream" :
        console.log ("I scream for ice cream!")
        break;
    default :
        console.log ("Not on the Menu");
}

let num = -40;

switch (true) {
    case (num < 0 && num > -10):
        console.log("case 1 ran")
        break;
    case (num < 10):
        console.log("case 2 ran")
        break;
    default:
        console.log("did not work")
        break;
}

//! Ternary

let number = 6;

if(number > 0 ) {
    console.log("Yes");
} else {
    console.log("No");
}

number > 0 ? console.log("Yes") : console.log("No");
(number > 0) ? console.log("Yes") : console.log("No");

// Ternaries require an else to the if statement

// Else/If

if(number === 0) {
    console.log("Hello");
} else if (number < 0) {
    console.log("Hi");
} else {
    console.log("goodbye")
}

number === 0 ? // IF
    console.log("hello") :
    number < 0 ? // ELSE IF
    console.log("Hi") :
    console.log("Goodbye"); // ESLE

    /*
Write a ternary that does the same thing as the age challenge

Age Challenge (if else):

    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }
*/



