import React from 'react';

const AddToy = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <h2 className='text-center p-4 lg:p-8 text-xl lg:text-3xl font-extrabold'>Add a new Toye</h2>
            <div className="card-body">
             <div className='grid lg:grid-cols-2'>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Picture URL</span>
                </label>
                <input type="text" placeholder="Picture URL"  className="input lg:mx-2 lg:w-64 input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name"  className="input lg:w-64 input-bordered" />
              </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input type="text" placeholder="seller name"  className="input lg:w-64 input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller email</span>
                </label>
                <input type="text" placeholder="seller email"  className="input lg:w-64 input-bordered" />
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
                <input type="text" placeholder="Price"  className="input lg:w-64 input-bordered" />
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
                <input type="text" placeholder="Available quantity"  className="input lg:w-64 input-bordered" />
              </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail description</span>
                </label>
                <input type="text" placeholder="Detail description"  className="input h-52 input-bordered" />
              </div>
             </div>
             <div>
                <button className='btn btn-gost lg:ml-64'>Submit</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddToy;