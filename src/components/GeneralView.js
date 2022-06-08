import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiPhone, mdiEmail, mdiMapMarker } from '@mdi/js';
import '../styles/GeneralView.css';

class GeneralView extends Component {
    render() {
        const { name, title, phone, email, location, summary } = this.props;
        return (
            <div className='GeneralView-view'>
                <div className='GeneralView-details'>
                    <div className='GeneralView-details-left'>
                        <p className='GeneralView-name'>{name}</p>
                        <p className='GeneralView-title'>{title}</p>
                    </div>
                    <div className='GeneralView-details-right'>
                        <div className='GeneralView-detail'>
                            <Icon path={mdiPhone} size={'16px'} />
                            <p>{phone}</p>
                        </div>
                        <div className='GeneralView-detail'>
                            <Icon path={mdiEmail} size={'16px'} />
                            <p>{email}</p>
                        </div>
                        <div className='GeneralView-detail'>
                            <Icon path={mdiMapMarker} size={'16px'} />
                            <p>{location}</p>
                        </div>
                    </div>    
                </div>
                <hr />
                <p className='GeneralView-summary'>{summary}</p>
            </div>
        );
    }
}

export default GeneralView;