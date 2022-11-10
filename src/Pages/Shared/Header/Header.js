import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../TravelImage/Logo/travel_logo.png';

const Header = () => {
    const menu = 
        <> 
        <li> <NavLink to= '/' > Home </NavLink> </li>
        <li> <NavLink to= '/service' > Service  </NavLink> </li> 
        <li> <NavLink to= '/review' > Review   </NavLink> </li> 
        <li> <NavLink to= '/blog' > Blog   </NavLink> </li> 
        </>
    
    return (
        <div className="navbar bg-slate-800  text-lime-50 rounded-md ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-52">
              {menu}
            </ul>
          </div>
         <div>
         <img style={{width:'50px', height:'40px' , borderRadius:'10px'}} src= {logo} alt='logo' />
             <span> Travles Zone</span>
         </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           {menu}
          </ul>
        </div>
        <div className="navbar-end">
            <Link to='/login' >  <button className="btn btn-outline btn-warning mr-2"> Log in </button> </Link>
            <Link to='/signup' >  <button className="btn btn-outline btn-warning"> Sign Up  </button> </Link>
        </div>
      </div>
    );
};

export default Header ;