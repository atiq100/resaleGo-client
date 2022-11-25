import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const AddSalePost = () => {
    const {user} = useContext(AuthContext)
    const [catId,setCatId]=useState('')
  const categories = useLoaderData();
  

  const onChangeHandler = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index]
    const option =  el.getAttribute('id'); 
    setCatId(option)
}
  
  const handleAddProduct=(event)=>{
    const name = user?.displayName;
    const form = event.target;
    const productName = form.productname.value;
    const originalPrice = form.originalprice.value;
    const resalePrice = form.resaleprice.value;
    const number = form.number.value;
    const description = form.description.value;
    const location = form.location.value;
    const yearsOfUse = form.uses.value;
    const condition = form.condition.value;
    const category = form.category.value;
    

const product={
    lastModified: Date(),
    category_id:catId,
    seller_name: name,
    productName,
    originalPrice,
    resalePrice,
    number,
    description,
    location,
    yearsOfUse,
    condition,
    category
}

fetch('http://localhost:5000/all-bikes',{
    method:'POST',
    headers:{
        'content-type': 'application/json',
       // authorization: `Bearer ${localStorage.getItem('doctor-token')}`
        
        
    },
    body: JSON.stringify(product)
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.acknowledged){
        toast('Product added successfully')
        form.reset();
    }
})
.catch(err=>console.log(err))

  }
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
      <form
      onSubmit={handleAddProduct}
        
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="productname" className="text-sm">
                Product Name
              </label>
              <input
                name="productname"
                type="text"
                placeholder="product name"
                required
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="name" className="text-sm">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                placeholder={user?.displayName}
                disabled
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="originalprice" className="text-sm">
                Original Price
              </label>
              <input
                name="originalprice"
                type="text"
                placeholder="original price"
                required
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="resaleprice" className="text-sm">
                Resale Price
              </label>
              <input
                name="resaleprice"
                type="text"
                placeholder="resale price"
                required
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="number" className="text-sm">
                Phone Number
              </label>
              <input
                name="number"
                type="number"
                placeholder="number"
                required
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <input
                name="description"
                type="text"
                placeholder=""
                required
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="location" className="text-sm">
                Location
              </label>
              <input
                name="location"
                type="text"
                placeholder=""
                required
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="uses" className="text-sm">
                Years Of Use
              </label>
              <input
                name="uses"
                type="text"
                placeholder=""
                required
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="condition" className="text-sm">
                Condition Type
              </label>
              <select
                name="condition"
                required
                className="select select-bordered w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="category" className="text-sm">
                Select category
              </label>
              <select
              onChange={onChangeHandler}
                name="category"
                required
                className="select select-bordered w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              >
                <option disabled selected >select category carefully</option>
                {categories.map((category) => (
                  <option id={category._id} value={category.name} key={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="image" className="text-sm">
                Product image
              </label>
              <input
                name="image"
                type="file"
                placeholder=" product photo"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <button type="submit" className="btn btn-secondary">Submit</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddSalePost;
