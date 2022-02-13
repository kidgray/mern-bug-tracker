import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import BugTrackerApp from './components/bug-tracker-app/bug-tracker-app.component.jsx';

// ROUTERS
import AppRouter from './routers/AppRouter';

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const App = () => {
    return (
        <BugTrackerApp />
    );
};

ReactDOM.render(
    <AppRouter>
        <App />
    </AppRouter>, 
    document.getElementById('root')
);