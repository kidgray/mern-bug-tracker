import React, { useState } from 'react';

// COMPONENTS
import BugFilter from '../bug-filter/bug-filter.component.jsx';
import BugTable from '../bug-table/bug-table.component.jsx';
import AddBug from '../add-bug/add-bug.component.jsx';

const BugList = (props) => {
    const examples = [
        {
            id: 1,
            status: 'Open',
            priority: 'P1',
            description: 'Testing'
        },
        {
            id: 2,
            status: 'Pending',
            priority: 'P2',
            description: 'Testing again'
        }
    ]

    // State variable for the list of bugs
    const [bugs, setBugs] = useState(examples);

    return (
        <div>
            <BugFilter />

            <BugTable bugs={bugs}/>

            <AddBug />
        </div>
    );
};

export default BugList;