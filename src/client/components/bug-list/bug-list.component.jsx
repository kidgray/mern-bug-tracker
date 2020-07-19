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
        // AJAX request. If succesful, initialize the bugs array
        // with the data received; otherwise, initialize bugs array
        // to an empty array.
        $.getJSON("http://localhost:3000/api/bugs", (data) => setBugs(data || []));
    }, []);

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

        // Update the state, adding the new bug to the end of the bugs array
        setBugs([
            ...bugs, 
            { 
                id: bugs.length + 1, 
                status: 'Open', 
                priority: bug.priority, 
                description: bug.description 
            }
        ]);
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