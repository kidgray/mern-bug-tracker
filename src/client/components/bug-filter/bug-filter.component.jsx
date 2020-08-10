import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Collapse, Form } from 'react-bootstrap';
import $ from 'jquery';

const BugFilter = (props) => {
    // State Hook for the Priority filter field
    const [priority, setPriority] = useState('');

    // State Hook for the Status filter field
    const [status, setStatus] = useState('');

    // State Hook for the collapsible filter's status (open or closed)
    const [open, setOpen] = useState(false);

    // We will need access to the history in order to modify the URL upon filter application
    const history = useHistory();

    const handleSubmit = () => {
        // Create a filter object from the state variables that correspond
        // to the filter fields
        const filter = { priority, status };

        // Add the filter fields and their values to the URL as the Query String
        history.push(`bugs?${$.param(filter)}`);

        // Set the filter using the new filter object we just made
        props.setFilter(filter);
    }

    return (
        <div className="container">
            <h2 className="display-3">List Filter</h2>

            <Button className="filter-btn" onClick={() => setOpen(!open)} aria-controls="bug-filter" aria-expanded={open}>
                Show Filter
            </Button>
            
            <Collapse in={open}>
                <Form>
                    <div id="bug-filter">
                        <Form.Group className="filter-field" controlId="form-priority">
                            <Form.Label> Priority </Form.Label>
                            <select className="form-control" value={priority} onChange={(event) => setPriority(event.target.value)}>
                                <option value=""> All </option>
                                <option value="1"> 1 </option>
                                <option value="2"> 2 </option>
                                <option value="3"> 3 </option>
                            </select>
                        </Form.Group>

                        <Form.Group className="filter-field" controlId="form-status">
                            <Form.Label> Status </Form.Label>
                            <select className="form-control" value={status} onChange={(event) => setStatus(event.target.value)}>
                                <option value=""> All </option>
                                <option value="New"> New </option>
                                <option value="Open"> Open </option>
                                <option value="Closed"> Closed </option>
                            </select>
                        </Form.Group>

                        <Button className="btn btn-primary filter-btn" onClick={handleSubmit}> Apply Filter </Button>
                    </div>
                </Form>
            </Collapse>
        </div>
    );
};

export default BugFilter;