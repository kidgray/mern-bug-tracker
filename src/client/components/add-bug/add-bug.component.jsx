import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import $ from 'jquery';
import { useMutation, gql } from '@apollo/client'

const AddBug = (props) => {
    // State variable for errors. Will be used for input validation.
    const [errors, setErrors] = useState({});

    // State variable for the fields of the add bug form
    const [fields, setFields] = useState({
        priority: '',
        description: ''
    });

    // GraphQL MUTATIONS
    const ADD_BUG = gql`
        # Client-side addBug mutation
        mutation addBug(
            $status: String!
            $priority: String!
            $description: String!
        ) {
            # Call the server-side addBug mutation defined in typeDefs.js
            addBug(bugInput: {
                status: $status
                priority: $priority
                description: $description
            }) {
                id
                status
                priority
                description
            }
        }
    `;

    // Use the useMutation Hook to obtain the mutate function and mutation status object
    const [addBug, { loading }] = useMutation(ADD_BUG, {
        update(cache, result) {
            console.log(cache);

            // Store the newly added bug so we can pass it to the 
            // State mutator function of the bugs array
            const newBug = result.data.addBug;

            // Add the new bug to the array of bugs (i.e. the bugs state variable)
            props.setBugs([ ...props.bugs, newBug ]);

            // Since we successfully added a new bug, clear the error field
            setErrors({});
        },
        onError: (err) => {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: {
            status: 'New',
            ...fields
        }
    });

    // Handler function for adding a new bug. It will call
    // the handleAddBug function passed in via props from BugList
    const handleAddBug = (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // Execute the addBug Mutation
        addBug();

        // If there were no errors
        if (Object.keys(errors).length === 0) {
            // Clear the input fields
            event.target.elements.priority.value = '';
            event.target.elements.description.value = '';
        }
    };

    const onChange = (event) => {
        // Use computer property keys to make the onChange function universally
        // compatible with all current and future form fields
        setFields({
            ...fields,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="container">
            <h2 className="add-bug-header display-4"> Add New Bug </h2>
            
            { 
                Object.keys(errors).length > 0 && (
                    Object.values(errors).map((error) => <p key={error} className='add-bug-error text-muted'>{ error }</p>)
                )
            }
            
            <Form className='add-bug' onSubmit={handleAddBug}>
                <Form.Group controlId="add-bug-priority">
                    <Form.Control 
                        type='input' 
                        className='add-bug__input' 
                        name='priority' 
                        placeholder='Priority'
                        value={fields.priority} 
                        onChange={onChange}
                    />
                </Form.Group>

                <Form.Group controlId="add-bug-description">
                    <Form.Control 
                        type="input" 
                        className='add-bug__input' 
                        name='description' 
                        placeholder="Description"
                        value={fields.description}
                        onChange={onChange}
                    />
                </Form.Group>

                <Button className='button' variant="primary" type="submit"> Add Bug </Button>
            </Form>
        </div>
    );
};

export default AddBug;

