import React, {useContext, useState} from 'react';
import {
  Link,
  useLoaderData,

} from 'react-router-dom';

import ShowPublicReview from './AllReview/ShowPublicReview/ShowPublicReview';
import {FaEye, FaExclamationTriangle} from 'react-icons/fa';
import {AuthContext} from '../../../../../../AuthProvider/AuthProvider';
import {toast} from 'react-toastify';
import AddReview from '../../../../../AddReview/AddReview';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetails = () => {
  const service = useLoaderData ();
  const {user} = useContext (AuthContext);
  const {title, discription, photoURL, price, days, name, _id} = service;
  
  const handleFormReview = (event) => {
     event.preventDefault()
     const form = event.target  ;
     const name = `${form.name.value}`;
     const email = user?.email  || 'unregistered';
     const message = form.message.value ;
     const userPhoto = form.url.value;

     const review = {
      service : _id ,
      serviceName: title ,
      email,
      message,
      price ,
      clientName: name,
      photoURL :userPhoto ,
      serviceImg: photoURL , 
    }
    fetch ('https://travelzone.vercel.app/reviews', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
     })
     .then(res => res.json())
     .then(data => console.log(data))
     .catch(err => console.log(err))
  
  }

  return (
    <div className=" mt-10 mb-20">
      <div className="card lg:card-side bg-base-100 shadow-xl p-5">
        <figure>
              <PhotoProvider>
                    <PhotoView src={photoURL}>
                    <img src={photoURL} alt="Album" className="w-96 h-96 rounded-lg " />

                    </PhotoView>
                </PhotoProvider>

        </figure>
        <div className="card-body w-96 mx-auto ">
          <h2 className="card-title"> {title} </h2>
          <div className="">
            <p className="text-3xl text-semibold text-blue-600">
              {' '}Price: ${price}{' '}
            </p>
            <p className="text-3xl text-semibold text-blue-600"> {days}days </p>
          </div>
          <p className=""> {discription} </p>
          <div className="card-actions justify-end">
            <Link to="/service">
              <button className="btn btn-primary"> See All <FaEye /> </button>
              {' '}
            </Link>
            <Link to="/add-review">
           
              {' '}
            </Link>

          </div>
        </div>
      </div>

      <div className="my-10">
        <ShowPublicReview> </ShowPublicReview>
   
        <div className="my-6">
          <Link to={`/addreview/${_id}`} >

            <button className="btn btn-primary ml-3">
                {' '}Please give review{' '}
              </button>
           </Link>
       <div> 

         {/* The button to open modal 
      <label htmlFor="my-modal-4" className="btn">open modal</label>

      {/* Put this part before </body> tag
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
            
       <h2 className='text-3xl font-semibold'> {title} </h2>
            <form onSubmit={handleFormReview} className = 'bg-slate-400 p-10'> 
             
           <input  type="text" name = 'serviceName' placeholder='Enter Enter Service name' defaultValue={title} required className='w-full h-8 px-3 rounded-md'  readOnly />
           <br /> <br />

           <input  type="text" name = 'name' placeholder='Enter your name ' required className='w-full h-8 px-3 rounded-md'   />
           <br /> <br />
           <input  type="url" name = 'url' placeholder='Enter url' defaultValue={user?.photoURL} required className='w-full h-8 px-3 rounded-md'  />
           <br /> <br />

           <textarea className="textarea textarea-primary w-full" name='message' required placeholder="Please type about my service "></textarea>
           
            <input type="submit" value="Add review  " className='text-md text-white  btn btn-outline btn-warning'  />
            <br  />
        </form>
        
        </label>
      </label>
               */}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
