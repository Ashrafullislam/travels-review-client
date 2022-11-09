import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

const ServiceCard = ({service}) => {

 const {title, photoURL, price,days ,discription
 } = service ;
console.log(service)
 useEffect(()=> {
  Aos.init({duration: 2000})
 },[])
    return (
        <div className='mx-auto ' data-aos="zoom-out" >
     <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src= {photoURL} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
    </h2>
    <div className='flex justify-between'>
    <h2 className='text-2xl font-semibold'> ${price} </h2>
    <h2 className='text-2xl font-semibold ' >for <span className='text-blue-600' > {days} </span>days </h2>
    </div>
   
    <p className='font-semibold '> If you want to visit the beautiful place , please booking now</p>
    <p className=''> {discription.slice(0,50)} </p>
    <div className="card-actions justify-end">
    <Link >  <button className="btn btn-outline btn-primary"> Services </button> </Link>
     <Link to='/service' > <button className="btn btn-outline btn-primary"> See all </button>  </Link>  

    </div>
  </div>
   </div>
            
        </div>
    );
};

export default ServiceCard;