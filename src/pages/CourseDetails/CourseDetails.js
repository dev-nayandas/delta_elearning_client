import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import NavBar from './NavBar';
import {ReactToPdf} from 'react-to-pdf';
import Pdf from 'react-to-pdf'
const ref = createRef()

const CourseDetails = () => {
    const details = useLoaderData();
    const {id,name,price,title,img,description} = details;
    console.log(details)


 

    return (
        <div>

          <div style={{height:'100px'}} className='bg-green-200 align-middle justify-center'>

          <Pdf targetRef={ref} filename="code-example.pdf">
              {({toPdf}) => <button onClick={toPdf}  className="btn btn-wide mt-8 ">Download Pdf</button>}
          </Pdf>

          <div ref={ref} className="mt-8">
            <h>Learn Programming language easily</h>
            <p>Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++.</p>

          </div>

          
          </div>
         
          <div className="hero min-h-screen bg-base-200">
          
          <div className="hero-content flex-col lg:flex-row">
            <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6">{description}</p>
              <button className="btn btn-primary"><Link to={`/checkout/${id}`}>Get Premium Access</Link></button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default CourseDetails;