import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyToyesRow from './MyToyesRow';

const MyToyes = () => {

    const {user} = useContext(AuthContext)
    const [added,setAdded] = useState([])

    const url = `http://localhost:5000/adding?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setAdded(data)
        })
    },[])

    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                Product
              </th>
              <th>Seller Name</th>
              <th>Price</th>
              <th>...</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {
             added.map(add=><MyToyesRow
             key={add._id}
             add={add}
             ></MyToyesRow>)
           }
          </tbody>
          {/* foot */}
         
        </table>
      </div>
    );
};

export default MyToyes;