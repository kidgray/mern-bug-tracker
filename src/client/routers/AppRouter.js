import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// COMPONENTS
import BugList from '../components/bug-list/bug-list.component.jsx';

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 NOT FOUND</h1>
            <h3>The page you requested wasn't found.</h3>
        </div>
    );
};

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/bugs" component={BugList} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;