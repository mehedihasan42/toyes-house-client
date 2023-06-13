import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyToyesRow from './MyToyesRow';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';

const MyToyes = () => {

    const {user} = useContext(AuthContext)
    const [added,setAdded] = useState([])

    const url = `https://toyes-house-server.vercel.app/adding?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setAdded(data)
        })
    },[])

    const handleDelete = id =>{
      const procced = Swal.fire(
       'Are you sure for delete it!',
       'You clicked the button!',
       'question'
     )
 
      if(procced){
         fetch(`https://toyes-house-server.vercel.app/adding/${id}`,{
           method:'DELETE',
 
         })
         .then(res=>res.json())
         .then(data=>{
           console.log(data)
           if(data.deletedCount > 0){
             Swal.fire(
               'Deleted Success',
               'You clicked the button!',
               'seccess'
             );
                const remaining = added.filter(add=>{
                  add._id !== id
                })
                setAdded(remaining)
           }
         })
      }
   }

   const handleUpdate = id =>{
    fetch(`https://toyes-house-server.vercel.app/adding/${id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({status:'confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount > 0){

      }
    })
   }

    return (
       <>
         <Helmet><title>Toyes House | My Toyes</title></Helmet>
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
             handleDelete={handleDelete}
             handleUpdate={handleUpdate}
             ></MyToyesRow>)
           }
          </tbody>
          {/* foot */}
         
        </table>
      </div>
       </>
    );
};

export default MyToyes;