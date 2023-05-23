import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";

const ToyesCard = ({toye}) => {
    const { _id,seller,price,rating,quantity,subCategory,productName,picture,email } = toye 
    return (
     <>    <tr>
     
     <td>
       <div className="flex items-center space-x-3">
         <div className="avatar">
           <div className="mask mask-squircle w-12 h-12">
             <img src={picture} alt="Avatar Tailwind CSS Component" />
           </div>
         </div>
         <div>
           <div className="font-bold">{productName}</div>
           <div className="text-sm opacity-50">${price}</div>
         </div>
       </div>
     </td>
     <td>
      {seller}
       <br/>
       <span className="badge badge-ghost badge-sm">{email}</span>
     </td>
     <td>{quantity}</td>
     <th>
       <Link className="btn btn-ghost btn-lg" to={`/adding/${_id}`}><FaArrowCircleRight/></Link>
     </th>
   </tr>
     </>
    );
};

export default ToyesCard;