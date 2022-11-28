import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AdvertiseCard from './AdvertiseCard';



const AdvertiseItem = () => {
   
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/all-bikes',{
      headers: {
        "content-type": "application/json",
        
      },
    })
      .then((res) => res.json())

      .then((data) => {
        //console.log(data);
        setPosts(data);
      });
  }, []);
    return (
        <div>
            {posts?.length>0 ?  <h2 className='text-center text-3xl font-bold'>Advertise Items</h2> : ''}
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8  justify-items-center'>
            {posts?.map((post) => (
          <AdvertiseCard key={post._id} post={post}></AdvertiseCard>
        ))}
        </div>
        </div>
    );
};

export default AdvertiseItem;