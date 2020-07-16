import React from 'react';

// COMPONENTS
import BugFilter from '../bug-filter/bug-filter.component.jsx';
import BugTable from '../bug-table/bug-table.component.jsx';
import AddBug from '../add-bug/add-bug.component.jsx';

const BugList = (props) => {
    return (
        <div>
            <BugFilter />

            <BugTable />

            <AddBug />
        </div>
    );
};

export default BugList;