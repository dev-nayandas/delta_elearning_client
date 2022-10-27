import React from 'react';

const BestCard = () => {
    return (
        <div className='mx-5 my-5'>
            <h2 className='mt-4 mb-2 text-3xl text-purple-800' >Why Choose Us?</h2>
            <div className='flex  my-5'> 
       
       <div className="card w-96 bg-primary text-primary-content mx-2">
       <div className="card-body">
       <h2 className="card-title">High Quality Tpoic </h2>
        <p>We provide high quality topic and worldclass resource</p>
      
        </div>
       </div>
       <div className="card w-96 bg-primary text-primary-content mx-2 ">
       <div className="card-body">
       <h2 className="card-title">Proffesional Mentor</h2>
        <p>ALl of our mentors are highly  Proffesional</p>
      
        </div>
       </div>
       <div className="card w-96 bg-primary text-primary-content mx-2  ">
       <div className="card-body">
       <h2 className="card-title">Time flexibility </h2>
        <p>Learn anytime from anywhere</p>
       
        </div>
       </div>
   </div>
        </div>
    );
};

export default BestCard;