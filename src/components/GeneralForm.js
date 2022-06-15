import React from 'react';
import '../styles/Form.css'

const GeneralForm = (props) => {
    const handleChange = (event) => {
        props.onFormChange(event);
    }
    
    return (
        <form>
            <input type='text' name='name' placeholder='Name' onChange={handleChange} />
            <input type='text' name='title' placeholder='Title' onChange={handleChange} />
            <input type='text' name='phone' placeholder='Phone' onChange={handleChange} />
            <input type='text' name='email' placeholder='Email' onChange={handleChange} />
            <input type='text' name='location' placeholder='Location' onChange={handleChange} />
            <textarea name='summary' placeholder='Summary' onChange={handleChange} />
        </form>
    );
};

export default GeneralForm;