const { UserInputError } = require('apollo-server');

// Import the Bug Model (made w/ Mongoose)
const Bug = require('../../models/Bug');

// Bug Input validator
const { validateBugInputs } = require('../../utils/validators');

module.exports = {
    Query: {
        // Make sure to use async/await syntax for resolvers, since these will typically communicate
        // with your back-end database (in this case, that's MongoDB), which are asynchronous requests
        // and might therefore fail. Even if you don't think they'll fail, do this anyway
        async getBugs(_, args) {
            try {
                // This is the filter object that will actually get passed to the find() method
                const queryFilter = {};

                // If the user specified a priority in the filter
                if (args.filter.priority) {
                    queryFilter.priority = args.filter.priority;
                }

                // If the user specified a status in the filter 
                if (args.filter.status) {
                    queryFilter.status = args.filter.status;
                }

                console.log(queryFilter);

                // Use Mongoose's find() method for Models, which uses the same syntax as regular MongoDB
                const bugs = await Bug.find(queryFilter);

                console.log(args.filter);

                return bugs;
            }
            catch (err) {
                // If the query fails, just throw an error
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async addBug(
            _, 
            { bugInput: { status, priority, description } }, 
        ) {
            // Validate user input
            const { errors, valid } = validateBugInputs(status, priority, description);

            // If user's input wasn't valid
            if (!valid) {
                // Throw a UserInputError containing the errors we had
                throw new UserInputError('Errors: ', { errors });
            }
            
            // Create a new Bug object that will be inserted into the database
            const newBug = new Bug({
                status,
                priority,
                description
            });

            // Attempt to insert the new Bug object in the MongoDB database,
            // and store the result (the Bug object should be returned)
            const res = await newBug.save();

            // We want to return the Bug object we just inserted, including
            // the id (which is automatically generated by MongoDB and is NOT
            // part of the BugInput input type we defined in typeDefs, so we
            // specify that separately)
            return {
                id: res._id,
                ...res._doc
            };
        }
    }
}