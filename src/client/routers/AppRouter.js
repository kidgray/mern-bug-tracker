import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, useLocation } from 'react-router-dom';

// COMPONENTS
import BugList from '../components/bug-list/bug-list.component.jsx';

// PAGES
import NotFoundPage from '../pages/not-found-page/not-found-page.component.jsx';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch></Switch>
                <Redirect exact from='/' to='/bugs' />
                <Route exact path='/bugs' component={BugList} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;