import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
        <div className='grid grid-cols-3 gap-4'>
           <div className=' bg-blue-600  '>
            {
                categories.map(categorey => <Sidebar
                
                    key={categorey.id}
                    categorey={categorey}
                ></Sidebar>)
            }
              
           </div>
           <div className='bg-green-50 col-span-2 grid grid-cols-2'>
               
                {
                categories.map(categorey => <Main
                
                    key={categorey.id}
                    categorey={categorey}
                ></Main>)
            }
           </div>
        </div>
    );
};

export default Courses;