import React from 'react';
import {Link, useLoaderData} from 'react-router-dom';

const ServiceDetails = () => {
  const service = useLoaderData ();
  const {title,discription,photoURL,price,days}  = service ;

  return (
    <div className=' mt-10 mb-20' >
      <h3  className='text-4xl text-center text-semibold text-slate-600 my-6' data-aos="fade-up"> See our Our service details </h3>
      <div className="card lg:card-side bg-base-100 p-8 shadow-2xl">
        <figure>
          <img className='h-full rounded-xl ' src={photoURL} alt="Album" />
        </figure>
        <div className="card-body">
           <h2 className='text-3xl text-semibold text-cyan-600'> {title} </h2>
           <div>
            <p className='text-3xl text text-orange-500 font-semibold'> Price ${price} </p>
            <p> <span className='text-3xl text-orange-700 font-bold'> {days} days </span>  </p>
           </div>
          <p>  {discription} </p>
          <div className="card-actions justify-end">
            <Link to= '/service'>  <button className="btn btn-primary"> See All </button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
