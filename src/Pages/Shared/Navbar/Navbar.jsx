import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {

  const { user,logOut } = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.error(error)
    })
  }

  const navItems = <>
    <li><Link>Home</Link></li>
    <li><Link to='/allToyes'>All Toys</Link></li>
    {
      user? <li><Link to='/myToyes'>My Toys</Link></li> : null
    }
    {
      user?<li><Link to='/addToy'>Add A Toy</Link></li>: null
    }
    <li><Link to='/blogs'>Blogs</Link></li>
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <img src="https://i.ibb.co/swDdjhz/Toyes-House.png" className='w-14 lg:w-20 rounded-full' alt="" />
        <p className="font-bold lg:font-extrabold normal-case text-lg lg:text-xl">ToysHouse<br /></p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? <a className="btn"><FaUserAlt /></a>: null}
        {
          user?.email ? 
          <button className='btn ml-2' onClick={handleLogOut}>Logout</button>:
        <Link to='/login' className='btn'>Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;