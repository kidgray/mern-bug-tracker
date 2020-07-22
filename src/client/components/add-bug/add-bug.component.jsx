import React, { useState } from 'react';

import $ from 'jquery';

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

        // If either the priority or description fields were left blank
        if (!bugPriority || !bugDescription) {
            // User MUST enter values for both fields. Otherwise, print an error.
            setError('One or more fields were left blank. Please fill out all the fields.');
        }

        // If the user entered a valid input, create a new bug object. 
        // Otherwise, simply set this to null, which will result in
        // an error being displayed when the callback function is called below
        const newBug = (bugPriority && bugDescription) 
                       ? { status: 'Open', priority: bugPriority, description: bugDescription }
                       : null;


        // HTTP POST request that sends the new bug to the server.
        // NOTE: Make sure to use ajax() and not post(), because post()
        // defaults to contentType of application/x-www-form-urlencoded
        // and NOT JSON, so using post() will result in req.body always
        // being an empty object (due to mismatched contentType, since we're 
        // sending a JSON object here)
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/api/bugs',
            contentType: 'application/json',
            data: JSON.stringify(newBug),
            success: (newBug) => {
                props.setBugs([...props.bugs, newBug]);
            }
        });

        // If there was no error, clear the input fields
        if (!error) {
            event.target.elements.priority.value = '';
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

