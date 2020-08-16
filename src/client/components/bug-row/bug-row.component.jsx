import React from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';

// PAGES
import BugEditPage from '../../pages/bug-edit-page/bug-edit-page.component.jsx';

const BugRow = (props) => {
    const { path } = useRouteMatch();

    return (
        <tr>
            <td><Link to={`${path}/${props.id}`}> { props.id } </Link></td>
            <td>{ props.status }</td>
            <td>{ props.priority }</td>
            <td>{ props.description }</td>
        </tr>
    );
};

export default BugRow;