import React, { Component } from 'react';
import '../styles/Form.css'

class WorkForm extends Component {
    handleChange = (event) => {
        const key = this.props.dataKey
        this.props.onFormChange(event, key);
    }

    handleAdd = (event) => {
        event.preventDefault();
        this.props.onAdd();
    }

    handleDelete = (event) => {
        const key = this.props.dataKey;
        event.preventDefault();
        this.props.onDelete(key);
    }

    render() {
        const { dataKey } = this.props;
        return (
            <form data-key={dataKey}>
                <input type='text' name='company' placeholder='Company' onChange={this.handleChange} />
                <input type='text' name='position' placeholder='Position' onChange={this.handleChange} />
                <input type='text' name='start' placeholder='Start Date' onChange={this.handleChange} />
                <input type='text' name='end' placeholder='End Date' onChange={this.handleChange} />
                <input type='text' name='description' placeholder='Description' onChange={this.handleChange} />
                <div className='btn-row'>
                    <button className='btn btn-danger' onClick={this.handleDelete}>Delete</button>
                    <button className='btn btn-success' onClick={this.handleAdd}>Add</button>
                </div>
            </form>  
        );
    }
}

export default WorkForm;