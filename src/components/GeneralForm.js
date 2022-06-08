import React, { Component } from 'react';
import '../styles/Form.css'

class GeneralForm extends Component {
    handleChange = (event) => {
        this.props.onFormChange(event);
    }

    render() {
        return (
            <form>
                <h2>General</h2>
                <input type='text' name='name' placeholder='Name' onChange={this.handleChange} />
                <input type='text' name='title' placeholder='Title' onChange={this.handleChange} />
                <input type='text' name='phone' placeholder='Phone' onChange={this.handleChange} />
                <input type='text' name='email' placeholder='Email' onChange={this.handleChange} />
                <input type='text' name='location' placeholder='Location' onChange={this.handleChange} />
                <textarea name='summary' placeholder='Summary' onChange={this.handleChange} />
            </form>  
        );
    }
}

export default GeneralForm;