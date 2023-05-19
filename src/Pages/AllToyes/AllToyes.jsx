import React, { useEffect, useState } from 'react';
import ToyesCard from './ToyesCard';

const AllToyes = () => {

    const [toyes,setToyes] = useState({})

    useEffect(()=>{
        fetch('http://localhost:5000/allToyes')
        .then(res=>res.json())
        .then(data=>setToyes(data))
    },[])

    return (
       <>
       {
          toyes.map(toye=><ToyesCard
          toye={toye}
          ></ToyesCard>)
       }
       </>
    );
};

export default AllToyes;