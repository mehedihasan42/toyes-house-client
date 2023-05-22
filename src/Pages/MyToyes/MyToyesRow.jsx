import React from 'react';

const MyToyesRow = ({add}) => {
    const {email,seller,picture,productName,price} =add;
    return (
            <tr>
              <th>
              </th>
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
                <br/>
                <span className="badge badge-ghost badge-sm">{email}</span>
              </td>
              <td>{price}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
    );
};

export default MyToyesRow;