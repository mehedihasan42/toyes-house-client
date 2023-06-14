import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Customar = () => {

    const [reviews, setReview] = useState([])

    useEffect(() => {
        AOS.init();
        fetch('https://toyes-house-server.vercel.app/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (

       <div className='lg:my-20 bg-slate-200 py-12'>
       <h2 className='font-bold lg:font-extrabold text-xl bg-slate-300 mx-auto w-52 rounded p-4'>Customer Review</h2>
        <div className='grid lg:grid-cols-3 my-8 '>
            
          {
              reviews.map(review => <div>

                  <div className="card mx-auto mt-4 w-80 lg:w-96 h-96 lg:mx-auto bg-base-100 shadow-xl hover:w-96 lg:hover:w-4/6 transition-all
                   duration-300 ease-in-out" data-aos="fade-up" data-aos-anchor-placement="top-center">
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