// These functions simulate slow operations
// setTimeout is essentially "do this after x milliseconds"
const fetchTickets = () => {
    return new Promise((resolve) => {
        console.log("Fetching tickets from database...");
        setTimeout(() => {
            resolve([
                { id: "TK-001", title: "Printer not working"},
                { id: "TK-002", title: "Need VPN access"},
            ]);
        }, 1500); // 1.5 second delay
    });
};

const fetchUserName = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Toby");
        }, 1000); // 1 second delay
    });
};

// With async/await
const main = async () => {
    console.log("Starting");

    // 'await' pauses here until the promise resolves, then returns the result
    const tickets = await fetchTickets();
    console.log(`Got ${tickets.length} tickets`);

    const userName = await fetchUserName();
    console.log(`User: ${userName}`);

    // use the data normally once you have it
    tickets.forEach((ticket) => {
        console.log(`[${ticket.id}] - ${ticket.title}`);
    });

    console.log("Done!");
};

main();