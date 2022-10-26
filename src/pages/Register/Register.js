import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
       <div>
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nmae</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" />
                
                <label className="label">
                  <p>Already have and account? </p>   <a href="/login" className="label-text-alt link link-hover">Login Now</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register Now</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
        
      <button className="btn btn-primary">Google Sign Up</button>  
            <button className="btn btn-primary">Git Hub Sign Up </button>  
       </div>
    );
};

export default Register;