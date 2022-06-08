import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiPhone, mdiEmail, mdiMapMarker } from '@mdi/js';
import '../styles/PersonalDetailsView.css';

class PersonalDetailsView extends Component {
    render() {
        const { name, title, phone, email, location, summary } = this.props;
        return (
            <div className='personal-details-view'>
                <div className='personal-details'>
                    <div className='personal-details-left'>
                        <p className='personal-name'>{name}</p>
                        <p className='personal-title'>{title}</p>
                    </div>
                    <div className='personal-details-right'>
                        <div className='personal-detail'>
                            <Icon path={mdiPhone} size={'16px'} />
                            <p>{phone}</p>
                        </div>
                        <div className='personal-detail'>
                            <Icon path={mdiEmail} size={'16px'} />
                            <p>{email}</p>
                        </div>
                        <div className='personal-detail'>
                            <Icon path={mdiMapMarker} size={'16px'} />
                            <p>{location}</p>
                        </div>
                    </div>    
                </div>
                <hr />
                <p className='personal-summary'>{summary}</p>
            </div>
        );
    }
}

export default PersonalDetailsView;