// In JavaScript, this works:
// const add = (a, b) => a + b;
// add(5, "hello"); // this would return "5hello"

// In TypeScript, you declare what types a function expects and returns
const add = (a: number, b: number): number => {
    return a + b;
}

console.log(add(5, 3));             // This works fine and returns 8
// console.log(add(5, "hello"));    // Uncomment and TypeScript will refuse to compile

// Type annotations on variables (usually optional - TypeScript can infer)
const appName: string = "Snap";
const version: number = 1;
const isActive: boolean = true;

const inferredName = "Snap";        // TypeScript knows this is a string
const inferredCount = 42;           // TypeScript knows this is a number

// Interfaces - defining the shape of an object
// Like a class definition in C# but with no implementation, just structure

interface Ticket {
    id: string;
    title: string;
    status: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";     // union type where only these values are allowed
    priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
    assignedTo?: string;    // the ? means optional so this property may not exist
}

// Now TypeScript enforces the shape
const ticket: Ticket = {
    id: "TK-001",
    title: "Printer not working",
    status: "OPEN",
    priority: "HIGH",
};

// This would be an error — "BANANA" isn't a valid status:
// const badTicket: Ticket = { id: "TK-002", title: "Test", status: "BANANA", priority: "LOW" };

const formatTicket = (ticket: Ticket): string => {
    const assignee = ticket.assignedTo ?? "Unassigned";
    return `[${ticket.id}] ${ticket.title} - ${ticket.status} (${assignee})`;
}

console.log(formatTicket(ticket));

// The ?? operator is "nullish coalescing"
// It means "use the left value unless it's null or undefined, in which case use the right"