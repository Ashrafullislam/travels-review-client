import React from 'react';
import UseTitle from '../../Title/UseTitle';
import Banner from './Homes/Banner/Banner';
import Responsive from './Homes/MultipleCarousel/MultipleCarousel';
import OurService from './Homes/OurService/OurService';
import TeamMember from './Homes/TeamMember/TeamMember';


const Home = () => {
    UseTitle("Home")
    return (
        <div>
            
             <Banner > </Banner>
             <OurService > </OurService>
             <Responsive > </Responsive>
             <TeamMember > </TeamMember>
        </div>
    );
};

export default Home;