/*
Use this string: let name = 'sAmwISe';

Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    

*/
upperCa = "A";
lowerCa = "a";

// console.log(lowerCa > upperCa);

// let aHobbit = 'sAmwISe';
// let aWizard = 'GaNdAlF';

// function isUpperCaseBronze(aStr) {
//     let result;
//         let firstLetter = aStr.charAt(0);
//             let firstUpper = firstLetter.toUpperCase();

//     if (firstLetter === firstUpper) {
//         result = console.log("Hey, this isn't written correctly");
//         result = console.log(aStr, firstLetter, firstUpper, firstLetter === firstUpper);
//     } else {
//         result = console.log(aStr, firstLetter, firstUpper, firstLetter === firstUpper);
//     }
// }



// isUpperCaseBronze(aHobbit);
// isUpperCaseBronze(aWizard);

// Silver:
//     If the first letter of a string is uppercase, only console.log that letter
//     if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    
// function isUpperCaseSilver(aStr) {
//     let result;
//         let firstLetter = aStr.charAt(0);
//             let firstUpper = firstLetter.toUpperCase();

//     if (firstLetter === firstUpper) {
//         result = console.log(firstLetter);
//         result = console.log(aStr, firstLetter, firstUpper, firstLetter === firstUpper);
//     } else {
//         result = console.log(aStr.substring(1).toLowerCase());
//         result = console.log(aStr, firstLetter, firstUpper, firstLetter === firstUpper);
//     }
// }


// isUpperCaseSilver(aWizard);
// isUpperCaseSilver(aHobbit);


// Gold:
//     If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
//     If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
let aHobbit = 'sAmwISe';
let aMaiar = 'MiThRaNdIr';

function isUpperCaseGold(aStr) {
    let result;
        let firstLetter = aStr.charAt(0);
            let firstUpper = firstLetter.toUpperCase();

    if (firstLetter === firstUpper) {
        result = console.log(firstLetter + aStr.substring(1).toLowerCase());
        result = console.log(aStr, firstLetter, firstUpper, firstLetter === firstUpper);
    } else {
        result = console.log(aStr.substring(0, 1).toUpperCase() + aStr.substring(1).toLowerCase());
        result = console.log(aStr, firstLetter, firstUpper, firstLetter === firstUpper);
    }
}

isUpperCaseGold(aMaiar);
isUpperCaseGold(aHobbit);