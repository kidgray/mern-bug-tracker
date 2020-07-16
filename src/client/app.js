import React from 'react';
import ReactDOM from 'react-dom';

// STYLES
import './styles/styles.scss';

// COMPONENTS
import BugTrackerApp from './components/bug-tracker-app/bug-tracker-app.component.jsx';

const App = () => {
    return (<div>
        <BugTrackerApp />
    </div>);
};

ReactDOM.render(<App />, document.getElementById('root'));