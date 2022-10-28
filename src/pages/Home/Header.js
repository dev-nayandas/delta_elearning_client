import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../Images/logo.png';
import './Header.css'

const Header = () => {
      const {user, logOut} = useContext(AuthContext);
      // console.log(user)
 const handleSignOut= ()=>{
    logOut()
    .then(()=>{})
    .catch(error =>console.error(error))
 };


    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
        <div className="w-10 rounded">
          <img src={logo} />
        </div>
      
          <Link to='/home' className="btn btn-ghost normal-case text-xl">Delta E-Learning Hub</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <Link className='link' to='/courses'>Courses</Link>
            <Link className='link' to='/faq'>FAQ</Link>
            <Link className='link' to='/blog'>Blog</Link>
            <Link className='link' to='/theme'>Theme</Link>


           
        {
          user?.photoURL?
          <div style={{height:'30px', width:'30px', }} className="avatar mr-3">
               <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img alt={user?.displayName}  src={user?.photoURL} />
                </div>
          </div>
          : <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        

        }






            {/* <image  alt='' src={user.photoURL}></image> */}
            {/* {user?.displayName && <span className='mr-2'>{user?.displayName}</span>} */}

            {
              user?.email?
              <button onClick={handleSignOut} className="btn btn-xs">Sign Out</button>
              : <Link className='link' to='/login'>Login</Link>
            }
            

          </ul>
        </div>
        <div className="navbar-end">
          
        </div>
      </div>
    );
};

export default Header;