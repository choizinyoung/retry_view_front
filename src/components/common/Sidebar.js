import React from 'react';
import Profile from './Profile';
import Category from './Category';

function Sidebar(props) {
    return (
        <div id='aside'>
            <Profile />
            <Category />
        </div>
    );
}

export default Sidebar;