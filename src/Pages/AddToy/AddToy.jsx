import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddToy = () => {

  const {user} = useContext(AuthContext)

  const handleOnSubmit = event =>{
    event.preventDefault()

    const form = event.target;
    const productName = form.productName.value;
    const picture = form.picture.value;
    const seller = user?.displayName;
    const email = user?.email;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
      const adding = {
        productName,picture,seller,
           email,
           price,
           quantity,
           details
       }
       console.log(adding)
    fetch('https://toyes-house-server.vercel.app/adding',{
      method:'POST',
      headers:{
       'content-type':'application/json'
      },
      body:JSON.stringify(adding)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
  }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <h2 className='text-center p-4 lg:p-8 text-xl lg:text-3xl font-extrabold'>Add a new Toye</h2>
           <form onSubmit={handleOnSubmit}>
           <div className="card-body">
             <div className='grid lg:grid-cols-2'>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Picture URL</span>
                </label>
                <input name='picture' type="text" placeholder="Picture URL"  className="input lg:mx-2 lg:w-64 input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input name='productName' type="text" placeholder="Product Name"  className="input lg:w-64 input-bordered" />
              </div>
             <div className="form-control">
                <label className="label">
                  <span  className="label-text">Seller Name</span>
                </label>
                <input defaultValue={user?.displayName} name='seller' type="text" placeholder="seller name"  className="input lg:w-64 input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller email</span>
                </label>
                <input type="text" name='email' defaultValue={user?.email}  className="input lg:w-64 input-bordered" readOnly/>
              </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub-category</span>
                </label>
                <input type="text" placeholder="Sub-category"  className="input lg:w-64 input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" name='price' placeholder="Price"  className="input lg:w-64 input-bordered" />
              </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="text" placeholder="Rating"  className="input lg:w-64 input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input type="text" name='quantity' placeholder="Available quantity"  className="input lg:w-64 input-bordered" />
              </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail description</span>
                </label>
                <input type="text" name='details' placeholder="Detail description"  className="input h-52 input-bordered" />
              </div>
             </div>
             <div>
                <button className='btn btn-gost lg:ml-64'>Add Item</button>
             </div>
            </div>
           </form>
          </div>
        </div>
      </div>
    );
};

export default AddToy;