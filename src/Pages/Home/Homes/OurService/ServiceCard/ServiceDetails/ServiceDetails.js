import React from 'react';
import {Link, useLoaderData} from 'react-router-dom';

const ServiceDetails = () => {
  const service = useLoaderData ();
  const {title,discription,photoURL,price,days}  = service ;

  return (
    <div className=' mt-10 mb-20' >
     <div className="card lg:card-side bg-base-100 shadow-xl p-5">
  <figure><img src={photoURL} alt="Album" className='w-96 h-96 rounded-lg '/></figure>
  <div className="card-body w-96 mx-auto ">
    <h2 className="card-title"> {title} </h2>
     <div className=''>
      <p className='text-3xl text-semibold text-blue-600'> Price: ${price} </p>
      <p className='text-3xl text-semibold text-blue-600'> {days}days </p>
     </div>
    <p className=''> {discription} </p>
    <div className="card-actions justify-end">
      <Link to='/service' ><button className="btn btn-primary"> See All </button> </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default ServiceDetails;
