import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
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

        // TODO: USE AJAX PUT API TO SUBMIT THE FORM INFORMATION AND EDIT THE BUG.
        $.ajax({
            method: 'PUT',
            url: `http://localhost:3000/api/bugs/${id}`,
            contentType: 'application/json',
            data: JSON.stringify(editedBug)
        });

        // TODO: RETURN TO THE BUG LIST UPON SUCCESSFUL UPDATE OF BUG INFO.
        history.push('/bugs');
    }

    return (
        <div>
            <form className="bug-edit-form">
                <div className="bug-id">
                    Bug ID: { id } 
                </div>
                

                Priority: 
                <select className="bug-field" value={priority} onChange={(event) => setPriority(event.target.value)}>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                </select>

                Status:
                <select className="bug-field" value={status} onChange={(event) => setStatus(event.target.value)}>
                    <option value="Open"> Open </option>
                    <option value="Closed"> Closed </option>
                </select>

                Description:
                <input type="text" className="bug-field" value={description} onChange={(event) => setDescription(event.target.value)} />

                <button onClick={handleSubmit}> Submit </button>
            </form>

            <Link to="/bugs" className="home-link"> Back to Bug List </Link>
        </div>
    )
};

export default BugEditPage;