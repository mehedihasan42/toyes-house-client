import React, { useEffect, useState } from 'react';

const TadyInfo = ({info}) => {
   const {picture} = info;
    return (
        <div className="card w-96 mx-4 bg-base-100 shadow-xl">
        <figure><img src={picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default TadyInfo;