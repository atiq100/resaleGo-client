import React, { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import errorimg from '../../../assets/images/error.jpg'

const ErrorPage = () => {
    const error = useRouteError();
	const {logout} = useContext(AuthContext)
	const navigate = useNavigate()
	const handleLogout = ()=>{
		logout()
		.then(()=>{
			navigate('/login')
		})
		.catch(err=>console.log(err))
	}
  return (
    <section className="flex items-center h-screen sm:p-16">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		<img src={errorimg} alt="" />
		<p className="text-3xl">{error.statusText || error.message}</p>
		<Link rel="noopener noreferrer" to='/' className="btn btn-primary">Back to homepage</Link>
	</div>
</section>
  );
};

export default ErrorPage;
