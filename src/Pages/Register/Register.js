import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import image from '../../assets/images/login.png'
import { GoogleAuthProvider } from "firebase/auth";
//import useToken from '../../hooks/useToken';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const googleProvider = new GoogleAuthProvider()
    

    const from = location.state?.from?.pathname || '/';
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser,providerLogin, updateUserProfile } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  //const [createdUserEmail,setCreatedUserEmail] = useState('')
  //const [token] = useToken(createdUserEmail)
  // const navigate = useNavigate()
  // if(token){
  //   navigate('/')
  // }
  const handleRegister = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setSignUpError("");
        toast("Registration successfull");
        const userInfo = {
          displayName: data.name,
        };
        updateUserProfile(userInfo)
          .then(() => {
            // saveUser(data.name,data.email)
            console.log(data.name, data.email, data.type);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err.message);
        setSignUpError(err.message);
      });
  };
  const handleGoogleSignIn=()=>{
    providerLogin(googleProvider)
    .then(result =>{
        const user = result.user
       
       navigate(from,{replace: true})
        
       
    })
    .catch(error => console.log(error))

}
  // const saveUser=(name,email)=>{
  //   const user = {name,email}
  //   fetch('http://localhost:5000/users',{
  //     method:'POST',
  //     headers:{
  //       'content-type':'application/json'
  //     },
  //     body:JSON.stringify(user)
  //   })
  //   .then(res=> res.json())
  //   .then(data=>{
  //     console.log(data);
  //     setCreatedUserEmail(email)
  //   })
  // }

  return (
    <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="w-1/2">
            <img className="w-full object-contain" src={image} alt="" />
        </div>
        <div className="mx-auto w-full lg:w-1/2 max-w-md p-4 rounded-md shadow sm:p-8 ">
      <h2 className="mb-3 text-3xl font-semibold text-center">Register</h2>
      <div>
        <form className="space-y-8" onSubmit={handleSubmit(handleRegister)}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-900 "
              />
              {errors.name && (
                <p className="text-error">{errors.name?.message}</p>
              )}
            </div>
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
              <label htmlFor="type" className="block text-sm">
                Select user type
              </label>
              <select
                {...register("type")}
                className="select w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-900"
              >
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
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
            value="Register"
            className="w-full btn btn-secondary px-8 py-3 font-semibold rounded-md text-white "
          />
          {signUpError && <p className="text-error">{signUpError}</p>}
        </form>
        <div className="mt-4">
          <p className="text-sm text-center dark:text-gray-400">
            Already have an account?
            <Link
              to="/login"
              rel="noopener noreferrer"
              className=" text-primary focus:underline hover:underline"
            >
              Login
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

export default Register;
