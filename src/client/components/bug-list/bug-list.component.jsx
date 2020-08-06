import React, { useState, useEffect } from 'react';

// jQuery OBJECT
import $ from 'jquery';

// COMPONENTS
import BugFilter from '../bug-filter/bug-filter.component.jsx';
import BugTable from '../bug-table/bug-table.component.jsx';
import AddBug from '../add-bug/add-bug.component.jsx';

// HOOKS
import useQueryString from '../../hooks/useQueryString.jsx';

const BugList = (props) => {
    // State variable for the list of bugs.
    const [bugs, setBugs] = useState([]);

    // This Effect Hook is for when the BugList Component first mounts,
    // so it should only be run once. It loads ALL bugs in the DB into
    // the list (no filter parameter is passed to loadData()). Further
    // loading will be done by the Effect Hook for the Filter State Hook (see below).
    useEffect(() => {
        loadData();
    }, []);

    // State variable for the list filter.
    const [filter, setFilter] = useState({});

    // This Effect Hook is technically for the list filter, but in fact it 
    // is the main loader function for the bug list. Whenever the user specifies
    // a filter, this will run. It will also run when the user decides to REMOVE
    // a filter (either by submitting a blank filter form OR by pressing a "Show All"
    // button).
    useEffect(() => {
        console.log(filter);
        loadData(filter);
    }, [filter]);

    // This function will be in charge of loading the actual list of bugs. If no
    // filter is specified (by default, filter is null), ALL bugs in the database are loaded.
    const loadData = (filter) => {
        // Make an AJAX JSON GET request to the server. 
        // Note that the filter's parameters are passed in the GET
        // request using the spread operator;
        // this will append the query string to the URL, since this is
        // a GET request. 
        // If succesful, populate the bugs array
        // with the data received; otherwise, set the bugs array
        // to an empty array.
        $.getJSON(
            `http://localhost:3000/api/bugs/`, 
            { ...filter },
            (data) => setBugs(data || [])
        );
    }

    return (
        <div>
            <BugFilter setFilter={setFilter} />

            <BugTable bugs={bugs} />

            <AddBug bugs={bugs} setBugs={setBugs} />
        </div>
    );
};

export default BugList;