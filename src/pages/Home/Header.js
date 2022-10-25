import React from 'react';
import logo from '../../Images/logo.png'

const Header = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
        <div className="w-10 rounded">
          <img src={logo} />
        </div>
      
          <a className="btn btn-ghost normal-case text-xl">Delta E-Learning Hub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><a>Courses</a></li>
            <li><a>FAQ</a></li>
            <li><a>BLOG</a></li>
            <li><a>Theme</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          
        </div>
      </div>
    );
};

export default Header;