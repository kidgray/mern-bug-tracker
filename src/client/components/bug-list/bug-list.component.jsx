import React, { useState, useEffect } from 'react';

// jQuery OBJECT
import $ from 'jquery';

// COMPONENTS
import BugFilter from '../bug-filter/bug-filter.component.jsx';
import BugTable from '../bug-table/bug-table.component.jsx';
import AddBug from '../add-bug/add-bug.component.jsx';

const BugList = (props) => {
    // This Effect Hook sets the initial State of the bugs array.
    useEffect(() => {
        // Attempt to get initial State from server with an
        // AJAX request. If succesful, populate the bugs array
        // with the data received; otherwise, set the bugs array
        // to an empty array.
        $.getJSON("http://localhost:3000/api/bugs", (data) => setBugs(data || []));
    });

    // State variable for the list of bugs. State variable will be
    // set in the single-run Effect Hook that makes an AJAX request
    // to the server (see above).
    const [bugs, setBugs] = useState([]);

    // Handler function for adding new bugs.
    const handleAddBug = (bug) => {
        // If no bug was passed
        if (!bug) {
            return 'One or more fields were left blank. Please fill out all the fields.';
        }

        console.log(bug);
        
        // HTTP POST request that sends the new bug to the server.
        // NOTE: Make sure to use ajax() and not post(), because post()
        // defaults to contentType of application/x-www-form-urlencoded
        // and NOT JSON, so using post() will result in req.body always
        // being an empty object (due to mismatched contentType, since we're 
        // sending a JSON object here)
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/api/bugs',
            contentType: 'application/json',
            data: JSON.stringify(bug),
            success: (newBug) => {
                setBugs([...bugs, newBug]);
            }
        });
    };

    return (
        <div>
            <BugFilter />

            <BugTable bugs={bugs} />

            <AddBug handleAddBug={handleAddBug} />
        </div>
    );
};

export default BugList;