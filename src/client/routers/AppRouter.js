import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// COMPONENTS & PAGES
import BugList from '../components/bug-list/bug-list.component.jsx';

// PAGES
import NotFoundPage from '../pages/not-found-page/not-found-page.component.jsx';
import BugEditPage from '../pages/bug-edit-page/bug-edit-page.component.jsx';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/bugs/:id' component={BugEditPage} />
                <Route exact path='/bugs' component={BugList} />
                <Redirect exact from='/' to='/bugs' />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;