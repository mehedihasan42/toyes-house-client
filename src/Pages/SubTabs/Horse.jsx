import React, { useEffect, useState } from 'react';
import HouresInfo from './HouresInfo';

const Horse = () => {

  const [infos,setInfos] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/horses')
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