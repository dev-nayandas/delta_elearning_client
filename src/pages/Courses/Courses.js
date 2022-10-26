import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
    return (
        <div className='flex'>
            <div className='columns-4 bg-blue-200'>{<Sidebar></Sidebar>}</div>
            <div className='columns-12 text-center bg-gray-300'>main</div>
        </div>
    );
};

export default Courses;