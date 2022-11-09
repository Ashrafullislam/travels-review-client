import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

 const {title, photoURL, price  } = service ;
 console.log(title)
    return (
        <div className='mx-auto '>
     <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src= {photoURL} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {service.title}
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <Link >  <button className="btn btn-outline btn-primary">Button</button> </Link>
     <Link > <button className="btn btn-outline btn-primary">Button</button>  </Link>  

    </div>
  </div>
   </div>
            
        </div>
    );
};

export default ServiceCard;