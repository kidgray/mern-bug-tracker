// Export a function that will be used to validate bug input data
module.exports = {
    validateBugInputs: (status, priority, description) => {
        // Create an object to store errors
        const errors = {};

        // If status field was left blank (i.e. status is an empty string)
        // Note that this error check only needs to exist if there's a field
        // for manually entering a new bug's status (i.e. the field 
        // doesn't just default to "New" or "Open")
        if (status.trim() === '') {
            errors.status = 'Status field must not be empty!';
        }

        // If priority field was left blank
        if (priority.trim() === '') {
            errors.priority = 'Priority field must not be empty!';
        } 
        // If the priority field contained an invalid value (valid priorities are 1, 2, and 3)
        else {
            // RegEx matching the digits 1 through 3
            const regEx = /^[1-3]$/;

            // If the priority the user provided was not a value from 1 to 3
            if (!priority.match(regEx)) {
                errors.priority = 'Priority value must be a number from 1 to 3!';
            }
        }

        // If description field was left blank. No need to trim() this field. It's
        // okay to have whitespace at the extremities of something like a description
        if (description === '') {
            errors.description = 'Description field must not be empty!';
        }

        // Return an object containing the errors (if any) and a field
        // telling us whether the input is valid or not (if there were no
        // errors, the input is valid)
        return {
            errors,
            valid: Object.keys(errors).length === 0
        };
    }
};