import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loader from "../../Shared/Loader/Loader";


const ManageOrders = () => {
    const {user} = useContext(AuthContext)
    const [deletingOrder,setDeletingOrder] = useState(null)
    const handleDelete =(booking)=>{
        fetch(`http://localhost:5000/bookings/${booking._id}`,{
            method:'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                refetch()
                toast.success(` ${booking.product} deleted successfully`)
            }
            
        })

    }
    const closeModal = () =>{
        setDeletingOrder(null)
    }
  const { data: bookings,isLoading,refetch } = useQuery({
    queryKey: ["bookings",user?.email],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
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
  return (
    <div>
      <h2 className="text-3xl mb-4">My Orders:</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
           {
            bookings?.length > 0 ?
            <>
                  <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Phone</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
                       
            </>
            : <tr><th className="text-xl text-center text-error font-semibold">You have no orders</th></tr>
           }
          </thead>
          <tbody>
            {bookings && bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.Buyer}</td>
                <td>{booking.email}</td>
                <td>{booking.product}</td>
                <td>{booking.phone}</td>
                <td><Link className="btn btn-secondary btn-xs">Pay</Link></td>
                <td>
                <label onClick={ ()=> setDeletingOrder(booking)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                 
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

export default ManageOrders;
