import React, { useContext } from "react";
import { FaBorderAll, FaPalette, FaPlus, FaUser } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
import Navbar from "../Pages/Shared/Navbar/Navbar";
const DashboardLayout = () => {
  const {user}= useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)
  const [isBuyer] = useBuyer(user?.email)
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-sky-100 p-3">
          <Outlet ></Outlet>
         
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
          <ul className="menu p-4 w-80  text-base-content bg-base-100">
            <li>
              <Link to='/dashboard'><FaPalette></FaPalette>  Dashboard</Link>
            </li>
            <li>
            
                
                <Link to='/dashboard/manageorders'><FaBorderAll></FaBorderAll>  My Order</Link>
             
            </li>
            <li>
              {
                isAdmin && 
                
                  <>
                    <Link to='/dashboard/users'><FaUser></FaUser> All users</Link>
                  <Link to='/dashboard/allbuyers'><FaUser></FaUser> All Buyers</Link>
                  <Link to='/dashboard/allsellers'><FaUser></FaUser>All Sellers</Link>
                  </>
                  
                
              }
            </li>
            <li>
                {
                    isSeller &&
                   <>
                     <Link to='/dashboard/addproduct'><FaPlus></FaPlus> Add Product</Link>
                     <Link to='/dashboard/manageproducts'>Manage Product</Link>
                   </>
                }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
