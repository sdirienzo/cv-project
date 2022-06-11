import React, { Component } from 'react';
import '../styles/Form.css'

class EducationForm extends Component {
    handleChange = (event) => {
        this.props.onFormChange(event);
    }

    handleAdd = (event) => {
        event.preventDefault();
        this.props.onAdd();
    }

    render() {
        const { dataKey, displayDelete, displayAdd } = this.props;
        return (
            <form data-key={dataKey}>
                <input type='text' name='school' placeholder='School' onChange={this.handleChange} />
                <input type='text' name='field' placeholder='Field of Study / Course' onChange={this.handleChange} />
                <input type='text' name='start' placeholder='Start Date' onChange={this.handleChange} />
                <input type='text' name='end' placeholder='End Date' onChange={this.handleChange} />
                <div className='btn-row'>
                    {displayDelete ? <button className='btn btn-danger visible'>Delete</button> : <button className='btn btn-danger invisible'>Delete</button>}
                    {/* <button className='btn btn-danger'>Delete</button> */}
                    {displayAdd ? <button className='btn btn-success visible' onClick={this.handleAdd}>Add</button> : <button className='btn btn-success invisible' onClick={this.handleAdd}>Add</button>}
                    {/* <button className='btn btn-success' onClick={this.handleAdd}>Add</button> */}
                </div>
            </form>  
        );
    }
}

export default EducationForm;