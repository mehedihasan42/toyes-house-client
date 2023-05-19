import React from 'react';

const Banner = () => {

    return (
       <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex flex-col lg:flex-row-reverse">
 
  <img src="https://media.istockphoto.com/id/1349433895/photo/teddy-bear.jpg?s=2048x2048&w=is&k=20&c=24LPx6vO-IP4ZELkUnGpG5nQxXVHu-bWQNVy4DBER7A="
   className="w-2/3 lg:w-4/12 rounded-lg lg:ml-20 shadow-2xl" />
 
    <div>
      <h1 className="text-2xl text-center mt-8 lg:mt-2 lg:text-5xl font-bold lg:mr-52">ToysHouse</h1>
      <p className="py-6">Different types of animal toys are here</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

    );
};

export default Banner;