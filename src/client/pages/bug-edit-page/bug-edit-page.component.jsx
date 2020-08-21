import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import $ from 'jquery';

const BugEditPage = () => {
    // State Hook for the bug priority. Defaults to Priority 1 (highest).
    const [priority, setPriority] = useState("1");

    // State Hook for the bug status. Defaults to Open.
    const [status, setStatus] = useState("Open");

    // State Hook for the bug description. No default value.
    const [description, setDescription] = useState("");

    // Hook for the browser history (will be used to return to bugs page upon editing a bug)
    const history = useHistory();

    // Hook for the URL Parameters (used to get the bug's id)
    const { id } = useParams();

    const handleSubmit = (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // Create an object containing the new values for the fields
        // of the edited bug
        const editedBug = {
            priority,
            status,
            description
        };

        // USE AJAX PUT API TO SUBMIT THE FORM INFORMATION AND EDIT THE BUG.
        $.ajax({
            method: 'PUT',
            url: `/api/bugs/${id}`,
            contentType: 'application/json',
            data: JSON.stringify(editedBug)
        });

        // RETURN TO THE BUG LIST UPON SUCCESSFUL UPDATE OF BUG INFO.
        history.push('/bugs');
    }

    return (
        <div className="container">
            <h2 className='edit-header display-3'> Edit Bug </h2>

            <div className="bug-id">
                Bug ID: { id } 
            </div>

            <Form className="bug-edit-form">
                <Form.Group controlId="edit-bug-priority">
                    <Form.Label> Priority </Form.Label>
                    <select className="bug-field form-control" value={priority} onChange={(event) => setPriority(event.target.value)}>
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                    </select>
                </Form.Group>

                <Form.Group controlId="edit-bug-status">
                    <Form.Label> Status </Form.Label>
                    <select className="bug-field form-control" value={status} onChange={(event) => setStatus(event.target.value)}>
                        <option value="Open"> Open </option>
                        <option value="Closed"> Closed </option>
                    </select>
                </Form.Group>

                <Form.Group controlId="edit-bug-description">
                    <Form.Label> Description </Form.Label>
                    <Form.Control type="input" className="bug-field" value={description} onChange={(event) => setDescription(event.target.value)} />
                </Form.Group>

                <Button className="edit-btn" onClick={handleSubmit} variant="primary" type="submit"> Submit </Button>
            </Form>

            <Link to="/bugs" className="home-link"> Back to Bug List </Link>
        </div>
    )
};

export default BugEditPage;