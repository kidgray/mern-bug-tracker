import React, { useState } from 'react';

const AddBug = () => {
    // State variable for errors. Will be used for input validation.
    const [error, setError] = useState(false);

    return (
        <div>
            { error && <p>{ error }</p> }
            
            <form>
                <input type="input" placeholder="Description"></input>
                <button className='button'>Add Bug</button>
            </form>
        </div>
    );
};

export default AddBug;

