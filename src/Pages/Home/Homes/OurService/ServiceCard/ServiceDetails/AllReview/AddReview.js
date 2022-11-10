import React, { useState } from 'react';

const AddReview = () => {


    const [user,setUser] = useState({});
    const handleValueOnBlur = (event) => { 
        const name = event.target.name ;
        const value = event.target.value ;
        const newUser = {...user}
        newUser[name] = value ;
        setUser(newUser);
    }
    const handleFormReview = (event) => {
        event.preventDefault()
    }

    return (

        <div className='mt-10 mb-10 w-full bg-slate-200 p-5 mx-auto ' >
           <h3 className='text-3xl font-semibold my-10'> Please add your review  </h3>
           <form onSubmit={handleFormReview}>        
           <input onBlur={handleValueOnBlur} type="text" name = 'name' placeholder='Enter Service name ' required className='lg:w-1/2 sm:w-10/12 h-8 px-3 rounded-md'  />
           <br /> <br />
           <input onBlur={handleValueOnBlur} type="text" name = 'review' placeholder='Please write your review about my services ' required className='lg:w-1/2 sm:w-10/12 h-40 px-3 rounded-md'  />
           <br /> <br />
            <input type="submit" value="Add Review  " className='text-md   btn btn-outline btn-primary' />
            <br />
            <br />
            
        </form>
        </div>
    );
};

export default AddReview;