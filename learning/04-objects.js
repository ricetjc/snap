// Objects - like anonymous types or simple classes in C#
// In JavaScript, these are just containers of key-value pairs. They're very common.
const ticket = {
    id: "TK-001",
    title: "Printer not working",
    status: "OPEN",
    priority: "HIGH",
    createdBy: "toby",
};

// Accessing properties of objects
console.log(ticket.title);
console.log(ticket.status);

// Destructuring - pulling properties out of an object into variables
const { id, title, status} = ticket;
console.log(id);        // TK-001
console.log(title);     // Printer not working
console.log(status);    // OPEN

// Why is this useful? Compare these two functions:

// No destructuring - you pass the whole object and dot into it
const formatTicketLong = (ticket) => {
    return `[${ticket.id}] ${ticket.title} - ${ticket.status}`;
};

// With destructuring - pull out what you need from the available parameters
const formatTicketClean = ({ id, title, status}) => {
    return `[${id}] ${title} - ${status}`;
};

console.log(formatTicketLong(ticket));
console.log(formatTicketClean(ticket));

// Nested objects
const ticketWithUser = {
    id: "TK-0002",
    title: "VPN access needed",
    assignedTo: {
        name: "Sarah",
        role: "AGENT",
    },
};

// Nested destructuring
const { assignedTo: { name, role} } = ticketWithUser;
console.log(`Assigned to ${role} ${name}`);

// Spread operator - copying an object with changes
// This is important because in React, you never modify state directly, you always make new objects with changes applied
const updatedTicket = { ...ticket, status: "IN_PROGRESS", priority: "URGENT"};
console.log(ticket);            // original ticket object
console.log(updatedTicket);     // copied from original ticket object but with changes to status and priority