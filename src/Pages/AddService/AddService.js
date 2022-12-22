import React from 'react';
import { toast } from 'react-toastify';
import UseTitle from '../../Title/UseTitle';

const AddService = () => {
    UseTitle("Add Service ")
    
    const handleFormReview = (event) => {
        event.preventDefault()
        const form = event.target  ;
        const name = form.name.vlaue ;
        const title = form.title.value ;
        const message = form.message.value ;
        const userPhoto = form.url.value;
        const days = form.days.value ;
        const price = form.price.value ;
   
        const review = { 
         serviceName: name ,
         title,
         message,
         price ,
         days,
         photoURL :userPhoto ,
       }
       fetch ('https://travelzone.vercel.app/add_service', {
         method: "POST",
         headers: {
           'content-type': 'application/json'
         },
         body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged === true ){
                toast('Service added successfull')
                form.reset()
            }
        })
        .catch(err => console.log(err))
     
     }

    return (
        <div>
            <h2 className='text-3xl font-semibold my-3'> Add New Service   </h2>
            <form onSubmit={handleFormReview} className = 'bg-slate-200 p-10 rounded-md'> 
             
           <input  type="text" name = 'name' placeholder='Enter Enter Service name'  required className=' w-9/12 h-8 px-3 rounded-md'  />
           <br /> <br />

           <input  type="text" name = 'title' placeholder='Enter your sercice title ' required className=' w-9/12 h-8 px-3 rounded-md'   />
           <br /> <br />
       
           <input  type="url" name = 'url' placeholder='Enter url'  required className=' w-9/12 h-8 px-3 rounded-md'  />
           <br /> <br />
           <input  type="number" name = 'price' placeholder='Enter service price ' required className='w-9/12 h-8 px-3 rounded-md'   />
           <br /> <br />
           <input type= 'number'  name='days' required  placeholder='Enter days ' className='w-9/12 px-3 h-8 rounded-md' />
           <br />  <br/>
           <textarea className="textarea textarea-primary w-9/12" name='message' required    placeholder="Please type about my service "></textarea> 
           <br  />
           
            <input type="submit" value="Add service  " className='text-md text-white  btn btn-outline btn-primary'  />
            <br  />
        </form>
        
        </div>
    );
};

export default AddService;