import React, { useState } from 'react';

const AddBug = (props) => {
    // State variable for errors. Will be used for input validation.
    const [error, setError] = useState(null);

    // Handler function for adding a new bug. It will call
    // the handleAddBug function passed in via props from BugList
    const handleAddBug = (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // Extract the new bug's info from the input fields, making sure
        // to remove any extra whitespace from the beginning and end
        const bugPriority = event.target.elements.priority.value.trim();
        const bugDescription = event.target.elements.description.value.trim();

        // If the user entered a valid priority AND description for the bug, create
        // a new bug object; otherwise, simply set this to null, which will result in
        // an error when the callback function is called below
        const newBug = (bugPriority && bugDescription) 
                       ? { priority: bugPriority, description: bugDescription }
                       : null;

        // Use the callback function passed in from BugList Component to actually
        // add the new bug to the list of bugs. Note that if the bug list is successfully
        // updated, the callback function should return nothing, since all it does is just
        // call the state update function created by the useState() hook
        const error = props.handleAddBug(newBug);

        // Update the error field based on the result of calling the update function above.
        setError(error);

        // If there was no error, clear the input field
        if (!error) {
            event.target.elements.description.value = '';
        }

    }

    return (
        <div>
            { error && <p className='add-bug-error'>{ error }</p> }
            
            <form className='add-bug' onSubmit={handleAddBug}>
                <input type='input' className='add-bug__input' name='priority' placeholder='Priority' />
                <input type="input" className='add-bug__input' name='description' placeholder="Description" />
                <button className='button'>Add Bug</button>
            </form>
        </div>
    );
};

export default AddBug;

