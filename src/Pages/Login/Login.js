import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import image from '../../assets/images/login.png'
import { GoogleAuthProvider } from "firebase/auth";
//import useToken from '../../hooks/useToken';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const googleProvider = new GoogleAuthProvider()
    

    const from = location.state?.from?.pathname || '/';
    const { register, formState:{errors}, handleSubmit } = useForm();
    const {signIn,providerLogin}=useContext(AuthContext)
    const [loginError,setLoginError]=useState('')
    //const [loginUserEmail,setLoginUserEmail]=useState('')
   // const [token]=useToken(loginUserEmail)
    
    // if(token){
    //   navigate(from,{replace:true})
    // }
    const handleLogin = data =>{
      console.log(data);
      setLoginError('')
      signIn(data.email,data.password)
      .then(result=>{
          const user = result.user;
          console.log(user);
         // setLoginUserEmail(data.email)
          
      })
      .catch(err =>{
          console.log(err.message)
          setLoginError(err.message)
      })
  
      
    }
  const handleGoogleSignIn=()=>{
    providerLogin(googleProvider)
    .then(result =>{
        const user = result.user
       
       navigate(from,{replace: true})
        
       
    })
    .catch(error => console.log(error))

}


  return (
    <div className="flex flex-col items-center justify-between xl:flex-row mt-16">
        <div className="w-1/2">
            <img className="w-full object-contain" src={image} alt="" />
        </div>
        <div className="mx-auto w-full lg:w-1/2 max-w-md p-4 rounded-md shadow sm:p-8 ">
      <h2 className="mb-3 text-3xl font-semibold text-center">Login</h2>
      <div>
        <form className="space-y-8" onSubmit={handleSubmit(handleLogin)}>
          <div className="space-y-4">
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-900 "
              />
              {errors.email && (
                <p className="text-error">{errors.email?.message}</p>
              )}
            </div>

           
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "password must be 6 characters",
                  },
                })}
                type="password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-900 "
              />
              {errors.password && (
                <p className="text-error">{errors.password?.message}</p>
              )}
            </div>
          </div>
          <input
            type="submit"
            value="Login"
            className="w-full btn btn-secondary px-8 py-3 font-semibold rounded-md text-white "
          />
          {loginError &&<p className='text-error'>{loginError.slice(22,27)} email or password</p>}
        </form>
        <div className="mt-4">
          <p className="text-sm text-center dark:text-gray-400">
            New To ResaleGo?
            <Link
              to="/register"
              rel="noopener noreferrer"
              className=" text-primary focus:underline hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400" />
        </div>
        <div className="my-6 space-y-4">
          <button
           onClick={handleGoogleSignIn}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
