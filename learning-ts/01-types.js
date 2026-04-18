"use strict";
// In JavaScript, this works:
// const add = (a, b) => a + b;
// add(5, "hello"); // this would return "5hello"
// In TypeScript, you declare what types a function expects and returns
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3)); // This works fine and returns 8
// console.log(add(5, "hello"));    // Uncomment and TypeScript will refuse to compile
// Type annotations on variables (usually optional - TypeScript can infer)
const appName = "Snap";
const version = 1;
const isActive = true;
const inferredName = "Snap"; // TypeScript knows this is a string
const inferredCount = 42; // TypeScript knows this is a number
// Now TypeScript enforces the shape
const ticket = {
    id: "TK-001",
    title: "Printer not working",
    status: "OPEN",
    priority: "HIGH",
};
// This would be an error — "BANANA" isn't a valid status:
// const badTicket: Ticket = { id: "TK-002", title: "Test", status: "BANANA", priority: "LOW" };
const formatTicket = (ticket) => {
    const assignee = ticket.assignedTo ?? "Unassigned";
    return `[${ticket.id}] ${ticket.title} - ${ticket.status} (${assignee})`;
};
console.log(formatTicket(ticket));
// The ?? operator is "nullish coalescing"
// It means "use the left value unless it's null or undefined, in which case use the right"
