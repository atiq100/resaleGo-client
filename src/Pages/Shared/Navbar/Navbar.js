import React, { useContext } from 'react';
import { FaPalette, FaSignInAlt, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogout = ()=>{
        logOut()
        .then(()=>{})
        .catch(err=>console.log(err))
  }
    const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/sell'>Sell</Link></li>
    <li><Link to='/buy'>Buy</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/contact-us'>Contact Us</Link></li>   
    
    {/* {user?.uid ?
    <>
      <li><Link to='/dashboard'>Dashboard</Link></li> 
      <li><button onClick={handleLogout}>Logout</button></li>
    </>
    :
    <li><Link to='/login'>Login</Link></li>
  } */}
</>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl hidden md:flex">
        <img className='w-12' src={logo} alt="" />
        <span className='ml-1'> ResaleGo</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-hover dropdown-left">
  <label tabIndex={1} className="">
  <div className="avatar">
  <div className="w-12 rounded-full">
    {
      user?.uid && user?.photoURL ?
      <img src={user?.photoURL} alt='' />
      :
      <FaUserAlt className='m-auto mt-3 text-xl'></FaUserAlt>
    }
  </div>
</div>
  </label>
  <ul tabIndex={1} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36">
    {
      user?.uid ?
      <>
      <li><Link to='/dashboard'><FaPalette></FaPalette> Dashboard</Link></li>
    <li><button onClick={handleLogout}><FaSignOutAlt></FaSignOutAlt> Logout</button></li>
      </>
      :
      <li><Link to='/login'><FaSignInAlt></FaSignInAlt> Login</Link></li>
    }
  </ul>
</div>
  
  </div>
  <label  htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden navbar-end">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
</div>
    );
};

export default Navbar;