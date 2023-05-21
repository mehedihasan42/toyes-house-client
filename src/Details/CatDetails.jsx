import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CatDetails = () => {
  const loader = useLoaderData()
  const {name,picture,price} = loader
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default CatDetails;