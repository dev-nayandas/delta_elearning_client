import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({categorey}) => {
    const {id,name,img, title} = categorey;
    return (
        <div className="card w-96 glass mt-6 ml-6">
  <figure><img src={img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{title}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-primary"><Link to={`/categorey/${id}`}>Details</Link></button>
      
    </div>
  </div>
</div>
    );
};

export default Main;