import React from 'react';
import { Table } from 'react-bootstrap';

// COMPONENTS
import BugRow from '../bug-row/bug-row.component.jsx';

// PAGES
// import BugEditPage from '../../pages/bug-edit-page/bug-edit-page.component.jsx';

const BugTable = (props) => {
    return (
        <div className="container">
            <h2 className="bug-list-header display-2"> Bug List </h2>

            <Table className='bug-table' striped bordered hover responsive variant="dark">
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
            </Table>
        </div>
    );
};

export default BugTable;