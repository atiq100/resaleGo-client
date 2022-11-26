import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import toast from 'react-hot-toast';

const AllUsers = () => {
    
    const {data:users=[],refetch} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await fetch('http://localhost:5000/users')
            const data= await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
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
    const handleMakeVerify = id =>{
        fetch(`http://localhost:5000/users/verify/${id}`,{
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
        <th>Status</th>
        <th>Verificaton</th>
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
            <td className={user.isVarified ==='varified' ? 'text-green-500' : 'text-red-500'}>{user.isVarified}</td>
            <td>{user?.isVarified !== 'varified' && <button onClick={ ()=> handleMakeVerify(user._id)} className='btn btn-xs'>Make verified</button>}</td>
            <td>{user?.userType !== 'admin' && <button onClick={ ()=> handleMakeAdmin(user._id)} className='btn btn-xs btn-secondary text-white'>Make Admin</button>}</td>
            <td><button className=' btn btn-xs btn-error'>Delete</button></td>
          </tr>)
      }
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;