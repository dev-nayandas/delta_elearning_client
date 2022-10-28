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
const themehandle =() =>{
  alert('theme changed')
}

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
            



           
        {
          user?.photoURL?
          <div style={{height:'30px', width:'30px', }} className="avatar mr-3">
               <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img alt={user?.displayName}  src={user?.photoURL} />
                </div>
          </div>
          : <svg className="mr-3 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        

        }


            {
              user?.email?
              <button onClick={handleSignOut} className="btn btn-xs">Sign Out</button>
              : <Link className='link' to='/login'>Login</Link>
            }
            

          </ul>
        </div>
        <svg onClick={themehandle} className='ml-8 mr-3' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>


        <div className="navbar-end">
          
        </div>
      </div>
    );
};

export default Header;