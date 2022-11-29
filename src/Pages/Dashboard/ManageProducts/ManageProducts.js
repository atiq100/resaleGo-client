import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loader from "../../Shared/Loader/Loader";


const ManageProducts = () => {
    const {user} = useContext(AuthContext)
    const [deletingOrder,setDeletingOrder] = useState(null)
    const handleDelete =(item)=>{
        fetch(`https://b612-used-products-resale-server-side-atiq100.vercel.app/all-bikes/${item._id}`,{
            method:'DELETE',
            // headers:{
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                refetch()
                toast.success(` ${item.productName} deleted successfully`)
            }
            
        })

    }
    const closeModal = () =>{
        setDeletingOrder(null)
    }
  const { data: items,isLoading,refetch } = useQuery({
    queryKey: ["items",user?.email],
    queryFn: async () => {
      try {
        const res = await fetch(`https://b612-used-products-resale-server-side-atiq100.vercel.app/all-bikes/manage?email=${user?.email}`, {
        //   headers: {
        //     authorization: `bearer ${localStorage.getItem("accessToken")}`,
        //   },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  if(isLoading){
    return <Loader></Loader>
  }
  const handleAdvertisement = id =>{
    fetch(`https://b612-used-products-resale-server-side-atiq100.vercel.app/all-bikes/advertise/${id}`,{
        method:'PUT',
        // headers:{
        //     authorization:`bearer ${localStorage.getItem('accessToken')}`
        // }
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount>0){
          
            toast.success('Product advertise  successfull ')
            refetch()
        }
       
    })
}
  return (
    <div>
      <h2 className="text-3xl mb-4">My Products:</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
           {
            items?.length > 0 ?
            <>
                  <tr>
                    <th></th>
              <th>Product image</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Advertisment status</th>
              <th>Make Advertise</th>
              
              <th>Delete</th>
            </tr>
                       
            </>
            : <tr><th className="text-xl text-center text-error font-semibold">You have no product for sale</th></tr>
           }
          </thead>
          <tbody>
            {items && items?.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <th><div className="avatar">
  <div className="w-16 rounded">
    <img src={item.photoURL} alt=""/>
  </div>
</div></th>
                <td>{item.email}</td>
                <td>{item.productName}</td>
                <td>{item.resalePrice}</td>
                
                <td className={item.advertise ==='advertisement' ? 'text-green-500' : 'text-red-500'}>{item.advertise}</td>
            <td>{item?.advertise !== 'advertisement' && <button onClick={ ()=> handleAdvertisement(item._id)} className='btn btn-xs'>Add advertise</button>}</td>
                <td>
                <label onClick={ ()=> setDeletingOrder(item)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        deletingOrder && <ConfirmationModal 
        title={`Are you sure you want to delete?`}
        message={`If you delete ${deletingOrder.product}. It can not be recover`}
        successAction={handleDelete}
        closeModal={closeModal}
        modalData = {deletingOrder}
        successActionbtn="Delete"
        ></ConfirmationModal>
      }
    </div>
  );
};

export default ManageProducts;
