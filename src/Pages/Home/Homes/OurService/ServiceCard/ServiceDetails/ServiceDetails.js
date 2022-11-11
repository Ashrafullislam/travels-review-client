import React, { useContext } from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import ShowPublicReview from './AllReview/ShowPublicReview/ShowPublicReview';
import { FaArrowRight, FaEye,FaExclamationTriangle} from "react-icons/fa";
import { AuthContext } from '../../../../../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';


const ServiceDetails = () => {
  const service = useLoaderData ();
  const {user} = useContext(AuthContext);

  // if user not log in show the toast 
  const reviewAdd = ()=> {
   
    if(!user){
      toast('Please Log in now , then add review',<FaExclamationTriangle />)
    }
  }
 
  // add review form handlar 
  const handleFormReview = (event) => {
    event.preventDefault()
    const form = event.target ;
    const name = `${form.name.value}` ;
    const email = user?.email || 'unregisterd';
    const serviceName = form.service_name.value ;
    const photoURL = user?.photoURL || 'unregisterd' ;
    const message = form.message.value;
    console.log(name,message,email,serviceName,photoURL)
}


const review = {

}



  const {title,discription,photoURL,price,days,name}  = service ;

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
      <Link to='/service' ><button className="btn btn-primary"> See All <FaEye  /> </button> </Link>
    </div>
    </div>
   </div>

    <div className='my-10'>
       <ShowPublicReview > </ShowPublicReview>
       <div className='my-6'>
     
     </div> 
        <div>
        {/* The button to open modal */}
        <label htmlFor="my-modal-4"  className="btn  btn-outline btn-primary ">Please Add review <FaArrowRight  />  </label>
        
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
          <h3 className='text-3xl text-blue-500 my-3'> Please Add your review  </h3>
           <img src='' alt='' /> 
          <form onSubmit={handleFormReview} className = 'bg-slate-500 p-5'> 
           <input  type="text" name = 'service_name' defaultValue= {name} placeholder='Enter Service name' readOnly required className='w-full h-8 px-3 rounded-md '  />
           <br /> <br />

           <input  type="text" name = 'name' defaultValue="" placeholder='Enter your name' required className='w-full h-8 px-3 rounded-md'  />
           <br /> <br />

           <input  type="url" name = 'url' defaultValue={user?.photoURL} placeholder='photo url' readOnly  className='w-full h-8 px-3 rounded-md'  />
           <br /> <br />
           
           <input  type="email" name = 'email' defaultValue= {user?.email} placeholder='Enter your email' required className='w-full h-8 px-3 rounded-md' readOnly />
           <br /> <br />
            
           <textarea className="textarea textarea-secondary w-full" name="message" required placeholder=" Write about my service "></textarea>
      
           <br /> <br />

         <input type="submit" value="Add Review  " className='text-md   btn btn-outline btn-primary'/>
            <br />
            <br />
            
        </form>

          
          </label>
        </label>       
      
       </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
