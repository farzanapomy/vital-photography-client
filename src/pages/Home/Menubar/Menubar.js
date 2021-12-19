import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/services'>Services</Link>
        </div>
    );
};

export default Menubar;