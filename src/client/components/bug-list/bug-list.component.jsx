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

    return (
        <div>
            <BugFilter />

            <BugTable bugs={bugs} />

            <AddBug bugs={bugs} setBugs={setBugs} />
        </div>
    );
};

export default BugList;