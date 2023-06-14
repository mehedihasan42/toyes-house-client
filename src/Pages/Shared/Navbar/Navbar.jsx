import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './NavBar.css'

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.error(error)
      })
  }

  const navItems = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allToyes'>All Toys</NavLink></li>
    <li><NavLink to='/myToyes'>My Toys</NavLink></li>
    <li><NavLink to='/addToy'>Add A Toy</NavLink></li>
    <li><NavLink to='/blogs'>Blogs</NavLink></li>
  </>

  return (
    <div className="navbar bg-black fixed bg-opacity-30 z-10 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
            {navItems}
            {
              user?.email ?
                <button className='btn btn-outline border-white text-white ml-2' onClick={handleLogOut}>Logout</button> :
                <Link to='/login' className='btn btn-outline'>Login</Link>
            }
          </ul>
        </div>
        <div className='hidden lg:flex'>
        <img src="https://i.ibb.co/swDdjhz/Toyes-House.png" className='w-14 lg:w-20 rounded-full' alt="" />
          <p className="font-bold lg:font-extrabold normal-case text-lg text-end lg:text-xl mt-8 lg:ml-4">ToysHouse<br /></p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        {user?.email ? <a className="btn"><FaUserAlt /></a> : null}

        {
          user?.email ?
            <button className='btn ml-2' onClick={handleLogOut}>Logout</button> :
            <Link to='/login' className='btn'>Login</Link>
        }
      </div>
      <div className='lg:hidden'>
          <p className="font-bold lg:font-extrabold normal-case text-lg text-end ml-2 lg:text-xl lg:ml-4">ToysHouse<br /></p>
      <img src="https://i.ibb.co/swDdjhz/Toyes-House.png" className='w-14 lg:w-20 ml-4 rounded-full' alt="" />
      </div>
    </div>
  );
};

export default Navbar;