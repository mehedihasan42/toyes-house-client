import React, { useEffect, useState } from 'react';
import ToyesCard from './ToyesCard';

const AllToyes = () => {

    const [toyes,setToyes] = useState([])

    useEffect(()=>{
        fetch('https://toyes-house-server.vercel.app/adding')
        .then(res=>res.json())
        .then(data=>setToyes(data))
    },[])

    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
          <tr>
        
        <th>Product Name</th>
        <th>Seller</th>
        <th>Quantity</th>
        <th></th>
      </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            
            {
          toyes.map(toye=><ToyesCard
          toye={toye}
          ></ToyesCard>)
       }
             
             
            
          </tbody>
        </table>
      </div>
    //    <>
    
    //    </>
    );
};

export default AllToyes;