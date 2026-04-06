// Traditional function
function getGreeting(name) 
{
    return `Hello, ${name}!`;
}

console.log(getGreeting("Toby"));

// Arrow function - same thing, but shorter syntax
const getGreetingArrow = (name) => 
{
    return `Hello, ${name}!`;
};

console.log(getGreetingArrow("Toby"));

// Shorter Arrow function for single expressions
// If the function body is just one expression, you can drop the curly braces and the return keyword
const getGreetingShort = (name) => `Hello, ${name}!`;

console.log(getGreetingShort("Toby"));

// A more realistic example - a function that builds a ticket summary
const formatTicket = (id, title, status) => 
{
    return `[${id}] ${title} - ${status}`;
};

console.log(formatTicket("TK-0001", "Printer not working", "OPEN"));
console.log(formatTicket("TK-0002", "Need VPN access", "IN_PROGRESS"));

// Default parameters - like optional parameters in C#
const formatPriority = (priority = "MEDIUM") => 
{
    return `Priority ${priority}`;
};

console.log(formatPriority("URGENT"));  // uses the argument
console.log(formatPriority());          // uses the default