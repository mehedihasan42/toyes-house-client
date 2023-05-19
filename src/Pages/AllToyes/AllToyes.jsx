import React, { useEffect, useState } from 'react';
import ToyesCard from './ToyesCard';

const AllToyes = () => {

    const [toyes,setToyes] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/allToyes')
        .then(res=>res.json())
        .then(data=>setToyes(data))
    },[])

    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
               
              <th>Toyes Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th>quantity</th>
              <th>subCategory</th>
              <th>Details</th>
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