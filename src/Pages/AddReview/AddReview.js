import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddReview = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData()
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
        <div>
            <h2> What Client Say </h2>

            <div className="my-6">
       <div className=' '> 

            
       <h2 className='text-3xl font-semibold my-3'> {title} </h2>
            <form onSubmit={handleFormReview} className = 'bg-slate-200 p-10 rounded-md'> 
             
           <input  type="text" name = 'serviceName' placeholder='Enter Enter Service name' defaultValue={title} required className='w-full h-8 px-3 rounded-md'  readOnly />
           <br /> <br />

           <input  type="text" name = 'name' placeholder='Enter your name ' required className='w-full h-8 px-3 rounded-md'   />
           <br /> <br />
           <input  type="url" name = 'url' placeholder='Enter url' defaultValue={user?.photoURL} required className='w-full h-8 px-3 rounded-md'  />
           <br /> <br />

           <textarea className="textarea textarea-primary w-full" name='message' required placeholder="Please type about my service "></textarea>
           
            <input type="submit" value="Add review  " className='text-md text-white  btn btn-outline btn-primary'  />
            <br  />
        </form>
        
    

          </div> 
        </div>
        </div>
    );
};

export default AddReview;