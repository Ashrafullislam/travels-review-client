import React, { useEffect } from 'react';

const OurService = () => {

    useEffect(()=> {
        fetch('')
        .then(res  => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h3 className='text-4xl text-center my-6 font-bold'> See my Best Services With Review  </h3>
            
        </div>
    );
};

export default OurService;