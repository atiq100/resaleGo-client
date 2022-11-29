import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

const BrandName = () => {
    const [categories, setCategories] = useState([]);
    

    useEffect( () =>{
        fetch('https://b612-used-products-resale-server-side-atiq100.vercel.app/bike-categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h3 className='text-3xl text-center my-4 font-bold'>Filter By Brand</h3>
            
            <div className='flex flex-row-reverse lg:flex-row justify-center gap-4 items-center  bg-base-100'>
                {
                    categories.map(category => <p className='card w-full lg:w-36 p-6 mb-6 text-xl font-semibold shadow-md bg-base-100 text-center'
                     key={category._id}
                     >
                        <Link to={`/all-bikes/${category._id}`}>{category.name}</Link>
                        
                    </p>)
                }
            </div>
        </div>
    );
};

export default BrandName ;