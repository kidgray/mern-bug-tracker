import React from 'react';

const BugRow = (props) => {
    return (
        <tr>
            <td>{ props._id }</td>
            <td>{ props.status }</td>
            <td>{ props.priority }</td>
            <td>{ props.description }</td>
        </tr>
    );
};

export default BugRow;