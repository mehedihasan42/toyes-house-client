import React, { useEffect, useState } from 'react';
import TadyInfo from './TadyInfo';

const TeddyBear = () => {

  const [infos,setInfos] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/horses')
    .then(res=>res.json())
    .then(data=>setInfos(data))
  },[])

    return (
       <div className='lg:flex'>
         {
           infos.map(info=><TadyInfo
           info={info}
           ></TadyInfo>)
         }
       </div>
    );
};

export default TeddyBear;