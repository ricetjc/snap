// Variables in JavaScript

const appName = "snap";
let ticketCount = 0;

console.log(appName);
console.log(ticketCount);

ticketCount = 5;
console.log(ticketCount);

// Try uncommenting the line below - what happens
//appName = "DeskFlow";

// "const" declares a variable that can't be reassigned. This should be the default choice.
// "let" declares a variable that can be reassigned. Only use it when you know something is going to be changed later.

// you might see "var" in older code. This is the old way of declaring variables and has weird scoping behaviour.