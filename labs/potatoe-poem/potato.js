
function potatoPoem() {
    let count = 0;

    while (count < 8) {
        count++;
        if (count == 8) {
            console.log("More!");
        } else if (count == 4) {
            console.log("4!");
        } else {
            console.log(`${count} Potato,`);
        }
    }
}

potatoPoem();

/* 
Within our while loop's code block, reassign count to be count incremented by one.
Within our while loop's code block, set up an if statement whose conditional statement checks if count is equal to 8.
Within the if's code block, print "More!" to the console.
Attach an else if to the end of our if block. This else if should have a conditional statement that checks if count is equal to 4.
Within the else if block, print "4!" to the console.
Attach an else to the end of our else if block.
Within the else block, log the concatenation of count and "potato,".
*/