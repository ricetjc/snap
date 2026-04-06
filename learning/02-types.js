// JavaScript's basic types

const name = "Snap";                // string
const version = 1;                  // number
const isActive = true;              // boolean
const nothing = null;               // explicitly "no value"
const notDefined = undefined;       // declared but never assigned a value

console.log(typeof name);           // "string"
console.log(typeof version);        // "number"
console.log(typeof isActive);       // "boolean"
console.log(typeof nothing);        // "object" - this is a famous JavaScript bug. It should say "null".
console.log(typeof notDefined);     // "undefined"

console.log(5 == "5"); // true because of 'type coercion' - JavaScript converts the string to a number before comparing
console.log(5 === "5"); // false because of strict equality - no conversion, different types means not equal

// Always use === in JavaScript