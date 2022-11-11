import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../../../../../../../AuthProvider/AuthProvider';

const AllReviewCard = ({review}) => {
    const {user} = useContext(AuthContext)
 const {clientName,photoURL,message,price ,serviceName
,serviceImg } = review ;
 console.log(review)
    return (
     <div>      
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  </figure>
  <div className="card-body items-center text-center">
    <img src={serviceImg} className = 'w-3/4' alt='' />
    <h2 className="card-title"> {serviceName} </h2>
    <p> {price} </p>
    <p>  {message} </p>
     <p> {clientName} </p>
     {photoURL ?
        
        <img src={photoURL} alt="client img" className='w-16 h-16 rounded-full'  />
        :
        <FaUser className='w-16 h-16 rounded-full' /> 
     }
     
  </div>
</div>
      
        </div>
    );
};

export default AllReviewCard;