import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyers = () => {


    const [deletingUser,setDeletingUser] = useState(null)
    const handleDelete =(user)=>{
        fetch(`https://b612-used-products-resale-server-side-atiq100.vercel.app/users/${user._id}`,{
            method:'DELETE',
            // headers:{
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                refetch()
                toast.success(` ${user.name} deleted successfully`)
            }
            
        })

    }
    const closeModal = () =>{
        setDeletingUser(null)
    }
    
    const {data:users=[],refetch} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await fetch(`https://b612-used-products-resale-server-side-atiq100.vercel.app/users/buyer?userType=Buyer`)
            const data= await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id =>{
        fetch(`https://b612-used-products-resale-server-side-atiq100.vercel.app/users/admin/${id}`,{
            method:'PUT',
            // headers:{
            //     authorization:`bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
              
                toast.success('Make admin successfull')
                refetch()
            }
            
        })
    }
    // const handleMakeVerify = id =>{
    //     fetch(`https://b612-used-products-resale-server-side-atiq100.vercel.app/users/verify/${id}`,{
    //         method:'PUT',
    //         // headers:{
    //         //     authorization:`bearer ${localStorage.getItem('accessToken')}`
    //         // }
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         if(data.modifiedCount>0){
              
    //             toast.success('Make verify successfull')
    //             refetch()
    //         }
           
    //     })
    // }
    return (
        <div>
            <h2 className='text-3xl mb-2'>All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
       
        <th>Admin </th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
      {
        users.map((user,i)=><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.userType}</td>
            
            <td>{user?.userType !== 'admin' && <button onClick={ ()=> handleMakeAdmin(user._id)} className='btn btn-xs btn-secondary text-white'>Make Admin</button>}</td>
            <td><label onClick={ ()=> setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label></td>
          </tr>)
      }
     
      
    </tbody>
  </table>
</div>
{
        deletingUser && <ConfirmationModal 
        title={`Are you sure you want to delete?`}
        message={`If you delete ${deletingUser.name}. It can not be undone`}
        successAction={handleDelete}
        closeModal={closeModal}
        modalData = {deletingUser}
        successActionbtn="Delete"
        ></ConfirmationModal>
      }
        </div>
    );
};

export default AllBuyers;