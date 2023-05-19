import React from 'react';
import { Link } from 'react-router-dom';

const ToyesCard = ({toye}) => {
    const { name,price,rating,quantity,subCategory } = toye 
    return (
     <>    <tr>
            <td>{name}</td>
              <td>{price}</td>
              <td>{rating}</td>
              <td>{quantity}</td>
              <td>{subCategory}</td> 
              <Link className='btn btn-goast'>View Details</Link>
              </tr>
     </>
    );
};

export default ToyesCard;