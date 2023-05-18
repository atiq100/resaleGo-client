import React, {  useContext, useEffect, useState } from "react";

import axios from 'axios';
import { FaCheckCircle } from "react-icons/fa";

import toast from "react-hot-toast";
import useAdvertise from "../../../hooks/useAdvertise";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Loader from "../../Shared/Loader/Loader";


const AdvertiseCard = ({ post }) => {
    const [isAdvertise] = useAdvertise(post?._id)
 const [modal,setModal]=useState(null)
  const {user}=useContext(AuthContext)
  const [data,setStatus] = useState([])
  const [loading,setLoading] = useState(true)
  
  const url = 'https://b612-used-products-resale-server-side-atiq100.vercel.app/users'
 useEffect(()=>{
  const getUsers =async ()=>
   await 
   axios.get(url)
    
        .then((res) => res.data)
        .then((data) => setStatus(data));
       
       getUsers();  

 },[])
 
 
  const {
    productName,
    seller_name,
    email,
    condition,
    description,
    lastModified,
    location,
    number,
    originalPrice,
    resalePrice,
    yearsOfUse,
    photoURL
    
  } = post;
  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const product = form.product.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const location = form.location.value;
    


const booking={
  
  Buyer: name,
  email,
  phone,
  product,
  price,
  location,
  photoURL
}



fetch('https://b612-used-products-resale-server-side-atiq100.vercel.app/bookings',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(booking)
})
.then(res=>res.json())
.then(data=>{
  console.log(data);
  
  if(data.acknowledged){
   // setModal(null) //modal off
    toast.success('Booking Confirmed')
    form.reset()
    
  }
  else{
    toast.error(data.message)
  }
})

// const closeModal = () =>{
//   setModal(null)
// }
//console.log(booking);

}
  
  return (
    <>
    
    
        {isAdvertise &&
        
      <div className="card w-full lg:w-96 bg-base-100 shadow-xl mb-4" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className="flex justify-between items-center p-8">
       <div>
       <h2 className="text-3xl font-bold "> {productName}
        </h2>
        <p className="text-gray-400 text-lg font-semibold">
              Resale Price {" "}
              <span className="text-red-600 text-2xl font-bold">
                ${resalePrice}
              </span>
            </p>
       </div>
        <div>
        <p className="flex text-xl font-semibold">
              Seller:{" "}
               <span className="text-gray-400 text-lg font-normal flex ml-1">
                  {seller_name}
                <span className="text-blue-500 text-md font-normal mt-2 ml-1">
                {data.map(user=><span key={user._id}>{user?.email === email && user?.isVarified=== 'varified' ? <FaCheckCircle></FaCheckCircle> : ''}</span>)}
              </span>
              </span>
            </p>
            
        </div>
        </div>
        <div>
          
        </div>
        <figure>
          <img src={photoURL} alt="bike" />
        </figure>
        <div className="card-body">
          
          <div className="text-lg font-semibold">
         
           <div className="flex justify-center items-center text-center gap-3 ">
           <p className="">
              Original Price{" "}
              <span className="text-gray-400 text-md font-normal">
                ${originalPrice}
              </span>
            </p>
            
            <p>
              Condition{" "}
              <span className="text-gray-400 text-md font-normal">
                {condition}
              </span>
            </p>
            <p>
               Use{" "}
              <span className="text-gray-400 text-md font-normal">
                {yearsOfUse}
              </span>
            </p>
           </div>
           <div class="divider"></div> 
            <div className="grid grid-cols-2 justify-between items-center text-center gap-4">
            <h4>
              Description{" "}
              <p className="text-gray-400 text-md font-normal">
                {description}
              </p>
            </h4>
            <h4>
              Location{" "}
              <p className="text-gray-400 text-md font-normal">
                {location}
              </p>
            </h4>
          
            <h4>
              Phone Number{" "}
              <p className="text-gray-400 text-md font-normal">
                {number}
              </p>
            </h4>
            <h4>
              Posted Date{" "}
              <p className="text-gray-400 text-md font-normal">
                {lastModified.slice(0, 15)}
              </p>
            </h4>
            </div>
          </div>
          <div className="card-actions justify-end">
          <label htmlFor="booking-modal" className="btn btn-primary">Buy Now</label>
          </div>
          
      
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-secondary btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-center">Booking For {productName}</h3>
    <form onSubmit={handleBooking} className="py-4 grid grid-cols-1 gap-3 mt-6">
      <input  name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your name"
              className="input input-bordered w-full "
               />
                <input  name="email"
              type="text"
              defaultValue={user?.email}
              disabled
              placeholder="Your email"
              className="input input-bordered w-full "
               />
                <input  name="product"
              type="text"
              defaultValue={productName}
              disabled
              placeholder="Product Name"
              className="input input-bordered w-full "
               />
                <input  name="price"
              type="text"
              defaultValue={originalPrice}
              disabled
              placeholder="Product price"
              className="input input-bordered w-full "
               />
                <input
            name="phone"
              type="number"
              placeholder="Your Phone Number"
              className="input input-bordered w-full "
            />
             <input
            name="location"
              type="text"
              placeholder="Meeting Location"
              className="input input-bordered w-full "
            />
            <br />
            <input
            
              type="submit"
              value="Submit"
              className="btn btn-secondary text-white text-lg w-full "
            />


    </form>
  </div>
</div>
        </div>
      </div>
}
</>

    
  );
};

export default AdvertiseCard;
