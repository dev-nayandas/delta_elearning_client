import React from 'react';
import ChooseUs from './ChooseUs';

const Home = () => {
    return (
    <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=600")` }}>
                 <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
             <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Delta E-Learning Hub</h1>
             <p className="mb-5">Choose our best courses to make yourself skilled. Today's decision can change your life. So why are you waiting for?</p>
      
                 </div>
                 </div>
 
            </div>
            <ChooseUs></ChooseUs>
    </div>

    );
};

export default Home;