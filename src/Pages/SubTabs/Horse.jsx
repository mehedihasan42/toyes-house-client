import React, { useEffect, useState } from 'react';
import HouresInfo from './HouresInfo';

const Horse = () => {

  const [infos,setInfos] = useState([])

  useEffect(()=>{
    fetch('https://toyes-house-server.vercel.app/horses')
    .then(res=>res.json())
    .then(data=>setInfos(data))
  },[])

    return (
       <div className='lg:flex'>
       {
          infos.map(info=><HouresInfo
             key={info._id}
             info={info}
             ></HouresInfo>)
       }
       </div>
    );
};

export default Horse;