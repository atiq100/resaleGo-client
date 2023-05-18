import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SellCard from './SellCard';


const Sell = () => {
   const categories = useLoaderData()
   
    const {category_id}= categories
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://b612-used-products-resale-server-side-atiq100.vercel.app/all-bikes/${category_id}`,{
      headers: {
        "content-type": "application/json",
        
      },
    })
      .then((res) => res.json())

      .then((data) => {
        //console.log(data);
        setPosts(data);
      });
  }, [category_id]);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8  justify-items-center'>
            {categories?.map((post) => (
          <SellCard key={post._id} post={post}></SellCard>
        ))}
        </div>
    );
};

export default Sell;