import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import Aos from 'aos';
import 'aos/dist/aos.css'
const OurService = () => {
const [services, setServices ] = useState([])
    useEffect(()=> {
        fetch('https://travelzone.vercel.app/services')
        .then(res  => res.json())
        .then(data => setServices(data))
    },[])


    // animation 
    useEffect(()=> {
        Aos.init({duration:1500})
    },[])
    return (
        <div className='mx-auto w-11/12' data-aos='zoom-in' >
            <div className='mt-6 mb-10'>
            <h3 className='text-4xl text-center mt-10 font-bold' data-aos="fade-left" > Wonderfull Places with  Package   </h3>
              <p className='text-center text-lg font-semibold text-black ' data-aos="fade-right"> Click see-all button and see all places </p>
            </div>
              
            <div className='grid lg:grid-cols-3 gap-8 ' >
          
            {
                services.map(service => <ServiceCard key={service._id} service = {service} > </ServiceCard> )
            }
            
            </div>
            
        </div>
    );
};

export default OurService;