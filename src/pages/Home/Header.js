import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../Images/logo.png';
import './Header.css'

const Header = () => {
      const {user} = useContext(AuthContext);
      // console.log(user.displayName)
 
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
        <div className="w-10 rounded">
          <img src={logo} />
        </div>
      
          <Link className="btn btn-ghost normal-case text-xl">Delta E-Learning Hub</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {/* <li><a>Courses</a></li>
            <li><a>FAQ</a></li>
            <li><a>BLOG</a></li>
            <li><a>Theme</a></li> */}
            <Link className='link' to='/courses'>Courses</Link>
            <Link className='link' to='/faq'>FAQ</Link>
            <Link className='link' to='/blog'>Blog</Link>
            <Link className='link' to='/theme'>Theme</Link>
            <Link className='link' to='/login'>Login</Link>
            {user?.displayName && <span>{user?.displayName}</span>}
          </ul>
        </div>
        <div className="navbar-end">
          
        </div>
      </div>
    );
};

export default Header;