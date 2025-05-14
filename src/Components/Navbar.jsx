

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthPovider/AuthPovider";
import { useContext } from "react";
import logo from '../../public/question.png'




const Navbar = () => {

  const{user,signOutUser,setLoading}=useContext(AuthContext)
  const handleLogout=()=>{
    signOutUser()
    setLoading(false)
  }

    return (
        <div className=" bg-secondary sticky top-0 z-50 border-b">
            <div className="w-11/12 mx-auto navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow">
       <li ><NavLink to={'/'}  >Home</NavLink></li>
    <li ><NavLink to={'/allQueries'}>Queries</NavLink></li>
    <li ><NavLink to={'/aboutus'}>About Us</NavLink></li>
    <li ><NavLink to={'/faq'}>FAQ</NavLink></li>
    <li ><NavLink to={'/contactus'}>Contact</NavLink></li>
     
     
     {user?.email && (
       <>
        
      <li ><NavLink to={'/otherRecommendation'}>Recommendation For Me</NavLink></li>
      <li><NavLink to={`/myQueries`} >My Queries</NavLink></li>
      <li><NavLink to={`/myRecommendation`} >My Recommendation</NavLink></li>
       
       
       </>
     )}

{/* some links */}
      </ul>
    </div>
    <p className="font-bold text-2xl "><span className="text-primary">PROD</span>ASK</p>
    
    <img  src={logo} alt="" className="w-10 h-10 hidden md:block" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-md font-bold text-gray-400">
     
    <li className=""><NavLink className={({ isActive }) => (isActive ? " text-primary" : "")}  to={'/'}  >Home</NavLink></li>
    <li className=""><NavLink  to={'/allQueries'} className={({ isActive }) => (isActive ? " text-primary" : "")}>Queries</NavLink></li>
    <li className=""><NavLink  to={'/aboutus'} className={({ isActive }) => (isActive ? " text-primary" : "")}>About Us</NavLink></li>
    <li className=""><NavLink  to={'/faq'} className={({ isActive }) => (isActive ? " text-primary" : "")}>FAQ</NavLink></li>
    <li className=""><NavLink  to={'/contactus'} className={({ isActive }) => (isActive ? " text-primary" : "")}>Contact</NavLink></li>
     
     
     {user?.email && (
       <>
        
      <li className=""><NavLink  to={'/otherRecommendation'} className={({ isActive }) => (isActive ? "text-primary" : "")} >Recommendation For Me</NavLink></li>
      <li className=""><NavLink to={`/myQueries`} className={({ isActive }) => (isActive ? "text-primary" : "")} >My Queries</NavLink></li>
      <li className=""><NavLink to={`/myRecommendation`} className={({ isActive }) => (isActive ? "text-primary" : "")} >My Recommendation</NavLink></li>
       
       
       </>
     )}





      
     
    </ul>
  </div>
  <div className="navbar-end space-x-2 z-50 ">
  <a  data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} >
      {
        user?.email && <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-full" />
      }
      
      
    </a>
 
    
    {
      user?.email ?<button onClick={handleLogout} className="btn btn-sm bg-primary text-md text-white font-bold rounded-full"> Logout</button>:<div className="join  ">
        <Link to={'/login'} className="btn btn-sm join-item bg-primary text-md font-bold text-white rounded-full">Login</Link> 
        <Link to={'/register'} className="btn btn-sm join-item   bg-primary text-white text-md font-bold rounded-full">Register</Link> 
        
      </div>
    }
   
   <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="dark" />

  {/* sun icon */}
  <svg
    className="swap-off h-5 w-5 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-5 w-5 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
  
    
  </div>
</div>

            
        </div>
    );
};

export default Navbar;