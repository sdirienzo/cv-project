import React from 'react';
import '../styles/EducationView.css';

const EducationView = (props) => {
    const { school, field, start, end } = props;
    return (
        <div className='EducationView-view'>
            <div className='EducationView-row'>
                <div className='EducationView-row-left'>
                    <p className='EducationView-field'>{field}</p>
                </div>
                <div className='EducationView-row-right'>
                    <p className='EducationView-school'>{school}</p>
                    <span className='EducationView-divider'>|</span>
                    <p className='EducationView-dates'>{start} - {end}</p>
                </div>
            </div>
        </div>
    );
};

export default EducationView;