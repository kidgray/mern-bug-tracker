import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
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
        else {
            const newBug = { status: 'Open', priority: bugPriority, description: bugDescription };

            // HTTP POST request that sends the new bug to the server.
            // NOTE: Make sure to use ajax() and not post(), because post()
            // defaults to contentType of application/x-www-form-urlencoded
            // and NOT JSON, so using post() will result in req.body always
            // being an empty object (due to mismatched contentType, since we're 
            // sending a JSON object here)
            $.ajax({
                type: 'POST',
                url: 'https://mern-bug-tracker.herokuapp.com/api/bugs',
                contentType: 'application/json',
                data: JSON.stringify(newBug),
                success: (newBug) => {
                    props.setBugs([...props.bugs, newBug]);
                }
            });

            // Clear the error field
            setError(() => '');

            // Clear the input fields
            event.target.elements.priority.value = '';
            event.target.elements.description.value = '';
        }
    }

    return (
        <div className="container">
            <h2 className="add-bug-header display-4"> Add New Bug </h2>

            { error && <p className='add-bug-error text-muted'>{ error }</p> }
            
            <Form className='add-bug' onSubmit={handleAddBug}>
                <Form.Group controlId="add-bug-priority">
                    <Form.Control type='input' className='add-bug__input' name='priority' placeholder='Priority' />
                </Form.Group>

                <Form.Group controlId="add-bug-description">
                    <Form.Control type="input" className='add-bug__input' name='description' placeholder="Description" />
                </Form.Group>

                <Button className='button' variant="primary" type="submit"> Add Bug </Button>
            </Form>
        </div>
    );
};

export default AddBug;

