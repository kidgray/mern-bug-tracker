import React from 'react';

const BugFilter = (props) => {
    const handleClick = () => {
        props.setFilter({ priority: 1 });
    }

    return (
        <div>
            <button onClick={handleClick}>Test Filter Functionality</button>
        </div>
    );
};

export default BugFilter;