import React from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

function Layout(props) {
    return (
        <div id='layout'>
            <Header />
            <Sidebar />
        </div>
    );
}

export default Layout;