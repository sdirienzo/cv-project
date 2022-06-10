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
      educationExperiences: [
        {
          id: uniqid(),
          school: '',
          field: '',
          start: '',
          end: '',
        },
      ],
      workExperiences: [],
    };
  }

  handleGeneralChange = (event) => {
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
  }

  handleEducationChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const index = this.state.educationExperiences.findIndex(experience => experience.id === target.parentNode.getAttribute('data-key'));
     
    let experience = this.state.educationExperiences[index];
    experience[name] = value;
    
    let experiences = [...this.state.educationExperiences];
    experiences[index] = experience;
    
    this.setState((prevState) => ({
      ...prevState,
      educationExperiences: experiences,
    }));
  }

  render() {
    const { educationExperiences } = this.state;
    return (
      <div className="App">
        <div className='App-form'>
          <section className='App-form-section'>
            <h2>General</h2>
            <GeneralForm onFormChange={this.handleGeneralChange} />
          </section>
          <section className='App-form-section'>
            <h2>Education</h2>
            {educationExperiences.map((experience) =>
              <EducationForm key={experience.id} dataKey={experience.id} onFormChange={this.handleEducationChange} />
            )}
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
