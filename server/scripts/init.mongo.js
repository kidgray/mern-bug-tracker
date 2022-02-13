// Connect to the bugtrackerdb Database in Mongo
let db = new Mongo().getDB("bugtrackerdb");

// Delete all previous collections prior to inserting any
db.bugs.remove({});

// Insert some initial bugs, just to test the server
db.bugs.insertMany(
[
    {
        status: "Open",
        priority: "1",
        description: "This is the first test bug"
    }, 
    {
        status: "Closed",
        priority: "3",
        description: "This is the second test bug"
    },
    {
        status: "Pending",
        priority: "4",
        description: "This is the third test bug"
    }
]);