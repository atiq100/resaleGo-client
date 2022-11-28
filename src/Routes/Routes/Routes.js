import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddSalePost from "../../Pages/Dashboard/AddSalePost/AddSalePost";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageOrders from "../../Pages/Dashboard/ManageOrders/ManageOrders";
import BrandName from "../../Pages/Home/BrandName/BrandName";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Sell from "../../Pages/Sell/Sell"
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/all-bikes/:id',
                element:<PrivateRoute><Sell></Sell></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/all-bikes/${params.id}`)
            },
           
            
            
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/manageorders',
                element:<ManageOrders></ManageOrders>
            },
            {
                path:'/dashboard/users',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/addproduct',
                element:<SellerRoute><AddSalePost></AddSalePost></SellerRoute>,
                loader:()=>fetch('http://localhost:5000/bike-categories')
            }

        ]
    }
])