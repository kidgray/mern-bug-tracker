import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import ApolloApp from './components/index.js';

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

ReactDOM.render(
    <ApolloApp />, 
    document.getElementById('root')
);