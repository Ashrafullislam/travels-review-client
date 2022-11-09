import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import Aos from 'aos';
import 'aos/dist/aos.css'
const OurService = () => {
const [services, setServices ] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/service')
        .then(res  => res.json())
        .then(data => setServices(data))
    },[])


    // animation 
    useEffect(()=> {
        Aos.init({duration:1500})
    },[])
    return (
        <div className='mx-auto' data-aos='zoom-in' >
              <h3 className='text-4xl text-center my-10 font-bold' data-aos="fade-left" > See my Best Services With Review  </h3>
            <div className='grid lg:grid-cols-2  gap-6 ' >
          
            {
                services.map(service => <ServiceCard key={service._id} service = {service} > </ServiceCard> )
            }
            
            </div>
          
        </div>
    );
};

export default OurService;