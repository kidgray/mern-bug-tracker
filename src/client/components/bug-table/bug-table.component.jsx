import React from 'react';

// COMPONENTS
import BugRow from '../bug-row/bug-row.component.jsx';

const BugTable = (props) => {
    return (
        <table className='bug-table'>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Description</th>
                </tr>
                
                { 
                    props.bugs.map((bug) => 
                        <BugRow 
                            key={bug._id} 
                            {...bug}
                        />
                    )
                }
            </tbody>
        </table>
    );
};

export default BugTable;