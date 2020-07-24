import React, { useState } from 'react';

const BugFilter = (props) => {
    // State Hook for the Priority filter field
    const [priority, setPriority] = useState('');

    // State Hook for the Status filter field
    const [status, setStatus] = useState('');

    const handleSubmit = () => {
        props.setFilter({ priority, status });
    }

    return (
        <div>
            <h2>List Filter</h2>

            Status:
            <select className="filter-field" value={priority} onChange={(event) => setPriority(event.target.value)}>
                <option value=""> All </option>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
            </select>

            Priority:
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