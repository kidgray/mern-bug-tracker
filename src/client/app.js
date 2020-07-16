import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import BugTrackerApp from './components/bug-tracker-app/bug-tracker-app.component.jsx';

// STYLES
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const App = () => {
    return (
    <div>
        <BugTrackerApp />
    </div>);
};

ReactDOM.render(<App />, document.getElementById('root'));