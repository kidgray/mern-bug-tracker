import React, { useState, useEffect } from 'react';

// HOOKS
import useQueryString from '../../hooks/useQueryString.jsx';

const BugFilter = (props) => {
    // State Hook for the Priority filter field
    const [priority, setPriority] = useState('');

    // State Hook for the Status filter field
    const [status, setStatus] = useState('');

    // Use built-in URLSearchParams API with custom useQueryString
    // Hook to extract the individual query parameters
    // as key=value pairs
    //const queryString = new URLSearchParams(useQueryString());

    // This Effect Hook will set the initial state of the filter
    // based on the query parameters. This sets INITIAL state, so
    // it should only run once, upon first mounting the app.
    /*
    useEffect(() => {
        // Get the initial filter params by extracting them
        // from the query string, if any
        getInitialFilterParams();

        // Set the filter using the initial values.
        //props.setFilter(() => { priority, status });
        handleSubmit();
    }, []);
    */
    
    /*
    const getInitialFilterParams = () => {
        // If the query string contained a priority value
        if (queryString.has('priority')) {
            const initialPriority = queryString.get('priority');
            console.log(initialPriority);

            setPriority(() => initialPriority);
            console.log(priority);
        }
        
        // If the query string contained a status value, get it
        if (queryString.has('status')) {

            const initialStatus = queryString.get('status');
            console.log(initialStatus);

            setStatus(() => initialStatus);
            console.log(status);
        }
    };
    */

    const handleSubmit = () => {
        console.log(priority);
        console.log(status);
        props.setFilter({ priority, status });
    }

    return (
        <div>
            <h2>List Filter</h2>

            Priority:
            <select className="filter-field" value={priority} onChange={(event) => setPriority(event.target.value)}>
                <option value=""> All </option>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
            </select>

            Status:
            <select className="filter-field" value={status} onChange={(event) => setStatus(event.target.value)}>
                <option value=""> All </option>
                <option value="New"> New </option>
                <option value="Open"> Open </option>
                <option value="Closed"> Closed </option>
            </select>

            <button onClick={handleSubmit}>Test Filter Functionality</button>
        </div>
    );
};

export default BugFilter;