import React, { useEffect, useState } from 'react';
import CatInfo from './CatInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cats = () => {

  const [infos,setInfos] = useState([])

  useEffect(()=>{
    AOS.init();
    fetch('https://toyes-house-server.vercel.app/cats')
    .then(res=>res.json())
    .then(data=>setInfos(data))
  },[])


    return (
       <div className='lg:flex'>
        {
          infos.map(info=><CatInfo
          info={info}
          ></CatInfo>)
        }
       </div>
    );
};

export default Cats;