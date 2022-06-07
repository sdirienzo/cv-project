import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiPhone, mdiEmail, mdiMapMarker } from '@mdi/js';

class PersonalDetailsView extends Component {
    render() {
        const { name, title, phone, email, location, summary } = this.props;
        return (
            <div>
                <div>
                    <div>
                        <p>{name}</p>
                        <p>{title}</p>
                    </div>
                    <div>
                        <Icon path={mdiPhone} size={'12px'} />
                        <p>{phone}</p>
                    </div>
                    <div>
                        <Icon path={mdiEmail} size={'12px'} />
                        <p>{email}</p>
                    </div>
                    <div>
                        <Icon path={mdiMapMarker} size={'12px'} />
                        <p>{location}</p>
                    </div>
                </div>
                <hr />
                <p>{summary}</p>
            </div>
        );
    }
}

export default PersonalDetailsView;