import React from 'react';
import logo from '../../../TravelImage/Logo/travel_logo.png';

const Footer = () => {
 return (
    <div>
     <footer className="footer p-16 bg-slate-800 text-base-content text-lime-50">
  <div>
    <img style={{width:'60px', height:'50px' ,  borderRadius:'10px'}} src= {logo} alt=' logo ' /> 
    <p> Travels Zone <br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a href = " / " className="link link-hover"> Booking Hotel </a> 
    <a href = " / " className="link link-hover"> Air Ticket  </a> 
    <a href = " / " className="link link-hover">  Sheep Ticket </a> 
    <a href = " / " className="link link-hover"> Awesome Bus  </a>
  </div> 
  <div>
    <span className="footer-title"> Our Pages </span> 
    <a href = " / " className="link link-hover"> Home </a> 
    <a href = " / " className="link link-hover"> Service  </a> 
    <a href = " / " className="link link-hover"> Review</a> 
    <a href = " / " className="link link-hover"> Blog </a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a href = " / " className="link link-hover">Terms of use</a> 
    <a href = " / " className="link link-hover">Privacy policy</a> 
    <a href = " / " className="link link-hover">Cookie policy</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;