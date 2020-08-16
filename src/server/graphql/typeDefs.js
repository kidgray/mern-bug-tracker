const { gql } = require('apollo-server');

// GraphQL Schema (type definitions) for use w/ Apollo Server
const typeDefs = gql`
    # This type represents the individual Bugs
    type Bug {
        id: ID!
        status: String!
        priority: String!
        description: String!
    }

    input BugInput {
        status: String!
        priority: String!
        description: String!
    }

    input FilterInput {
        status: String
        priority: String
    }

    type Query {
        getBugs(filter: FilterInput): [Bug]
    }

    type Mutation {
        addBug(bugInput: BugInput): Bug!
    }
`;

module.exports = typeDefs;