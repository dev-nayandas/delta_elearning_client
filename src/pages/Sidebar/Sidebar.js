import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({categorey}) => {
    const {id, name} = categorey;
    return (
        <div>
            <Link><h2 className='mt-4'>{name}</h2></Link>
        </div>
    );
};

export default Sidebar;