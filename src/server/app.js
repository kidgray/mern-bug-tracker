const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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

// Test array of bugs
let bugs = [
    {
        id: 1,
        status: 'Open',
        priority: 'P1',
        description: 'Express Test 1'
    },
    {
        id: 2,
        status: 'Closed',
        priority: 'P2',
        description: 'Express Test 2'
    }
];

// Test endpoint 2
app.get('/api/bugs', (req, res) => res.send(JSON.stringify(bugs)));

// TEST POST endpoint 1
app.post('/api/bugs', (req, res) => {
    console.log(req.body);

    // Create a variable corresponding to the new bug, which
    // should have been passed in via the HTTP POST request.
    const newBug = req.body;

    // Update the new bug's id to be the bug array's length + 1
    newBug.id = bugs.length + 1;

    // Add the new bug to the array of bugs
    bugs.push(newBug);

    // Check whether the new bug has been added!
    console.log(bugs);

    // res.json() converts the newBug object to JSON by calling JSON.stringify(),
    // the sends the resulting JSON object as a response!
    res.json(newBug);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
