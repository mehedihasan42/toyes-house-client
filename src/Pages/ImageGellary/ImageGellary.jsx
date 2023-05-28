import React, { useEffect, useState } from 'react';
import InfoCard from './InfoCard';

const ImageGellary = () => {

  const [infos, setInfos] = useState([])

  useEffect(() => {
    fetch('https://toyes-house-server.vercel.app/gellary')
      .then(res => res.send())
      .then(data => setInfos(data))
  }, [])

  return (
    <>
    {
      infos.map(info=><InfoCard
      key={info._id}
      
      ></InfoCard>)
    }
    </>

  );
};

export default ImageGellary;