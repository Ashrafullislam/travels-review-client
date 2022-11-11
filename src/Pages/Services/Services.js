import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import UseTitle from '../../Title/UseTitle';
import ServiceCard from '../Home/Homes/OurService/ServiceCard/ServiceCard';
import ShowPublicReview from '../Home/Homes/OurService/ServiceCard/ServiceDetails/AllReview/ShowPublicReview/ShowPublicReview';


const Services = () => {
    const services = useLoaderData()
    
    UseTitle("Services")

    return (
        <div className='mb-20 mt-10'>
           <div className='mb-10' data-aos="fade-right" >
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