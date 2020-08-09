import React, { useState } from 'react';

const BugEditPage = () => {
    // State Hook for the bug priority
    const [priority, setPriority] = useState('');

    // State Hook for the bug status
    const [status, setStatus] = useState('');

    // State Hook for the bug description
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // TODO: USE AJAX PUT API TO SUBMIT THE FORM INFORMATION AND EDIT THE BUG. 

        // TODO: RETURN TO THE BUG LIST UPON SUCCESSFUL UPDATE OF BUG INFO. 
    }

    return (
        <div>
            <form className="bug-edit-form">
                EDIT BUG: BUG ID GOES HERE. 

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

            BACK TO BUG LIST LINK GOES HERE.
        </div>
    )
};

export default BugEditPage;