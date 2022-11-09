import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

const ServiceCard = ({service}) => {

 const {title, photoURL, price,days  } = service ;

 useEffect(()=> {
  Aos.init({duration: 2000})
 },[])
 console.log(title)
    return (
        <div className='mx-auto ' data-aos="fade-left" >
     <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src= {photoURL} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {service.title}
    </h2>
    <div className='flex justify-between'>
    <h2 className='text-2xl font-semibold'> ${price} </h2>
    <h2 className='text-2xl font-semibold ' >for <span className='text-blue-600' > {days} </span>days </h2>
    </div>
    <p> If you want to visit the beautiful place , please booking now</p>
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