import React, { Component } from 'react';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalDetails: {
        name: '',
        title: '',
        phone: '',
        email: '',
        location: '',
        summary: '',
      },
    };
  }

  handlePersonalDetailsChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState) => ({
      ...prevState,
      personalDetails: {
        ...prevState.personalDetails,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div className="App">
        <div className='App-left'>
          <PersonalDetailsForm onFormChange={this.handlePersonalDetailsChange} />
        </div>
        <div className='App-right'>

        </div>
      </div>
    );
  }
}

export default App;
