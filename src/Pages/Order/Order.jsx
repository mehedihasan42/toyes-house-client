import React from 'react';
import MapComponent from '../Map/MapComponent';

const Order = () => {
    return (
        <div>
            <h2 className='font-bold lg:font-extrabold text-xl bg-slate-300 mx-auto w-36 rounded p-4'>Order Now</h2>
          <MapComponent/>
        </div>
    );
};

export default Order;