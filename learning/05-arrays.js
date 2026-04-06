// An array of ticket objects — imagine this came from a database
const tickets = [
    { id: "TK-001", title: "Printer not working", status: "OPEN", priority: "HIGH" },
    { id: "TK-002", title: "Need VPN access", status: "IN_PROGRESS", priority: "MEDIUM" },
    { id: "TK-003", title: "Laptop won't boot", status: "OPEN", priority: "URGENT" },
    { id: "TK-004", title: "Email signature update", status: "RESOLVED", priority: "LOW" },
    { id: "TK-005", title: "Monitor flickering", status: "OPEN", priority: "HIGH" },
];

// Filter - this returns a new array with items meeting the criteria
const openTickets = tickets.filter((ticket) => ticket.status === "OPEN");
console.log("Open tickets: ", openTickets.length); 

// Map - transforms each item, returning a new array with the results
const titles = tickets.map((ticket) => ticket.title);
console.log("All titles:", titles);

// Find - returns the first item that matches the criteria. Undefined if none match.
const urgent = tickets.find((ticket) => ticket.priority === "URGENT");
console.log("Urgent ticket:", urgent.title);

// Some - returns true if at least one item matches the criteria. False if not.
const hasResolved = tickets.some((ticket) => ticket.status === "RESOLVED");
console.log("Is at least one ticket resolved?", hasResolved);

// Chaining - combining different methods
const urgentOpenTitles = tickets
    .filter((ticket) => ticket.status === "OPEN")
    .filter((ticket) => ticket.priority === "HIGH")
    .map((ticket) => ticket.title);
console.log("Open, high-priority tickets:", urgentOpenTitles);

// Foreach - flows as you would expect but doesn't return anything, it just does something for each item
console.log("All tickets:");
tickets.forEach((ticket) => {
    console.log(`[${ticket.id}] ${ticket.title} - ${ticket.status}`);
});