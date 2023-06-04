console.log("this file is connected")

let x = 12;

let y = 12;

let z = x + y;

let body = document.querySelector('body');
console.log(body);

let h1 = document.createElement('h1');
h1.innerText=z;

body.appendChild(h1);