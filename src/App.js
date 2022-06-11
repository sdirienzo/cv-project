import React, { Component } from 'react';
import uniqid from 'uniqid';
import GeneralView from './components/GeneralView';
import GeneralForm from './components/GeneralForm';
import EducationForm from './components/EducationForm';
import './App.css';
import EducationView from './components/EducationView';

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

  handleEducationChange = (event, key) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const index = this.state.educationExperiences.findIndex(experience => experience.id === key);
     
    let experience = this.state.educationExperiences[index];
    experience[name] = value;
    
    let experiences = [...this.state.educationExperiences];
    experiences[index] = experience;
    
    this.setState((prevState) => ({
      ...prevState,
      educationExperiences: experiences,
    }));
  }

  addEducationExperience = () => {
    const newExperience = {
      id: uniqid(),
      school: '',
      field: '',
      start: '',
      end: '',
    }

    this.setState((prevState) => ({
      ...prevState,
      educationExperiences: [...prevState.educationExperiences, newExperience],
    }));
  }

  deleteEducationExperience = (key) => {
    if (this.state.educationExperiences.length === 1) {
      return;
    }

    this.setState((prevState) => ({
      ...prevState,
      educationExperiences: prevState.educationExperiences.filter((experience) => experience.id !== key)
    }))
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
              <EducationForm key={experience.id} dataKey={experience.id} onFormChange={this.handleEducationChange} onAdd={this.addEducationExperience} onDelete={this.deleteEducationExperience} />
            )}
          </section>
        </div>
        <div className='App-view'>
          <section className='App-view-section'>
              <GeneralView {...this.state.general} />
          </section>
          <section className='App-view-section'>
            <p className='App-section-header'>Education</p>
            {educationExperiences.map((experience) => 
              <EducationView key={uniqid()} {...experience} />
            )}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
