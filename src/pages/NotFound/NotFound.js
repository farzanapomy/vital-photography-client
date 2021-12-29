import React from 'react';
import { Link } from 'react-router-dom';
import not from '../../images/404.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className='w-25 img-fluid' src={not} alt="" />
            <br />
            <Link to='/home'>
                <button className='goBack-btn'>Go back</button>
            </Link>
        </div>
    );
};

export default NotFound;