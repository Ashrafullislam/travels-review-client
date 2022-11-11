import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import logo from '../../../TravelImage/Logo/travel_logo.png';
import { FaUser } from 'react-icons/fa';



const Header = () => {
  const {LogOut,user} = useContext(AuthContext);
  const [smShow, setSmShow] = useState(false);

  const menu = 
        <> 
        <li> <NavLink to= '/' > Home </NavLink> </li>
        <li> <NavLink to= '/service' > Service  </NavLink> </li> 
        <li> <NavLink to= '/blog' > Blog   </NavLink> </li>
      
        </>

    
    return (
        <div className="navbar bg-slate-800  text-lime-50 rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-52">
              {menu}
              {
                user?
                <div className='flex items-center'>
              <li >  <NavLink className='' to= '/my-reviews' > My reviews   </NavLink>  </li>
              <li>  <NavLink to= "/add" > Add service   </NavLink></li>
                </div> 
                :
                <>
                </>
              }
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
            {
                user?
                <div className='flex items-center'>
                <NavLink className='mr-4' to= '/my-reviews' > My reviews   </NavLink> 
                <NavLink to= "/add" > Add service   </NavLink>
                </div> 
                :
                <>
                </>
              }
              
          </ul>
        </div>
        <div className="navbar-end">
          
           {user?
              <>
                
                 <button  onClick={LogOut} className='mr-3 btn btn-outline btn-warning' > Log Out </button>
                 
                 <div className='d-none d-lg-block'>
                 {user?.photoURL?
                   <img  onClick={() => setSmShow(true)} className='user-img w-14 h-14 rounded-full' src= {user?.photoURL}
                  title = {user.displayName} alt=''  />
                   :
                   <FaUser  onClick={() => setSmShow(true)} className='user-icon text-light mr-2' />
                 }     
                  </div> 
               </>
                  :  
                <>
               <Link to={'/login'} > <button  className=' btn btn-outline btn-warning mr-2' > Log in </button> </Link>
               <Link to={'/signup'}> <button  className='btn btn-outline btn-warning' > Sign up </button>
              </Link> 
              </>

            }

        </div>
      </div>
    );
};

export default Header ;