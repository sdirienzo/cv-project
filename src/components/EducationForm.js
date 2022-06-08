import React, { Component } from 'react';
import '../styles/Form.css'

class EducationForm extends Component {
    handleChange = (event) => {
        this.props.onFormChange(event);
    }

    render() {
        return (
            <form>
                <h2>Education</h2>
                <input type='text' name='school' placeholder='School' onChange={this.handleChange} />
                <input type='text' name='field' placeholder='Field of Study / Course' onChange={this.handleChange} />
                <input type='text' name='start' placeholder='Start Date' onChange={this.handleChange} />
                <input type='text' name='end' placeholder='End Date' onChange={this.handleChange} />
                <input type='text' name='description' placeholder='Description' onChange={this.handleChange} />
                <div className='btn-row'>
                    <button className='btn btn-danger'>Delete</button>
                    <button className='btn btn-success'>Add</button>
                </div>
            </form>  
        );
    }
}

export default EducationForm;