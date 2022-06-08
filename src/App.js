import React, { Component } from 'react';
import GeneralView from './components/GeneralView';
import GeneralForm from './components/GeneralForm';
import EducationForm from './components/EducationForm';
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

    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div className='App-left'>
          <GeneralForm onFormChange={this.handlePersonalDetailsChange} />
          <EducationForm />
        </div>
        <div className='App-right'>
          <GeneralView {...this.state.personalDetails} />
        </div>
      </div>
    );
  }
}

export default App;
