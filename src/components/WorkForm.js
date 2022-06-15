import React from 'react';
import '../styles/Form.css'

const WorkForm = (props) => {
    const handleChange = (event) => {
        const key = props.dataKey
        props.onFormChange(event, key);
    }

    const handleAdd = (event) => {
        event.preventDefault();
        props.onAdd();
    }

    const handleDelete = (event) => {
        const key = props.dataKey;
        event.preventDefault();
        props.onDelete(key);
    }

    const { dataKey } = props;

    return (
        <form data-key={dataKey}>
            <input type='text' name='company' placeholder='Company' onChange={handleChange} />
            <input type='text' name='position' placeholder='Position' onChange={handleChange} />
            <input type='text' name='start' placeholder='Start Date' onChange={handleChange} />
            <input type='text' name='end' placeholder='End Date' onChange={handleChange} />
            <input type='text' name='description' placeholder='Description' onChange={handleChange} />
            <div className='btn-row'>
                <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
                <button className='btn btn-success' onClick={handleAdd}>Add</button>
            </div>
        </form>
    );
};

export default WorkForm;