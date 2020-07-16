import React from 'react';

// COMPONENTS
import BugRow from '../bug-row/bug-row.component.jsx';

const BugTable = () => {
    return (
        <table className='bug-table'>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Description</th>
                </tr>
                
                <BugRow id={1} status={'Open'} priority={'1'} description={'This is a test'} />
            </tbody>
        </table>
    );
};

export default BugTable;