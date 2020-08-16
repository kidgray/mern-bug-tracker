import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';

// COMPONENTS & PAGES
import App from '../components/app/app';

// Instantiate an Apollo Link for use w/ the Apollo Client.
// The URI should be the http address of the server (in this case, that's our MongoDB server port)
const httpLink = createHttpLink({
    uri: 'http://localhost:3000'
});

// Create an instance of ApolloClient
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const ApolloApp = () => {
    return (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    );
};

export default ApolloApp;