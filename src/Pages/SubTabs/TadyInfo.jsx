import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TadyInfo = ({info}) => {

   const { _id,name,picture,category,price } = info;

    return (
        <div data-aos="fade-up" className="card w-72 mx-auto my-4 lg:w-96 lg:mx-4 bg-base-100 shadow-xl">
        <figure><img src={picture} className='lg:h-52' alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Category:{category}</p>
          <p>Price:{price}</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-goest" to={`/tadyDetails/${_id}`}><FaArrowAltCircleRight/></Link>
          </div>
        </div>
      </div>
    );
    
};

export default TadyInfo;