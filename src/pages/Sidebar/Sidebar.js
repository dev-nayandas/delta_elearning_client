import React, { useEffect, useState } from 'react';
import Topic from './Topic';

const Sidebar = () => {
    const [topic, setTopic] =  useState();
    useEffect(()=>{
        fetch('http://localhost:5000/topic')
        .then(res=>res.json())
        .then(data=>setTopic(data))
    },[])
    return (
        <div>
          
        </div>
    );
};

export default Sidebar;