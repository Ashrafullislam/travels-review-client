import React, { Component } from "react";
import Slider from "react-slick";
import './MultipleCarouse.css';
import place1 from '../../../../TravelImage/Place-img/shop-2-300x300.jpg'
import place2 from '../../../../TravelImage/Places/img-02.jpg'
import place3 from '../../../../TravelImage/Places/img-03.jpg'
import place4 from '../../../../TravelImage/Places/img-04.jpg'
import place5 from '../../../../TravelImage/Places/img-05.jpg'
import place6 from '../../../../TravelImage/Places/img-06.jpg'
import place7 from '../../../../TravelImage/Places/img-07.jpg'
import place8 from '../../../../TravelImage/Place-img/shop-3-300x300.jpg'


export default class AutoPlayMethods extends Component {
    constructor(props) {
      super(props);
      this.play = this.play.bind(this);
      this.pause = this.pause.bind(this);
    }
    play() {
      this.slider.slickPlay();
    }
    pause() {
      this.slider.slickPause();
    }
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
      return (
        <div  className="my-20">
          <h2 className="text-4xl my-10 text-center font-semibold" data-aos="flip-right"> Wonderful places in many contries </h2>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            <div className = " multi-carousel">
             <img className = " multi-carousel-image" src={place1} alt ='' />
            </div>
            <div className = " multi-carousel">
            <img className = " multi-carousel-image" src={place2} alt ='' />
            </div>

            <div className = " multi-carousel">
            <img className = " multi-carousel-image" src={place3} alt ='' />

            </div>

            <div className = " multi-carousel">
            <img className = " multi-carousel-image" src={place4} alt ='' />

            </div>

            <div className = " multi-carousel">
            <img className = " multi-carousel-image" src={place5} alt ='' />

            </div>
            <div className = " multi-carousel">
            <img className = " multi-carousel-image" src={place6} alt ='' />
            </div>

            <div className = " multi-carousel">
            <img className = " multi-carousel-image" src={place7} alt ='' />
            </div>
            <div className = " multi-carousel">
            <img className = " multi-carousel-image" src={place8} alt ='' />

            </div>
          </Slider>
          <div className="mt-10" style={{ textAlign: "center" }}>
            <button className="button  btn-success mr-3 px-8 py-3 rounded-md  " onClick={this.play}>
              Play
            </button>
            <button className="button   btn-primary px-8 py-3 rounded-md" onClick={this.pause}>
              Pause
            </button>
          </div>
        </div>
      );
    }
  }