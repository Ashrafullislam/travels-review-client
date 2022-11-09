import React from 'react';
import Member1 from '../../../../TravelImage/Team-member/member1.jpg'
import Member2 from '../../../../TravelImage/Team-member/member2.jpg'
import Member3 from '../../../../TravelImage/Team-member/member3.png'
import Member4 from '../../../../TravelImage/Team-member/member4.jpg'

import './TeamMember.css';

const TeamMember = () => {
    return (
        <div className='my-16'>
            <h2 className='text-4xl font-bold text-center my-5'> My Team Members  </h2>
            <div className='flex flex-wrap items-center justify-center gap-6 '>
                <img src={Member1} alt="" className='rounded-2xl team'  />
                <img src={Member2} alt="" className='rounded-2xl team' />
                <img src={Member4} alt="" className='rounded-2xl team' />
                <img  src= {Member3} alt='' className='rounded-2xl team' style={{width: '150px' ,height:'150px'}} />

            </div>
            
        </div>
    );
};

export default TeamMember;