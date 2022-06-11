import React, { Component } from 'react';
import './App.css';
import uniqid from 'uniqid';
import GeneralView from './components/GeneralView';
import GeneralForm from './components/GeneralForm';
import EducationForm from './components/EducationForm';
import EducationView from './components/EducationView';
import WorkForm from './components/WorkForm';

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
      workExperiences: [
        {
          id: uniqid(),
          company: '',
          position: '',
          start: '',
          end: '',
          description: '',
        }
      ],
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

  handleWorkChange = (event, key) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const index = this.state.workExperiences.findIndex(experience => experience.id === key);
     
    let experience = this.state.workExperiences[index];
    experience[name] = value;
    
    let experiences = [...this.state.workExperiences];
    experiences[index] = experience;
    
    this.setState((prevState) => ({
      ...prevState,
      workExperiences: experiences,
    }));
  }

  addWorkExperience = () => {
    const newExperience = {
      id: uniqid(),
      company: '',
      position: '',
      start: '',
      end: '',
      description: '',
    }

    this.setState((prevState) => ({
      ...prevState,
      workExperiences: [...prevState.workExperiences, newExperience],
    }));
  }

  deleteWorkExperience = (key) => {
    if (this.state.workExperiences.length === 1) {
      return;
    }

    this.setState((prevState) => ({
      ...prevState,
      workExperiences: prevState.workExperiences.filter((experience) => experience.id !== key)
    }))
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
    const { educationExperiences, workExperiences } = this.state;
    return (
      <div className="App">
        <div className='App-form'>
          <section className='App-form-section'>
            <h2>General</h2>
            <GeneralForm onFormChange={this.handleGeneralChange} />
          </section>
          <section className='App-form-section'>
            <h2>Work Experience</h2>
            {workExperiences.map((experience) =>
              <WorkForm key={experience.id} dataKey={experience.id} onFormChange={this.handleWorkChange} onAdd={this.addWorkExperience} onDelete={this.deleteWorkExperience} />
            )}
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
