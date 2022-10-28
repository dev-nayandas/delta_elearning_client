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
          : <p>avatar</p>

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