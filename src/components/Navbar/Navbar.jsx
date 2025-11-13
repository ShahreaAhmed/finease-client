import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import appLogo from '../../assets/appLogo.png'
import { FaUser } from "react-icons/fa6";
import './Navbar.css'
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const {user, signOutUser} = use(AuthContext);

    const links = <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/add-transaction'>Add Transaction</NavLink>
    <NavLink to='/my-transaction'>My Transactions</NavLink>
      <NavLink to='/reports'>Reports</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    <Link><img className='w-[280px]' src={appLogo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-8">
      {links}
    </ul>
  </div>
  <div className="navbar-end">


    {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              <li className="mt-3">
                <Link to={"/profile"}>
                  {/* <FaUser />  */}
                  Profile
                </Link>
              </li>

              <li>
                <Link to={"/my-models"}>
                  My Models
                </Link>
              </li>

              <li >
                <Link to={"/my-downloads"}>
                 My Downloads
                </Link>
              </li>

              <input
          //  onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
              
              <li>
                <a>
                  {" "}
                  {/* <FaGear />  */}
                  Settings
                </a>
              </li>
              <li>
                <button
                  onClick={signOutUser}
                  className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
                >
                  {/* <IoLogOut />  */}
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link to='/auth/login'>
    <button
        className="
            px-5 py-2 text-sm font-semibold rounded-lg
            bg-gradient-to-r from-blue-500 to-purple-600
            text-white shadow-lg shadow-blue-500/50
            transition duration-300 ease-in-out
            hover:from-blue-600 hover:to-purple-700
            hover:shadow-xl hover:shadow-blue-500/60
            focus:outline-none focus:ring-4 focus:ring-blue-300
            transform hover:scale-105
        "
    >
        Login
    </button></Link>
    <Link to='/auth/register'>
    <button
        className="
            px-5 py-2 ml-2 text-sm font-semibold rounded-lg
            text-purple-600 border border-purple-600
            bg-white shadow-md
            transition duration-300 ease-in-out
            hover:bg-purple-50 hover:text-purple-700
            hover:border-purple-700
            hover:shadow-xl hover:shadow-purple-200/50
            focus:outline-none focus:ring-4 focus:ring-purple-200
            transform hover:scale-105
        "
    >
        Signup
    </button></Link>
          </div>
    
        )}
  

    {/* <Link to='/auth/login'>
    <button
        className="
            px-5 py-2 text-sm font-semibold rounded-lg
            bg-gradient-to-r from-blue-500 to-purple-600
            text-white shadow-lg shadow-blue-500/50
            transition duration-300 ease-in-out
            hover:from-blue-600 hover:to-purple-700
            hover:shadow-xl hover:shadow-blue-500/60
            focus:outline-none focus:ring-4 focus:ring-blue-300
            transform hover:scale-105
        "
    >
        Login
    </button></Link>
    <Link to='/auth/register'>
    <button
        className="
            px-5 py-2 ml-2 text-sm font-semibold rounded-lg
            text-purple-600 border border-purple-600
            bg-white shadow-md
            transition duration-300 ease-in-out
            hover:bg-purple-50 hover:text-purple-700
            hover:border-purple-700
            hover:shadow-xl hover:shadow-purple-200/50
            focus:outline-none focus:ring-4 focus:ring-purple-200
            transform hover:scale-105
        "
    >
        Register
    </button></Link> */}
  </div>
</div>
    );
};

export default Navbar;