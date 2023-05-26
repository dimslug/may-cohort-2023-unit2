// function respond(name) {
//      enter your name through name parameter
//     if (name) {
//       /* check if their name is 'darth vader' */
//       /* tell them to go away */
//     } else {
//       /* greet them warmly by their name */
//     }
//   }
  
//   respond('darth vader');
//    should print 'Noooooo! That's impossible!'
//   respond('lex luthor');
//    should print 'Be gone, you villian!!!'
//   respond('luke skywalker');
//    should print 'Hello luke skywalker, you are a wonderful friend!'
  

function greeter(aName) {
    let result;
    if (aName == "darth vader") {
       result = console.log("Go away!", aName);
    } else if (aName == "lex luthor") {
        result = console.log("Go Away!!", aName)
    } else if (aName == "luke skywalker") {
        result = console.log("Hello ", aName, " you are a good friend!")
    } else {
        result = console.log("Hello there", aName, " you are a swell friend!")
    }
}

greeter('darth vader');
greeter('lex luthor')
greeter('luke skywalker')
greeter('Frodo')

