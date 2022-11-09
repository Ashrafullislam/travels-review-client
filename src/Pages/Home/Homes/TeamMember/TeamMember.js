import React, { useEffect } from 'react';
import Member1 from '../../../../TravelImage/Team-member/member1.jpg'
import Member2 from '../../../../TravelImage/Team-member/member2.jpg'
import Member3 from '../../../../TravelImage/Team-member/member3.png'
import Member4 from '../../../../TravelImage/Team-member/member4.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
import './TeamMember.css';

const TeamMember = () => {
    useEffect(()=> {
        Aos.init({duration:2500})
    },[])
    return (
        <div className='my-16'>
            <h2 className='text-4xl font-bold text-center my-5' data-aos="flip-right"  > My Team Members </h2>
            <div className='flex flex-wrap items-center justify-center gap-6 '>
                <img src={Member1} alt="" className='rounded-2xl team' data-aos="fade-down" />
                <img src={Member2} alt="" className='rounded-2xl team' data-aos="fade-up" />
                <img src={Member4} alt="" className='rounded-2xl team' data-aos="fade-down" />
                <img  src= {Member3} alt='' className='rounded-2xl team' style={{width: '150px' ,height:'150px'}} data-aos="fade-up" />

            </div>
            
        </div>
    );
};

export default TeamMember;