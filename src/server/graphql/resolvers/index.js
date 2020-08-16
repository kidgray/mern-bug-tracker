const bugsResolvers = require('./bugs');

module.exports = {
    Query: {
        ...bugsResolvers.Query
    },
    Mutation: {
        ...bugsResolvers.Mutation
    }
};