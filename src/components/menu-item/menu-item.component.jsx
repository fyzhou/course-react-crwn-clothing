import React from 'react';

import './menu-item.styles.scss'

const MenuItem = (props) => (
    <div className='menu-item'>
        <div className='content'>
            <div className='title'>
                <h1 className='title'>{props.title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    </div>
);

export default MenuItem;