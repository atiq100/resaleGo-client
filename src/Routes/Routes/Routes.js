import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddSalePost from "../../Pages/Dashboard/AddSalePost/AddSalePost";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import BrandName from "../../Pages/Home/BrandName/BrandName";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Sell from "../../Pages/Sell/Sell"

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
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
                element:<Sell></Sell>,
                loader:({params})=>fetch(`http://localhost:5000/all-bikes/${params.id}`)
            },
           
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/addproduct',
                element:<AddSalePost></AddSalePost>,
                loader:()=>fetch('http://localhost:5000/all-bikes')
            }
        ]
    }
])