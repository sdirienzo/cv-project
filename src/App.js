import React, { useState } from 'react';
import './App.css';
import uniqid from 'uniqid';
import GeneralView from './components/GeneralView';
import GeneralForm from './components/GeneralForm';
import EducationForm from './components/EducationForm';
import EducationView from './components/EducationView';
import WorkForm from './components/WorkForm';
import WorkView from './components/WorkView';

const App = (props) => {

  const [general, setGeneral] = useState(
    {
      name: '',
      title: '',
      phone: '',
      email: '',
      location: '',
      summary: '',
    }
  );

  const [educationExperiences, setEducationExperiences] = useState(
    [
      {
        id: uniqid(),
        school: '',
        field: '',
        start: '',
        end: '',
      },
    ]
  );

  const [workExperiences, setWorkExperiences] = useState(
    [
      {
        id: uniqid(),
        company: '',
        position: '',
        start: '',
        end: '',
        description: '',
      }
    ]
  )

  const handleGeneralChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setGeneral({
      ...general,
      [name]: value
    });
  }

  const handleWorkChange = (event, key) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const index = workExperiences.findIndex(experience => experience.id === key);
    
    let experience = workExperiences[index];
    experience[name] = value;
    
    let experiences = [...workExperiences];
    experiences[index] = experience;

    setWorkExperiences(experiences);
  }

  const addWorkExperience = () => {
    const newExperience = {
      id: uniqid(),
      company: '',
      position: '',
      start: '',
      end: '',
      description: '',
    }

    setWorkExperiences([...workExperiences, newExperience]);
  }

  const deleteWorkExperience = (key) => {
    if (workExperiences.length === 1) {
      return;
    }

    setWorkExperiences(workExperiences.filter((experience) => experience.id !== key));
  }

  const handleEducationChange = (event, key) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const index = educationExperiences.findIndex(experience => experience.id === key);
     
    let experience = educationExperiences[index];
    experience[name] = value;
    
    let experiences = [...educationExperiences];
    experiences[index] = experience;

    setEducationExperiences(experiences);
  }

  const addEducationExperience = () => {
    const newExperience = {
      id: uniqid(),
      school: '',
      field: '',
      start: '',
      end: '',
    }

    setEducationExperiences([...educationExperiences, newExperience]);
  }

  const deleteEducationExperience = (key) => {
     if (educationExperiences.length === 1) {
      return;
    }

    setEducationExperiences(educationExperiences.filter((experience) => experience.id !== key));
  }

  return (
    <div className="App">
      <div className='App-form'>
        <section className='App-form-section'>
          <h2>General</h2>
          <GeneralForm onFormChange={handleGeneralChange} />
        </section>
        <section className='App-form-section'>
          <h2>Work Experience</h2>
          {workExperiences.map((experience) =>
            <WorkForm key={experience.id} dataKey={experience.id} onFormChange={handleWorkChange} onAdd={addWorkExperience} onDelete={deleteWorkExperience} />
          )}
        </section>
        <section className='App-form-section'>
          <h2>Education</h2>
          {educationExperiences.map((experience) =>
            <EducationForm key={experience.id} dataKey={experience.id} onFormChange={handleEducationChange} onAdd={addEducationExperience} onDelete={deleteEducationExperience} />
          )}
        </section>
      </div>
      <div className='App-view'>
        <section className='App-view-section'>
            <GeneralView {...general} />
        </section>
        <section className='App-view-section'>
          <p className='App-section-header'>Work Experience</p>
          {workExperiences.map((experience) => <WorkView key={uniqid()} {...experience} />)}
        </section>
        <section className='App-view-section'>
          <p className='App-section-header'>Education</p>
          {educationExperiences.map((experience) => <EducationView key={uniqid()} {...experience} />)}
        </section>
      </div>
    </div>
  );
}

export default App;
