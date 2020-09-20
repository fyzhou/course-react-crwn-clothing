import React from 'react';
import { Link } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss'

const HomePage = ({ history, location, match }) => {
    return (
        <div className='homepage'>
            <Link to='/topics' />
            <Directory />
        </div>
    )
}

export default HomePage;