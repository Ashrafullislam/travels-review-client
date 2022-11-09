import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Home/Homes/OurService/ServiceCard/ServiceCard';


const Services = () => {
    const services = useLoaderData()

    return (
        <div className='mb-20 mt-10'>
           <div className='mb-10'>
           <h3 className='text-4xl  font-semibold text-center'> My  Services :  </h3>
            <p className='text-center text-2xl font-semibold my-2'> We are providing best Service and doing work very fast  </p>
           </div>
            <div className='grid lg:grid-cols-2  gap-16 '>
            {
                services.map(service => <ServiceCard key={service._id} service = {service} > </ServiceCard> )
            }
            </div>
            
            
        </div>
    );
};

export default Services;