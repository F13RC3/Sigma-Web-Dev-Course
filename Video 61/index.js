/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/
function calc(a, c, b) {
    if (c == "+") {
        return a + b;
    } else if (c == "-") {
        return a - b;
    } else if (c == "*") {
        return a * b;
    } else if (c == "/") {
        return a / b;
    }
}

let random = Math.random();
console.log(random);
let a = Number(prompt("Enter first number"));
let c = prompt("Enter operation");
let b = Number(prompt("Enter second number"));

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};

if (random > 0.1) {
    // Perform correct calculation
} else {
    // Perform wrong calculation
    c = obj[c];
}
console.log(`The result is ${a} ${c} ${b}`)
alert(`The result is ${calc(a,c,b)}`)
// console.log(`The result is ${calc(a,c,b)}`)
// alert(`The result is ${eval(`${a} ${c} ${b}`)}`)