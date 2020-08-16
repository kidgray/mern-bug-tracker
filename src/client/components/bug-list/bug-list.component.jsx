import React, { useState, useEffect } from 'react';

// GraphQL & Apollo useQuery hook
import { useQuery, gql } from '@apollo/client';

// jQuery OBJECT
import $ from 'jquery';

// COMPONENTS
import BugFilter from '../bug-filter/bug-filter.component.jsx';
import BugTable from '../bug-table/bug-table.component.jsx';
import AddBug from '../add-bug/add-bug.component.jsx';

// GraphQL QUERIES
const GET_BUGS = gql`
    # Client-side getBugs query
    query getBugs($filter: FilterInput) {
        # Call the server-side getBugs query defined in typeDefs.js
        getBugs(
            filter: $filter
        ) {
            id
            status
            priority
            description
        }
    }
`;

const BugList = (props) => {
    // State variable for the list of bugs.
    const [bugs, setBugs] = useState([]);

    // State variable for the list filter.
    const [filter, setFilter] = useState({});

    // State variable for errors that occur while loading the list
    const [errors, setErrors] = useState({});

    // This Effect Hook loads bugs into the list based on the filter that is passed to it.
    /*
    useEffect(() => {
        loadData(filter);
    });

    // This function will be in charge of loading the actual list of bugs. If no
    // filter is specified (by default, filter is null), ALL bugs in the database are loaded.
    // !!! NOTE: This MAY need to be an async function, since it involves an AJAX request... !!!
    const loadData = (filter) => {
        // Make an AJAX JSON GET request to the server. 
        // Note that the filter's parameters are passed in the GET
        // request using the spread operator;
        // this will append the query string to the URL, since this is
        // a GET request. 
        // If succesful, populate the bugs array
        // with the data received; otherwise, set the bugs array
        // to an empty array.

        /*
        $.getJSON(
            `http://localhost:3000/api/bugs/`, 
            { ...filter },
            (data) => setBugs(data || [])
        );
        
    }
    */

    const { loading, error, data } = useQuery(GET_BUGS, {
        onCompleted: (data) => setBugs(data.getBugs || []),
        onError: (err) => {
            // graphQLErrors[0] contains the properties needed to access
            // errors (see GraphQL/Apollo docs).
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: { filter }
    });

    // If the list is loading, display a spinner
    if (loading) return <div className="container spinner-border spinner-size" />;

    // If there were any errors during loading, display them
    else if (error) return Object.values(errors).map(error => <p key={error}>{ error }</p>);

    // Otherwise, display the list
    else return (
        <div className="container bug-list-container">
            <BugFilter setFilter={setFilter} />

            <BugTable bugs={bugs} />

            <AddBug bugs={bugs} setBugs={setBugs} />
        </div>
    );
};

export default BugList;