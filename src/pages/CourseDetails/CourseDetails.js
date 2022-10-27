import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import NavBar from './NavBar';

const CourseDetails = () => {
    const details = useLoaderData();
    const {id,name,price,title,img} = details;
    console.log(details)
    return (
        <div>
          <div style={{height:'100px'}} className='bg-green-200 align-middle justify-center'>
          <button className="btn btn-wide ">Download Pdf</button>
          </div>
         
          <div className="hero min-h-screen bg-base-200">
          
          <div className="hero-content flex-col lg:flex-row">
            <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary"><Link to='/checkout'>Get Premium Access</Link></button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default CourseDetails;