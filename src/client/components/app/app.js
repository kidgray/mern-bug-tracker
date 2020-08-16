import React from 'react';

// COMPONENTS & PAGES
import BugTrackerApp from '../bug-tracker-app/bug-tracker-app.component.jsx';

// ROUTERS
import AppRouter from '../../routers/AppRouter';

const App = () => {
    return (
        <AppRouter>
            <BugTrackerApp />
        </AppRouter>
    );
};

export default App;