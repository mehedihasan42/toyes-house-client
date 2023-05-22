import React, { useEffect, useState } from 'react';

const Customar = () => {

    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch('https://toyes-house-server.vercel.app/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (

       <div className='lg:my-20 bg-base-200 py-12'>
       <h2 className='font-bold lg:font-extrabold text-xl bg-slate-300 mx-auto w-52 rounded p-4'>Customer Review</h2>
        <div className='grid lg:grid-cols-3 my-8 '>
          <h2>hi</h2>
          {
              reviews.map(review => <div>

                  <div className="card w-96 h-96 lg:mx-auto bg-base-100 shadow-xl">
                      <figure><img src={review.image} className='w-96 h-60' alt="Shoes" /></figure>
                      <div className="card-body">
                          <h2 className="card-title">{review.name}</h2>
                          <p>{review.comment}</p>
                      </div>
                  </div>
              </div>)
          }
      </div>
       </div>
    );
};

export default Customar;