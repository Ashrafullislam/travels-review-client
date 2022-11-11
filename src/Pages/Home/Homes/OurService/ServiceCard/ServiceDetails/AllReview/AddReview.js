import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../../../../AuthProvider/AuthProvider';
import UseTitle from '../../../../../../../Title/UseTitle';

const AddReview = () => {
    const {user} = useContext(AuthContext);

   UseTitle("Add Review")

    const [users,setUsers] = useState({});
 
    const handleFormReview = (event) => {
        event.preventDefault()
        const form = event.target ;
        const name = `${form.name.value}` ;
        const email = user?.email || 'unregisterd';
        const serviceName = form.service_name.value ;
        const message = form.message.value;
    }

    const review = {
        
    }

    return (

        <div className='mt-10 mb-10 w-full bg-slate-200 p-5 mx-auto ' >
           <h3 className='text-3xl font-semibold my-10'> Please add your review  </h3>
           
           <form onSubmit={handleFormReview}> 
           <input  type="text" name = 'service_name' defaultValue= "" placeholder='Enter Service name' readOnly required className='lg:w-1/2 sm:w-10/12 h-8 px-3 rounded-md'  />
           <br /> <br />

           <input  type="text" name = 'name' defaultValue="" placeholder='Enter your name' required className='lg:w-1/2 sm:w-10/12 h-8 px-3 rounded-md'  />
           <br /> <br />

           <input  type="email" name = 'email' defaultValue= {user?.email} placeholder='Enter your email' required className='lg:w-1/2 sm:w-10/12 h-8 px-3 rounded-md' readOnly />
           <br /> <br />
            
           <input type="text" name = 'message'  placeholder='Please write your review about my services ' required className='lg:w-1/2 sm:w-10/12 h-40 px-3 rounded-md'  />
           <br /> <br />

         <input type="submit" value="Add Review  " className='text-md   btn btn-outline btn-primary'/>
            <br />
            <br />
            
        </form>
        </div>
    );
};

export default AddReview;