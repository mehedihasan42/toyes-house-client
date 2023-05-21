import React from 'react';

const ImageGellary = () => {
    return (
       <div className='mt-4 lg:mt-8 bg-base-200 py-20'>
         <div>
           <h2 className='font-bold lg:font-extrabold text-xl bg-slate-300 mx-auto w-64 rounded p-4'>Most choiceable toyes</h2>
        </div>
        <div className='grid lg:grid-cols-3  my-4'>
          <div className='mx-auto w-96 rounded-md mt-4 bg-stone-300 p-4'>
          <img src="https://i.ibb.co/d5g9xLy/tot-1.jpg" alt="" />
          <p className='text-center'>Bat Tady</p>
          </div>
          {/* ------------------------------ */}
           <div className='mx-auto w-96 rounded-md mt-4 bg-stone-300 p-4'>
           <img src="https://i.ibb.co/m4Sn9Rz/toy-2.jpg" className='w-96 h-40' alt="" />
           <p className='text-center'>Bat Tady</p>
           </div>
           {/* ------------------------- */}
           <div className='mx-auto w-96 rounded-md mt-4 bg-stone-300 p-4'>
           <img src="https://i.ibb.co/QrrHDbd/toy-3.jpg" className='w-96 h-40' alt="" />
           <p className='text-center'>Bat Tady</p>
           </div>
           {/* ----------------------------- */}
           <div className='mx-auto w-96 rounded-md mt-4 bg-stone-300 p-4'>
           <img src="https://i.ibb.co/rkwWnS0/toy-4.jpg" className='w-96 h-40' alt="" />
           <p className='text-center'>Bat Tady</p>
           </div>
           {/* ------------------ */}
           <div className='mx-auto w-96 rounded-md mt-4 bg-stone-300 p-4'>
           <img src="https://i.ibb.co/sP7YdPL/toy-5.jpg" className='w-96 h-40' alt="" />
           <p className='text-center'>Bat Tady</p>
           </div>
           {/* --------------------------- */}
           <div className='mx-auto w-96 rounded-md mt-4 bg-stone-300 p-4'>
           <img src="https://i.ibb.co/99Q2sWS/toy-6.jpg" className='w-96 h-40' alt="" />
           <p className='text-center'>Bat Tady</p>
           </div>
        </div>
       </div>
    );
};

export default ImageGellary;