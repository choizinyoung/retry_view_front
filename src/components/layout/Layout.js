import React from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

function Layout(props) {
    const {children} = props;

    return (
        <div id='layout'>
            <Header />
            <div id='aside_wrap'>
                <Sidebar />
                {children}
            </div>
        </div>
    );
}

export default Layout;