import React from 'react';

const ContactUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Enter your name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Enter your email here" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Comment</span>
          </label>
          <input type="text" placeholder="Write Your Commnet Here" className="input input-bordered" />
     
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default ContactUs;