import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const OurService = () => {
const [services, setServices ] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/service')
        .then(res  => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mx-auto'>
              <h3 className='text-4xl text-center my-6 font-bold'> See my Best Services With Review {services.length}  </h3>
            <div className='grid lg:grid-cols-2  gap-6   '>
          
            {
                services.map(service => <ServiceCard key={service._id} service = {service} > </ServiceCard> )
            }
            
            </div>
          
        </div>
    );
};

export default OurService;