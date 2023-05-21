import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
           <img  className='h-96 w-full'
            src="https://media.istockphoto.com/id/1129597161/photo/page-not-found-message.jpg?s=2048x2048&w=is&k=20&c=HHxL32iYFNZqNEZQcmZs3xlOWfO_rBP_T8LeDorV7QU=" alt="" />
        <Link className='btn btn-gost w-1/3 lg:mt-20 lg:ml-96' to='/'>Go Back</Link>
        </div>
    );
};

export default Error;