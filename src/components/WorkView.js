import React, { Component } from 'react';
import '../styles/WorkView.css';

class WorkView extends Component {
    render() {
        const { company, position, start, end, description } = this.props;
        return (
            <div className='WorkView-view'>
                <div className='WorkView-row'>
                    <div className='WorkView-row-left'>
                        <p className='WorkView-position'>{position}</p>
                    </div>
                    <div className='WorkView-row-right'>
                        <p className='WorkView-company'>{company}</p>
                        <span className='WorkView-divider'>|</span>
                        <p className='WorkView-dates'>{start} - {end}</p>
                    </div>
                </div>
                <div className='WorkView-row'>
                    <p className='WorkView-description'>{description}</p>
                </div>
            </div>
        );
    }
}

export default WorkView;