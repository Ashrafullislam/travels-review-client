import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

const ServiceCard = ({service}) => {

 const {title, photoURL, price,days ,discription,_id} = service ;
 // animation card 
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
    {
      discription.length > 50 ? 
      <> {discription.slice(0,50)+'.....'} 
          <div className='flex justify-end'>
          <Link to= {`/service-details/${_id}`} >  <button className="btn btn-outline btn-primary mr-3"> View Details </button> </Link>  
          <Link to='/service' > <button className="btn btn-outline btn-primary"> See all </button>  </Link>  

          </div>
        

       </>
      :
      <p> {discription} </p>
    }
   
    
  </div>
   </div>
            
        </div>
    );
};

export default ServiceCard;