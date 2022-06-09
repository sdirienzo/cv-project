import React, { Component } from 'react';
import uniqid from 'uniqid';
import GeneralView from './components/GeneralView';
import GeneralForm from './components/GeneralForm';
import EducationForm from './components/EducationForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: '',
        title: '',
        phone: '',
        email: '',
        location: '',
        summary: '',
      },
      educationExperiences: [],
      workExperiences: [],
    };
  }

  handleGeneralDetailsChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState) => ({
      ...prevState,
      general: {
        ...prevState.general,
        [name]: value
      }
    }));

    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div className='App-form'>
          <section className='App-form-section'>
            <h2>General</h2>
            <GeneralForm onFormChange={this.handleGeneralDetailsChange} />
          </section>
          <section className='App-form-section'>
            <h2>Education</h2>
            <EducationForm />
          </section>
        </div>
        <div className='App-view'>
          <GeneralView {...this.state.general} />
        </div>
      </div>
    );
  }
}

export default App;
