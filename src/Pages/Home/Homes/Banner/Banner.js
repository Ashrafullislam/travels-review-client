import React, { useEffect } from 'react';
import banner1 from '../../../../TravelImage/Banner/banner1.jpg'
import banner2 from '../../../../TravelImage/Banner/banner2.jpg'
import banner3 from '../../../../TravelImage/Banner/banner3.jpg'
import banner4 from '../../../../TravelImage/Banner/banner4.jpg'
import banner5 from '../../../../TravelImage/Banner/banner5.jpg'
import './Banner.css';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Banner = () => {
//animation 

    return (

<div className="carousel w-full slider-height mb-14  ">
  <div id="slide1" className="carousel-item relative w-full">
 
  <img src={banner1} alt='banner1' className="w-full  " />
    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2 ">
    <p className='text-center text-5xl text-white' data-aos="fade-left" > Wellcome My Travels Zoone </p>
    </div>

    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide4" className="btn btn-circle bg-blue-700 mr-3">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-blue-700 ">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} alt='banner2' className="w-full " /> 

    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2 ">
    <p className='text-center font-bold text-5xl text-white'> Wonderful places ,You can travel and <br /> enjoy with nature  </p>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide1" className="btn btn-circle bg-blue-700 mr-3">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-blue-700">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
    <img src= {banner3} alt='banner3' className="w-full rounded-t-md" />
 
    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2 ">
    <p className='text-center text-5xl text-white'> See Our Best Services and Booking now <br /> for visit your favourite places  </p>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide2" className="btn btn-circle bg-blue-700 mr-3">❮</a> 
      <a href="#slide5" className="btn btn-circle bg-blue-700">❯</a>
    </div>
  </div> 

  <div id="slide4" className="carousel-item relative w-full">
  <img src= {banner4} alt='banner4' className="w-full " />

     <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2 ">
     <p className='text-center text-5xl text-white'> Yey! Wonderfull Country and beautiful places. <br />  Fast come and booking on your ticket with  us  </p>
     </div>
     <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide3" className="btn btn-circle bg-blue-700 mr-3">❮</a> 
      <a href="#slide5" className="btn btn-circle bg-blue-700">❯</a>
    </div>
  </div>

  <div id="slide5" className="carousel-item relative w-full">
  <img src= {banner5} alt='banner5' className="w-full  Image" />

    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2 ">
    <p className='text-center text-5xl text-white'> Best of Luck and visit world best Places  </p>
    </div>
    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle bg-blue-700 mr-3">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-blue-700">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;