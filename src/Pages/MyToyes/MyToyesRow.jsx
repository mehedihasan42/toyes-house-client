import React from 'react';

const MyToyesRow = ({ add,handleDelete,handleUpdate }) => {
  const { _id,email, seller, picture, productName, price } = add;

   

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{productName}</div>
            {/* <div className="text-sm opacity-50">{email}</div> */}
          </div>
        </div>
      </td>
      <td>
        {seller}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>${price}</td>
      <td>
      <button onClick={()=>handleDelete(_id)} className="btn btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <button onClick={()=>handleUpdate(_id)} className='btn btn-gost lg:ml-4'>UpDate</button>
      </td>
    </tr>
  );
};

export default MyToyesRow;