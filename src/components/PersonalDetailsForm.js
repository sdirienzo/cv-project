import React, { Component } from 'react';

class PersonalDetailsForm extends Component {
    handleChange = (event) => {
        this.props.onFormChange(event);
    }

    render() {
        return (
            <form>
                <input type='text' name='name' placeholder='Name' onChange={this.handleChange} />
                <input type='text' name='title' placeholder='Title' onChange={this.handleChange} />
                <input type='text' name='phone' placeholder='Phone' onChange={this.handleChange} />
                <input type='text' name='email' placeholder='Email' onChange={this.handleChange} />
                <input type='text' name='location' placeholder='Location' onChange={this.handleChange} />
                <textarea name='description' placeholder='Description' onChange={this.handleChange} />
            </form>  
        );
    }
}

export default PersonalDetailsForm;