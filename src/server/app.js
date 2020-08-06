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

// ROOT ENDPOINT
app.get('/', (req, res) => res.send('Server online!'));

// BUG LIST GET ENDPOINT
app.get('/api/bugs', async (req, res) => {
    console.log(req.query);

    // Get the bugs collection from the DB
    const collection = db.collection('bugs');

    // Query filter object
    const filter = {};

    // If a priority query parameter was
    // passed in, add it to the query filter
    if (req.query.priority) {
        filter.priority = req.query.priority;
    }

    // If the status query parameter was
    // passed in, add it to the query filter
    if (req.query.status) {
        filter.status = req.query.status;
    }

    //console.log(filter);

    // Get all the documents (i.e. the individual bugs) that satisfy the query
    // filter from the bugs collection and put them into an array called bugs
    // (this is done in the toArray() callback function of collection.find()).
    await collection.find(filter).toArray((err, documents) => {
        assert.equal(null, err);

        //console.log(documents);

        // Return the filtered array of bugs in a JSON response
        res.json(documents);
    });

});

// BUG LIST POST ENDPOINT
app.post('/api/bugs', (req, res) => {
    console.log(req.body);

    // Get the bugs collection from the DB.
    const bugs = db.collection('bugs');

    // Create a variable corresponding to the new bug, which
    // should have been passed in via the HTTP POST request.
    const newBug = req.body;

    // Insert the new bug into the Mongo Database. Because the newBug will not
    // have a manually defined _id field, mongoDB will automatically assign it
    // a unique _id
    bugs.insertOne(newBug, (err, opResult) => {
        // If the error object is not null, this
        // will throw an error
        assert.equal(null, err);

        // If the operation somehow inserted more than
        // 1 document, this will throw an error
        assert.equal(1, opResult.insertedCount);

        // If there were no errors, append the unique ObjectId
        // that MongoDB created to the newBug object
        newBug.id = opResult.insertedId;

        // Return the complete newBug object in a response
        // (by using res.json() to send it as a JSON object, of course)
        res.json(newBug);
    });
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
