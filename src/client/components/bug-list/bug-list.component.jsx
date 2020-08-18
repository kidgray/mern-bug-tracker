import React, { useState } from 'react';

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

    const { loading, error, data } = useQuery(GET_BUGS, {
        onCompleted: () => {
            console.log(data);
            setBugs(data.getBugs);
        },
        onError: (err) => {
            // graphQLErrors[0] contains the properties needed to access
            // errors (see GraphQL/Apollo docs).
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: { filter },
        pollInterval: 500
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