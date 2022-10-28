import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const ChekOut = () => {
    const {user} = useContext(AuthContext);
    const info = useLoaderData();
    const {name, price, img, description,title} = info;
    console.log(info.name)
    return (
       
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <h2 className="card-title">{title}</h2>
    <h2 className="card-title">{user?.email}</h2>
    <li> Price :{price}</li>

    <p>{description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Check Out</button>
    </div>
  </div>
</div>
        
    );
};

export default ChekOut;