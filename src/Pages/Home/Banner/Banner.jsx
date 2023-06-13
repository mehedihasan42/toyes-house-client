import React from 'react';
// import Marquee from "react-fast-marquee";

const Banner = () => {

  return (
    <div className="hero min-h-screen relative bg-gradient-to-br from-black to-gray-800" >
        <img src="https://i.ibb.co/7QKn8qY/background-img.jpg" className="w-full h-full object-cover absolute mix-blend-overlay" />
      {/* <div className="absolute" style={{ backgroundImage: `url()` }}></div> */}
      <div className="hero-content text-neutral-content">
        <div className="max-w-md flex flex-col items-start">
          <h1 className="mb-5 text-5xl font-bold italic">
            {/* TODO-  After added marquee there are seen responsive peoblem */}
             <span className=''> Welcome to</span> <span className='text-fuchsia-500'>ToyesHouse</span>
          </h1>
          <p className="mb-5 italic">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
      </div>
    </div>

  );
};

export default Banner;