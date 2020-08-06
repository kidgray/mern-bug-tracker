import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import $ from 'jquery';

// HOOKS
import useQueryString from '../../hooks/useQueryString.jsx';

const BugFilter = (props) => {
    // State Hook for the Priority filter field
    const [priority, setPriority] = useState('');

    // State Hook for the Status filter field
    const [status, setStatus] = useState('');

    // We will need access to the history in order to modify the URL upon filter application
    const history = useHistory();

    const handleSubmit = () => {
        const filter = { priority, status };

        //console.log(history);

        console.log($.param(filter));
        
        history.push(`bugs?${$.param(filter)}`);

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

            <button onClick={handleSubmit}> Apply Filter </button>
        </div>
    );
};

export default BugFilter;