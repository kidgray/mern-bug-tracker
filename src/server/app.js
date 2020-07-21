const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// FOR MongoDB SERVER: client, assert and DB url
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';

// Variable for database
let db;

// Variables for Express connection
const app = express();
const port = 3000;

// Serve a static HTML file
app.use(express.static('../../public'));

// Use body-parser for all routing
app.use(bodyParser.json());

// Enable all CORS requests
app.use(cors());

// Test endpoint 1 (root)
app.get('/', (req, res) => res.send('Server online!'));

// Test endpoint 2
app.get('/api/bugs', async (req, res) => {
    // Get the bugs collection from the DB
    const collection = db.collection('bugs');

    console.log(collection.find({}).toArray());

    // Get all the documents (i.e. the individual bugs) from
    // the bugs collection and put them into an array
    const bugs = await collection.find({}).toArray();

    res.send(JSON.stringify(bugs));
});

// TEST POST endpoint 1
app.post('/api/bugs', (req, res) => {
    console.log(req.body);

    // Create a variable corresponding to the new bug, which
    // should have been passed in via the HTTP POST request.
    const newBug = req.body;

    // Update the new bug's id to be the bug array's length + 1
    // newBug.id = bugs.length + 1;

    // Add the new bug to the array of bugs
    bugs.push(newBug);

    // Check whether the new bug has been added!
    console.log(bugs);

    // res.json() converts the newBug object to JSON by calling JSON.stringify(),
    // the sends the resulting JSON object as a response!
    res.json(newBug);
});

// Initialize Server & DB connection
(async () => {
    // Create new MongoDB client object. useUnifiedTopology must be
    // set to true to avoid DeprecationWarning when running server from Node.js
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Attempt to connect to server using MongoDB client object
        await client.connect((err, dbConnection) => {
            // Retrieve the Bug Tracker DB and assign it to db
            // for future use
            db = client.db("bugtrackerdb");

            // Start connection to server
            app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
        });
    }
    // If connection attempt fails, log error to console
    catch (error) {
        console.log(error);
    }
})();
