

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
        <div className="w-11/12 mx-auto">
            <div className="navbar bg-base-100">
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
     
     
     {user?.email && (
       <>
        
      <li ><NavLink to={'/otherRecommendation'}>Recommendation For Me</NavLink></li>
      <li><NavLink to={`/myQueries`} >My Queries</NavLink></li>
      <li><NavLink to={`/myRecommendation`} >My Recommendation</NavLink></li>
       
       
       </>
     )}

      </ul>
    </div>
    <p className="font-bold text-2xl "><span className="text-primary">PROD</span>ASK</p>
    
    <img  src={logo} alt="" className="w-10 h-10 hidden md:block" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-md font-bold text-gray-400">
     
    <li className=""><NavLink className={({ isActive }) => (isActive ? " text-primary" : "")}  to={'/'}  >Home</NavLink></li>
    <li className=""><NavLink  to={'/allQueries'} className={({ isActive }) => (isActive ? " text-primary" : "")}>Queries</NavLink></li>
     
     
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

  
    
  </div>
</div>

            
        </div>
    );
};

export default Navbar;