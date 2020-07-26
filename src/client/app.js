import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import BugTrackerApp from './components/bug-tracker-app/bug-tracker-app.component.jsx';

// ROUTERS
import AppRouter from './routers/AppRouter';

// STYLES
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const App = () => {
    return (
        <AppRouter>
            <BugTrackerApp />
        </AppRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));