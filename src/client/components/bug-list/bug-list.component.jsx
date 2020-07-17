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