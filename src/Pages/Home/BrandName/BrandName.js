import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

const BrandName = () => {
    const [categories, setCategories] = useState([]);
    

    useEffect( () =>{
        fetch('http://localhost:5000/bike-categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h3 className='text-3xl text-center font-bold'>Filter By Brand</h3>
            <p className='text-center text-lg mb-4'>Available Brands:({categories.length})</p>
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